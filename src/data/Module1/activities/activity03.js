export const activity03 = {
  id: "activity03",
  type: "dropPencil",
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
    audio: "../../../../audio/Activity02/instructionAudio.mp3",
    assets: {
      image: "../../../../public/images/Activity02/instructionImg.png",
      iconAudio: "../../../../public/imagesBtns/iconAudio.png",
    },
  },

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
};
