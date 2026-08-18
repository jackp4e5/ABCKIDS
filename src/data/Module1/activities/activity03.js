
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

/* 

  figures: [
    {
      id: "circulo",
      name: "circulo",
      shape: "circulo",
      color: "blue",
      assets: {
        gray: "../../../../public/images/activity03/whiteCircle.png",
        blue: "../../../../public/images/activity02/blueCircle.png",
        green: "../../../../public/images/activity02/greenCircle.png",
        red: "../../../../public/images/activity02/redCircle.png",
      },
    },
    {
      id: "cuadrado",
      name: "cuadrado",
      shape: "cuadrado",
      color: "green",
      assets: {
        gray: "../../../../public/images/activity03/whiteSquare.png",
        blue: "../../../../public/images/activity02/blueSquare.png",
        green: "../../../../public/images/activity02/greenSquare.png",
        red: "../../../../public/images/activity02/redSquare.png",
      },
    },
    {
      id: "rectangulo",
      name: "rectangulo",
      shape: "rectangulo",
      color: "red",
      assets: {
        gray: "../../../../public/images/activity03/whiteRectangle.png",
        red: "../../../../public/images/activity03/redRectangle.png",
        green: "../../../../public/images/activity03/greenRectangle.png",
      },
    },
    {
      id: "triangulo",
      name: "triangulo",
      shape: "triangulo",
      color: "green",
      assets: {
        gray: "../../../../public/images/activity03/whiteTriangle.png",
        blue: "../../../../public/images/activity02/blueTriangle.png",
      },
    },
  ],

  paletteFigures: [
    {
      id: "cubo",
      name: "Cubo",
      shape: "cuadrado",
      color: "green",
      assets: {
        active: "../../../../public/images/activity03/greenCube.png",
      },
    },
    {
      id: "cilindro",
      name: "Cilindro",
      shape: "esfera",
      color: "red",
      assets: {
        active: "../../../../public/images/activity03/redCylinder.png",
      },
    },
    {
      id: "cono",
      name: "Cono",
      shape: "esfera",
      color: "blue",
      assets: {
        active: "../../../../public/images/activity03/blueCone.png",
      },
    },
  ],
*/
