import { RowsEnums } from 'types/Enums';
import { ServicesInterface } from 'types/Interfaces';
import { FaMoneyBillWave } from 'react-icons/fa';
import { BsQuestionCircle } from 'react-icons/bs';
import { GiSandsOfTime } from 'react-icons/gi';
import { AiFillStar } from 'react-icons/ai';

export const Services: ServicesInterface[] = [
  {
    logo: () => <FaMoneyBillWave />,
    header: 'Ingresos',
    desc: 'Los ingresos varían todos los meses acorde a tu desempeño',
    row: RowsEnums.one,
  },
  {
    logo: () => <BsQuestionCircle />,
    header: 'Asesoramiento',
    desc: 'Contamos con Recruiters mentores que estarán disponibles para ayudarte en el proceso',
    row: RowsEnums.one,
  },
  {
    logo: () => <GiSandsOfTime />,
    header: 'Plataforma RF',
    desc: 'Nuestra plataforma fue especialmente diseñada para agilizar los procesos de nuestros reclutadores',
    row: RowsEnums.two,
  },
  {
    logo: () => <AiFillStar />,
    header: 'Independencia',
    desc: 'Podrás organizar tus horarios a tu manera, según los requerimientos de tus clientes',
    row: RowsEnums.three,
  },
];
