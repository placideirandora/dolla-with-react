import svgOne from '../../images/svg-1.svg';
import svgTwo from '../../images/svg-2.svg';
import svgThree from '../../images/svg-3.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headline: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Get Started',
  imgStart: false,
  img: svgOne,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headline: 'Login into your account at any time',
  description:
    'We have you covered no matter where you are located. All you need is an Internet connection and a phone or computer.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: svgTwo,
  alt: 'Piggybank',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join Our Team',
  headline: 'Creating an Account is extremely easy',
  description:
    'Get everything set up and ready in under 10 minutes. All you need is to add your information and you are ready to go.',
  buttonLabel: 'Start Now',
  imgStart: false,
  img: svgThree,
  alt: 'Papers',
  dark: false,
  primary: false,
  darkText: true,
};
