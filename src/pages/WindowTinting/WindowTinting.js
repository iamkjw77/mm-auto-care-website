import GetAQuoteBanner from 'containers/GetAQuoteBanner/GetAQuoteBanner';
import OurWorks from 'containers/OurWorks/OurWorks';
import ServiceInfoType2 from 'containers/ServiceInfoType2/ServiceInfoType2';
import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
import SubPageTitle from 'containers/SubPageTitle/SubPageTitle';
import Video from 'containers/Video/Video';
import WindowTintingCarbon from 'containers/WindowTintingCarbon/WindowTintingCarbon';
import WindowTintingCeramic from 'containers/WindowTintingCeramic/WindowTintingCeramic';
import React from 'react';

const carouselImgs = [
  {
    id: 1,
    path: 'assets/windowOurWorks_01.png'
  },
  {
    id: 2,
    path: 'assets/windowOurWorks_02.png'
  },
  {
    id: 3,
    path: 'assets/windowOurWorks_03.png'
  },
  {
    id: 4,
    path: 'assets/windowOurWorks_04.png'
  },
  {
    id: 5,
    path: 'assets/windowOurWorks_05.png'
  }
];

const WindowTinting = () => {
  return (
    <>
      <SubMainBanner
        title="Window Tinting"
        desc="LVS for your car"
        bgImg="assets/WindowTintingBannerImage.png"
      />
      <SubPageTitle
        title="Window Tinting"
        desc="PRIVACY, UV PROTECTION, HEAT REJECTION"
      />
      <Video />

      <ServiceInfoType2
        imageLabel="A Car with Carbon Film applied"
        imagePath="./assets/carbon-film.png"
        infoList={[
          '5 Year Warranty',
          'Great solar performance with advanced UV protection',
          'No metal layers to cause interference with cell phone/radio'
        ]}
        subTitle="Non-Metal / Fading, Color Stable, Dyed"
        title="Carbon Film"
      />
      <WindowTintingCarbon />
      <ServiceInfoType2
        imageLabel="A Car with Ceramic Film applied"
        imagePath="./assets/ceramic-film.png"
        infoList={[
          'Lifetime Warranty',
          'Proprietary non-metallized, nonconductive nano-ceramic technology maximizes heat and ultraviolet rejection, keeping you and your vehicle cool and helping to protect from the damaging effects of the sun.'
        ]}
        subTitle="Non-Metal, Maximum Heat Rejection"
        title="Ceramic Film"
      />
      <WindowTintingCeramic />
      <OurWorks contents={carouselImgs} />
      <GetAQuoteBanner
        title="Get a Free Quote"
        desc="Book Youar Service button link to contact form."
        linkText="Get a Free Quote"
        styledmode="secondary"
        color="red_05"
      />
    </>
  );
};

export default WindowTinting;