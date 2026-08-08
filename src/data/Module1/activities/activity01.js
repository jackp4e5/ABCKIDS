export const activity01 = {
  id: "activity01",
  header: {
    title: "Solidos geométricos",
    audio: "../../../../public/audio/Activity01/titleAudio.mp3",
    assets: {
      headerImg: "../../../../public/images/Activity01/headerActivity.png",
      badge: "../../../../public/images/iconHeader.png",
    },
  },
  instruction: {
    message: "Señala e identifica.",
    audio: "../../../../public/audio/Activity01/instructionAudio.mp3",
    assets: {
      image: "../../../../public/images/Activity01/instruction.png",
      iconAudio: "../../../../public/imagesBtns/iconAudio.png",
    },
  },

  figures: [
    {
      id: "esfera",
      name: "Esfera",

      assets: {
        gray: "../../../../public/images/Activity01/grayCircle.png",
        active: "../../../../public/images/Activity01/activeCircle.png",
      },
    },
    {
      id: "cubo",
      name: "Cubo",
      assets: {
        gray: "../../../../public/images/Activity01/grayCube.png",
        active: "../../../../public/images/Activity01/activeCube.png",
      },
    },
    {
      id: "cilindro",
      name: "Cilindro",
      assets: {
        gray: "../../../../public/images/Activity01/grayCilindre.png",
        active: "../../../../public/images/Activity01/activeCilindre.png",
      },
    },
    {
      id: "cono",
      name: "Cono",
      assets: {
        gray: "../../../../public/images/Activity01/grayTriangle.png",
        active: "../../../../public/images/Activity01/activeTriangle.png",
      },
    },
  ],

  controls: {},

  validation: {},

  config: {},
};
