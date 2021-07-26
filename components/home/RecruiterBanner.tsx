import React from 'react';
import { RecruiterBannerDiv, BannerLeftDiv } from './RecruiterBannerStyles';
import Image from 'next/image';
import { RecruiterPageData } from 'data/pages/home/RecruiterPage';
import BannerText from '@components/Atomos/BannerText';
import { AppRouter } from 'types/Enums';

const RecruiterBanner = () => {
  // Información estatica de las paginas
  const { buttonContent, para } = RecruiterPageData;

  return (
    <RecruiterBannerDiv>
      <BannerLeftDiv>
        <BannerText para={para} buttonContent={buttonContent} link={AppRouter.formRecruiter} />
      </BannerLeftDiv>
      <Image src="/mujer_recruiter.png" alt="recruiters-banner" width={500} height={800} />
    </RecruiterBannerDiv>
  );
};

export default RecruiterBanner;
