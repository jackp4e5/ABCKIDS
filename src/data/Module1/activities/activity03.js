const backAudio = "/audio/Activity03/backAudio.mp3";
const heroImg = "/images/Activity03/hero.png";
const titleAudio = "/audio/Activity03/backAudio.mp3";
const titleImg = "/images/Activity02/titleImg.png";
const iconHeader = "/images/iconHeader.png";
const instructionAudio = "/audio/Activity03/instructionAudio.mp3";
const iconAudio = "/imagesBtns/iconAudio.png";
const greenCube = "/images/activity03/greenCube.png";
const greenCircle = "/images/activity03/greenCircle.png";
const whiteSquare = "/images/activity03/whiteSquare.png";
const greenSquare = "/images/activity03/greenSquare.png";
const whiteRectangle = "/images/activity03/whiteRectangle.png";
const greenRectangle = "/images/activity03/greenRectangle.png";
const redCylinder = "/images/activity03/redCylinder.png";
const redRectangle = "/images/activity03/redRectangle.png";
const whiteCircle = "/images/activity03/whiteCircle.png";
const redCircle = "/images/activity03/redCircle.png";
const redSquare = "/images/activity03/redSquare.png";
const blueCone = "/images/activity03/blueCone.png";
const blueCircle = "/images/activity03/blueCircle.png";
const whiteTriangle = "/images/activity03/whiteTriangle.png";
const blueTriangle = "/images/activity03/blueTriangle.png";
const blueSquare = "/images/activity03/blueSquare.png";

export const activity03 = {
  id: "activity03",
  audio: backAudio,
  type: "",
  hero: heroImg,
  header: {
    title: "Sólidos y caras",
    audio: titleAudio,
    assets: {
      headerImg: titleImg,
      badge: iconHeader,
    },
  },
  instruction: {
    message: "Escucha, observa y resuelve.",
    audio: instructionAudio,
    assets: {
      image: "../../../../public/images/Activity03/instructionImg.png",
      iconAudio: iconAudio,
    },
  },

  palette: [
    {
      id: "cubo",
      name: "Cubo",
      shape: "cubo",
      color: "green",

      assets: {
        active: greenCube,
      },

      figures: [
        {
          id: "circle01",
          name: "Círculo",
          shape: "circulo",
          isCorrect: false,
          assets: {
            default: whiteCircle,
            active: greenCircle,
          },
        },

        {
          id: "square01",
          name: "Cuadrado",
          shape: "cuadrado",
          isCorrect: true,
          assets: {
            default: whiteSquare,
            active: greenSquare,
          },
        },

        {
          id: "rectangle01",
          name: "Rectángulo",
          shape: "rectangulo",
          isCorrect: false,
          assets: {
            default: whiteRectangle,
            active: greenRectangle,
          },
        },
      ],
    },
    {
      id: "cilindro",
      name: "Cilindro",
      shape: "cilindro",
      color: "red",

      assets: {
        active: redCylinder,
      },

      figures: [
        {
          id: "rectangle02",
          name: "Rectángulo",
          shape: "rectangulo",
          isCorrect: false,
          assets: {
            default: whiteRectangle,
            active: redRectangle,
          },
        },
        {
          id: "circle02",
          name: "Círculo",
          shape: "circulo",
          isCorrect: true,
          assets: {
            default: whiteCircle,
            active: redCircle,
          },
        },

        {
          id: "square02",
          name: "Cuadrado",
          shape: "cuadrado",
          isCorrect: false,
          assets: {
            default: whiteSquare,
            active: redSquare,
          },
        },
      ],
    },
    {
      id: "cono",
      name: "Cono",
      shape: "cono",
      color: "blue",

      assets: {
        active: blueCone,
      },

      figures: [
        {
          id: "circle03",
          name: "Círculo",
          shape: "circulo",
          isCorrect: true,
          assets: {
            default: whiteCircle,
            active: blueCircle,
          },
        },
        {
          id: "triangulo01",
          name: "Triangulo",
          shape: "triangulo",
          isCorrect: false,
          assets: {
            default: whiteTriangle,
            active: blueTriangle,
          },
        },

        {
          id: "square03",
          name: "Cuadrado",
          shape: "cuadrado",
          isCorrect: false,
          assets: {
            default: whiteSquare,
            active: blueSquare,
          },
        },
      ],
    },
  ],
};
