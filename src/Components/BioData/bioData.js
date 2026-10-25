// A value is a string or an array of strings (array → one line per entry).
// Fields with an empty value are skipped, and so are sections left with no fields.

export const fullName = 'Darshan Tank';
export const site = ''; // e.g. 'darshantank.dev' — shown in each page's footer when set
export const portrait = '/bio-data/20241011_114816.jpg';
export const initialPhotos = ['/bio-data/photo-1.jpg', '/bio-data/photo-2.jpg'];

export const sections = [
  {
    heading: 'Personal Details',
    fields: [
      { label: 'Date of Birth', value: '17 August 2003' },
      { label: 'Height', value: '5.6 ft' },
      { label: 'Weight', value: '62 kg' },
      { label: 'Blood Group', value: '' },
      { label: 'Caste', value: 'Kadiya' },
    ],
  },
  {
    heading: 'Education & Career',
    fields: [
      { label: 'Education', value: 'MBA in Finance' },
      { label: 'Designation', value: 'Residential Operations Executive' },
      { label: 'Company', value: 'Bhanu PV Solar Pvt. Ltd.' },
    ],
  },
  {
    heading: 'Family Details',
    fields: [
      { label: 'Father', value: 'Ashwinbhai Batukbhai Tank' },
      { label: "Father's Occupation", value: 'Construction' },
      { label: 'Mother', value: 'Sonalben Ashwinbhai Tank' },
      { label: 'Siblings', value: '1 younger sister' },
      {
        label: 'Maternal Uncles',
        value: ['Sureshbhai Jaysukhbhai Divecha', 'Atulbhai Jaysukhbhai Divecha', 'Rampara'],
      },
    ],
  },
  {
    heading: 'Contact & Residence',
    fields: [
      { label: 'Contact Number', value: ['+91 98983 86090', '+91 63539 49337'] },
      { label: 'Address', value: 'Ashapura Society, Gondal.' },
    ],
  },
  {
    heading: 'Property',
    fields: [{ label: 'Holdings', value: 'Own house in Gondal, Biliyala' }],
  },
];
