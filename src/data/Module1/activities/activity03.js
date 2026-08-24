
export const activity03 = {
  id: "activity03",
  audio:"../../../../public/audio/Activity03/backAudio.mp3",
  type: "",
  hero: "../../../../public/images/Activity03/hero.png",
  header: {
    title: "Sólidos y caras",
    audio: "../../../../audio/Activity03/titleAudio.mp3",
    assets: {
      headerImg: "../../../../public/images/Activity02/titleImg.png",
      badge: "../../../../public/images/iconHeader.png",
    },
  },
  instruction: {
    message: "Escucha, observa y resuelve.",
    audio: "../../../../audio/Activity03/instructionAudio.mp3",
    assets: {
      image: "../../../../public/images/Activity03/instructionImg.png",
      iconAudio: "../../../../public/imagesBtns/iconAudio.png",
    },
  },

  palette: [
    {
      id: "cubo",
      name: "Cubo",
      shape: "cubo",
      color: "green",

      assets: {
        active: "../../../../public/images/activity03/greenCube.png",
      },

      figures: [
        {
          id: "circle01",
          name: "Círculo",
          shape: "circulo",
          isCorrect:false,
          assets: {
            default: "../../../../public/images/activity03/whiteCircle.png",
            active: "../../../../public/images/activity03/greenCircle.png",
          },
        },

        {
          id: "square01",
          name: "Cuadrado",
          shape: "cuadrado",
          isCorrect:true,
          assets: {
            default: "../../../../public/images/activity03/whiteSquare.png",
            active: "../../../../public/images/activity03/greenSquare.png",
          },
        },

        {
          id: "rectangle01",
          name: "Rectángulo",
          shape: "rectangulo",
          isCorrect:false,
          assets: {
            default: "../../../../public/images/activity03/whiteRectangle.png",
            active: "../../../../public/images/activity03/greenRectangle.png",
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
        active: "../../../../public/images/activity03/redCylinder.png",
      },

      figures: [
        {
          id: "rectangle02",
          name: "Rectángulo",
          shape: "rectangulo",
          isCorrect:false,
          assets: {
            default: "../../../../public/images/activity03/whiteRectangle.png",
            active: "../../../../public/images/activity03/redRectangle.png",
          },
        },
        {
          id: "circle02",
          name: "Círculo",
          shape: "circulo",
          isCorrect:true,
          assets: {
            default: "../../../../public/images/activity03/whiteCircle.png",
            active: "../../../../public/images/activity03/redCircle.png",
          },
        },

        {
          id: "square02",
          name: "Cuadrado",
          shape: "cuadrado",
          isCorrect:false,
          assets: {
            default: "../../../../public/images/activity03/whiteSquare.png",
            active: "../../../../public/images/activity03/redSquare.png",
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
        active: "../../../../public/images/activity03/blueCone.png",
      },

      figures: [
        {
          id: "circle03",
          name: "Círculo",
          shape: "circulo",
          isCorrect:true,
          assets: {
            default: "../../../../public/images/activity03/whiteCircle.png",
            active: "../../../../public/images/activity03/blueCircle.png",
          },
        },
        {
          id: "triangulo01",
          name: "Triangulo",
          shape: "triangulo",
          isCorrect:false,
          assets: {
            default: "../../../../public/images/activity03/whiteTriangle.png",
            active: "../../../../public/images/activity03/blueTriangle.png",
          },
        },

        {
          id: "square03",
          name: "Cuadrado",
          shape: "cuadrado",
          isCorrect:false,
          assets: {
            default: "../../../../public/images/activity03/whiteSquare.png",
            active: "../../../../public/images/activity03/blueSquare.png",
          },
        },
      ],
    },
  ],
};

