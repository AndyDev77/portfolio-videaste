// import images
import Logo from "../src/img/header/logo.svg";
import GalleryImg1 from "../src/img/gallery/1.png";
import GalleryImg2 from "../src/img/gallery/2.png";
import GalleryImg3 from "../src/img/gallery/3.png";

import Video1 from "../src/video/1.mp4";
import Video2 from "../src/video/2.mp4";
import Video3 from "../src/video/3.mp4";

// import QuoteImg from "../src/img/testimonial/quote.svg";
// import icons
import { GrFacebookOption } from "react-icons/gr";
import { IoMdArrowForward } from "react-icons/io";
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: "/", name: "Accueil" },
    { href: "/", name: "A propos" },
    { href: "/", name: "Projets" },
    { href: "/", name: "Contact" },
  ],
};

export const socialData = [
  { href: "/", icon: <GrFacebookOption /> },
  { href: "/", icon: <IoLogoInstagram /> },
  { href: "/", icon: <IoLogoTwitter /> },
];

export const heroData = {
  title: "Thomas Delangle",
  subtitle:
    "Une fusion artistique et technique captivante, où chaque projet raconte une histoire immersive avec des montages fluides et une attention aux détails.",
  btnText: "Télécharger mon CV",
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: "Mon histoire:",
  subtitle1:
    "In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.",
  subtitle2:
    "Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.",
  btnText: "En savoir plus",
  btnIcon: <IoMdArrowForward />,
};

export const ProjectsData = {
  title: "Mes projets",
  btnText: "Voir les projets",
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      name: "Imaginify",
      description:
        "Création d'un SaaS avec des fonctionnalités d'IA et un système de paiements et de crédits.",
      video: Video1,
    },
    {
      src: GalleryImg2,
      name: "fdjgti",
      description:
        "Création d'un SaaS avec des fonctionnalités d'IA et un système de paiements et de crédits.",
      video: Video2,
    },
    {
      src: GalleryImg3,
      name: "sbrteo",
      description:
        "Création d'un SaaS avec des fonctionnalités d'IA et un système de paiements et de crédits.",
      video: Video3,
    },
  ],
};

export const interviewData = {
  title:
    "“Consider what you desire. Your tattoo artist will never tell you what tattoo to have.”",
  btnText: "Regarder maintenant",
  btnIcon: <FaPlay />,
};

// export const testimonialData = [
//   {
//     quoteImg: QuoteImg,
//     message:
//       "The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique.They will properly consult with you.",
//     name: "Jack Geoffrey",
//     occupation: "Tattoo Artist",
//   },
//   {
//     quoteImg: QuoteImg,
//     message:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?",
//     name: "Douglas Hane",
//     occupation: "Tattoo Artist",
//   },
// ];

export const contactData = {
  title: "Contactez-moi",
  info: [
    {
      title: "Lorem Ipsum",
      subtitle:
        "In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "localisation",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "+3377777777",
      },
      email: {
        icon: <FaEnvelope />,
        address: "thomas@gmail.com",
      },
      link: "Localisation",
    },
  ],
  form: {
    name: "Votre nom et prénom",
    email: "Votre adresse mail",
    message: "Votre message",
    btnText: "Envoyer",
  },
};

export const footerData = {
  about: {
    title: "Lorem Ipsum",
    subtitle:
      "Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus",
    address: {
      icon: <FaMapMarkerAlt />,
      name: "1630 Elm Drive, New York City",
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: "+49 34 36573355",
    },
    email: {
      icon: <FaEnvelope />,
      address: "contact@yourcompany.com",
    },
  },
  links: {
    title: "Lorem Ipsum",
    items: [
      { href: "/", name: "A propos" },
      { href: "/", name: "Projets" },
      { href: "/", name: "Contact me" },
    ],
  },
  program: {
    title: "Working Time",
    items: [
      { name: "Mon - Tue " },
      { name: "Wed - Fri" },
      { name: "Sat " },
      { name: "Sun " },
    ],
  },
};
