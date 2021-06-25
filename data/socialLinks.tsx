import { IoLogoInstagram } from 'react-icons/io';
import { GrLinkedin } from 'react-icons/gr';
import { FaTwitter } from 'react-icons/fa';

export default [
  {
    link: 'https://www.instagram.com/recruitersfreelance/',
    name: 'instagram',
    logo: () => <IoLogoInstagram />,
  },
  {
    link: 'https://www.linkedin.com/company/recruitersfreelance/',
    name: 'linkedIn',
    logo: () => <GrLinkedin />,
  },
  {
    link: '',
    name: 'twitter',
    logo: () => <FaTwitter />,
  },
];
