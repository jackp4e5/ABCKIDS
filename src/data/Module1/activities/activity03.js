import backAudio from "../../../../public/audio/Activity03/backAudio.mp3";
import heroImg from "../../../../public/images/Activity03/hero.png";
import titleAudio from "../../../../public/audio/Activity03/backAudio.mp3";
import titleImg from "../../../../public/images/Activity02/titleImg.png";
import iconHeader from "../../../../public/images/iconHeader.png";
import instructionAudio from "../../../../public/audio/Activity03/instructionAudio.mp3";
import iconAudio from "../../../../public/imagesBtns/iconAudio.png";
import greenCube from "../../../../public/images/activity03/greenCube.png";
import greenCircle from "../../../../public/images/activity03/greenCircle.png";
import whiteSquare from "../../../../public/images/activity03/whiteSquare.png";
import greenSquare from "../../../../public/images/activity03/greenSquare.png";
import whiteRectangle from "../../../../public/images/activity03/whiteRectangle.png";
import greenRectangle from "../../../../public/images/activity03/greenRectangle.png";
import redCylinder from "../../../../public/images/activity03/redCylinder.png";
import redRectangle from "../../../../public/images/activity03/redRectangle.png";
import whiteCircle from "../../../../public/images/activity03/whiteCircle.png";
import redCircle from "../../../../public/images/activity03/redCircle.png";
import redSquare from "../../../../public/images/activity03/redSquare.png";
import blueCone from "../../../../public/images/activity03/blueCone.png";
import blueCircle from "../../../../public/images/activity03/blueCircle.png";
import whiteTriangle from "../../../../public/images/activity03/whiteTriangle.png";
import blueTriangle from "../../../../public/images/activity03/blueTriangle.png";
import blueSquare from "../../../../public/images/activity03/blueSquare.png";

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
