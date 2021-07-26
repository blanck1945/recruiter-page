import { MdLocationSearching } from 'react-icons/md';
import { BsPeople } from 'react-icons/bs';
import { GiSuitcase } from 'react-icons/gi';
import { AiFillSetting } from 'react-icons/ai';
import { FiHelpCircle } from 'react-icons/fi';
import { BiExit } from 'react-icons/bi';
import { signOut } from 'next-auth/client';

export const sideActions = [
  {
    icon: () => <MdLocationSearching />,
    content: 'Tus búsquedas',
  },
  {
    icon: () => <BsPeople />,
    content: 'Candidatos',
  },
  {
    icon: () => <GiSuitcase />,
    content: 'Empresas',
  },
  {
    icon: () => <AiFillSetting />,
    content: 'Configuración',
  },
  {
    icon: () => <FiHelpCircle />,
    content: 'Ayuda',
  },
  {
    name: 'exit',
    icon: () => <BiExit />,
    content: 'Salir',
  },
];
