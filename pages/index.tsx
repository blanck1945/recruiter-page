import { useRouter } from 'next/router';
import RecruitersLogo from '../components/Atomos/RecruitersLogo';
import styles from './scss/Home.module.scss';
import Button from '../components/Atomos/Button';
import LogoImage from '../components/Atomos/LogoImage';
import { signOut, useSession } from 'next-auth/client';
import Image from 'next/image';
import { HomePageData } from 'data/pages/HomePage';

// Delete this if runtime JavaScript is needed:
export const config = {
  unstable_runtimeJS: false,
};

const Home = () => {
  // router
  const { pathname, ...router } = useRouter();

  // Información estatica de las paginas
  const {
    text: { header: Header, subHeader: SubHeader },
    buttons,
  } = HomePageData;

  const [session, isLoading] = useSession();

  if (pathname === '/') {
    return (
      <div className={styles.container}>
        <div>
          <Image src={'/business-3d-3.png'} alt="mujer-home" height={150} width={200} priority />
          <Image
            src={'/home/business-3d-2.png'}
            alt="mujer-home"
            height={150}
            width={200}
            priority
          />
          <Image src={'/mujer-home.png'} alt="mujer-home" height={800} width={800} priority />
        </div>
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
            {buttons.map((btn: any, index: number) => {
              return (
                <Button key={index} {...btn}>
                  {btn.content}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
