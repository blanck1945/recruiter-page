import { useRouter } from 'next/router';
import RecruitersLogo from '../components/Atomos/RecruitersLogo';
import PageData from '../data/Pages';
import styles from './scss/Home.module.scss';
import Button from '../components/Atomos/Button';
import LogoImage from '../components/Atomos/LogoImage';
import { useUser } from '@auth0/nextjs-auth0';

// Delete this if runtime JavaScript is needed:
export const config = {
  unstable_runtimeJS: false,
};

const Home = () => {
  // router
  const { pathname, ...router } = useRouter();

  // Información estatica de las paginas
  const {
    header: { header: Header, subHeader: SubHeader },
  } = PageData.home;

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    router.push(`dashboard/${user.name}/dash`);
  }

  if (pathname === '/') {
    return (
      <div className={styles.container}>
        {user ? (
          <p>Loading...</p>
        ) : (
          <>
            <div></div>
            <div className={styles.data}>
              <div>
                <LogoImage />
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
          </>
        )}
      </div>
    );
  }
};

export default Home;
