import { useRouter } from 'next/router';
import Image from 'next/image';
import RecruitersLogo from '../components/Atomos/RecruitersLogo';
import PageData from '../data/Pages';
import styles from './scss/Home.module.scss';
import Button from '../components/Atomos/Button';
import Link from 'next/link';

// Delete this if runtime JavaScript is needed:
export const config = {
  unstable_runtimeJS: false,
};

const Home = () => {
  const { pathname } = useRouter();
  // Información estatica de las paginas
  const {
    header: { header: Header, subHeader: SubHeader },
  } = PageData.home;

  console.log(pathname);

  if (pathname === '/') {
    return (
      <div className={styles.container}>
        <div></div>
        <div className={styles.data}>
          <div>
            <Image src="/re-logo.png" alt="re-logo" height={101} width={76} priority />
            <RecruitersLogo />
          </div>
          <div className={styles.bannerHeader}>
            <Header />
            <SubHeader />
          </div>
          <div>
            <Button type="anchor" path="/home/empresa" buttonClass="homeWhite">
              Empresa
            </Button>
            <Button type="anchor" path="/home/recruiter" buttonClass="homeOrange">
              Recruiter
            </Button>
            <Button type="anchor" buttonClass="homeBlue">
              Empleos
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
