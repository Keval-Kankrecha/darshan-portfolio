import React, { useEffect, useRef, useState } from 'react';
import { sections, fullName, site, portrait, initialPhotos } from './bioData';
import './BioData.css';

// Passphrase padded with 6 chars on each side, then base64-encoded.
// New token: btoa('XXXXXX' + 'new-password' + 'YYYYYY')
// Note: this is a speed bump, not real protection — the data ships in the bundle.
const TOKEN = 'azdRbTJ4RGFyc2hhbkBCaW9EYXRhVnA5ckx3';
const PAD = 6;
const REQUIRE_PASSWORD = false; // set to true to bring the password gate back

const lines = (v) => (Array.isArray(v) ? v : [v]).filter(Boolean);

const visibleSections = sections
  .map((s) => ({ ...s, fields: s.fields.filter((f) => lines(f.value).length > 0) }))
  .filter((s) => s.fields.length > 0);

function Corners() {
  return ['tl', 'tr', 'bl', 'br'].map((p) => <span key={p} className={`corner corner--${p}`} />);
}

function Divider() {
  return <div className="divider" aria-hidden="true">&#10022;</div>;
}

function Foot() {
  return (
    <footer className="foot">
      <Divider />
      {site && <a href={`https://${site}`}>{site}</a>}
    </footer>
  );
}

export default function BioDataComponent() {
  const [unlocked, setUnlocked] = useState(!REQUIRE_PASSWORD); // not persisted on purpose
  const [toast, setToast] = useState('');
  const [photos, setPhotos] = useState(initialPhotos);
  const timer = useRef();

  useEffect(() => {
    document.body.style.background = '#fbf3e4';
    return () => {
      document.body.style.background = '';
      clearTimeout(timer.current);
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const input = e.currentTarget.elements.passphrase;
    const ok = input.value === atob(TOKEN).slice(PAD, -PAD);
    input.value = '';
    if (ok) return setUnlocked(true);
    clearTimeout(timer.current);
    setToast('Sorry — you are not able to visit this page.');
    timer.current = setTimeout(() => setToast(''), 3500);
  };

  if (!unlocked) {
    return (
      <div className="bio-data">
        <div className="gate">
          <form className="gate__card" onSubmit={onSubmit}>
            <Corners />
            <h1 className="gate__title">Bio Data</h1>
            <Divider />
            <p className="gate__hint">
              This content is password-protected. Please enter the password to view it.
            </p>
            <label className="gate__label" htmlFor="passphrase">Password</label>
            <input className="gate__input" id="passphrase" name="passphrase" type="password"
                   autoComplete="current-password" autoFocus />
            <button className="gate__btn" type="submit">Unlock</button>
          </form>
          {toast && <div className="toast" role="alert">{toast}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className="bio-data">
      <section className="page">
        <div className="card">
          <Corners />
          <header className="head">
            <div className="arch">
              <img src={portrait} alt={fullName} width="330" height="410" />
            </div>
            <h1 className="name">{fullName}</h1>
            <Divider />
          </header>
          <div className="sections">
            {visibleSections.map((s) => (
              <section className="section" key={s.heading}>
                <h2>{s.heading}</h2>
                <dl className="fields">
                  {s.fields.map((f) => (
                    <React.Fragment key={f.label}>
                      <dt>{f.label}</dt>
                      <dd>{lines(f.value).map((l) => <span key={l}>{l}</span>)}</dd>
                    </React.Fragment>
                  ))}
                </dl>
              </section>
            ))}
          </div>
          <Foot />
        </div>
      </section>

      {photos.length > 0 && (
        <section className="page page--photos">
          <div className="card">
            <Corners />
            <header className="head"><Divider /></header>
            <div className="gallery">
              {photos.map((src) => (
                <figure key={src}>
                  <img src={src} alt={fullName} decoding="async"
                       onError={() => setPhotos((p) => p.filter((x) => x !== src))} />
                </figure>
              ))}
            </div>
            <Foot />
          </div>
        </section>
      )}
    </div>
  );
}
