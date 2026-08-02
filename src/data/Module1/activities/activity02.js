export const activity02 = {
  header: {
    title: "Relaciona",
    audio: "../../../../audio/Activity02/titleAudio.mp3",
    assets: {
      headerImg: "../../../../images/Activity02/titleImg.png",
      badge: "../../../../images/iconHeader.png",
    },
  },
  instruction: {
    message: "Colorea cada figura como se identifica.",
    audio: "../../../../audio/Activity02/instructionAudio.mp3",
    assets: {
      image: "../../../../images/Activity02/instructionImg.png",
      iconAudio: "../../../../images/iconAudio.png",
    },
  },

  figures: [
    {
      id: "esfera",
      name: "Esfera",
      shape: "esfera",
      color: "blue",
      assets: {
        gray: "../../../../images/activity02/graySphere.png",
        active: "../../../../images/activity02/paletteSphere.png",
      },
    },
    {
      id: "cubo",
      name: "Cubo",
      shape: "cubo",
      color: "purple",
      assets: {
        gray: "../../../../images/activity02/grayCube.png",
        active: "../../../../images/activity02/paletteCube.png",
      },
    },
    {
      id: "cilindro",
      name: "Cilindro",
      shape: "cilindro",
      color: "orange",
      assets: {
        gray: "../../../../images/activity02/grayCylindre.png",
        active: "../../../../images/activity02/paletteCylindre.png",
      },
    },
    {
      id: "triangulo",
      name: "Triangulo",
      shape: "triangulo",
      color: "green",
      assets: {
        gray: "../../../../images/activity02/grayTriangle.png",
        active: "../../../../images/activity02/paletteTriangle.png",
      },
    },
    {
      id: "ball",
      name: "Ball",
      shape: "esfera",
      color: "blue",
      assets: {
        gray: "../../../../images/activity02/grayBall.png",
        active: "../../../../images/activity02/ActiveBall.png",
      },
    },
    {
      id: "die",
      name: "Die",
      shape: "cubo",
      color: "purple",
      assets: {
        gray: "../../../../images/activity02/grayDie.png",
        active: "../../../../images/activity02/ActiveDie.png",
      },
    },
    {
      id: "ConeParty",
      name: "Cone Party",
      shape: "triangulo",
      color: "green",
      assets: {
        gray: "../../../../images/activity02/grayConePartyHat.png",
        active: "../../../../images/activity02/activeConePartyHat.png",
      },
    },
    {
      id: "bottle",
      name: "Bottle",
      shape: "cilindro",
      color: "orange",
      assets: {
        gray: "../../../../images/activity02/grayBottle.png",
        active: "../../../../images/activity02/activeBottle.png",
      },
    },
  ],

  paletteFigures: ["esfera", "cubo", "cilindro", "triangle"],

  pencils: [
    {
      id: "bluePencil",
      name: "blue Pencil",
      color: "blue",
      assets: {
        src: "../../../../images/activity02/pencils/bluePencil.png",
      },
    },
    {
      id: "greenPencil",
      name: "green Pencil",
      src: "../../../../images/activity02/pencils/greenPencil.png",
    },
    {
      id: "orangePencil",
      name: "orange Pencil",
      color: "orange",
      assets: {
        src: "../../../../images/activity02/pencils/orangePencil.png",
      },
    },
    {
      id: "purplePencil",
      name: "purple Pencil",
      color: "purple",
      assets: {
        src: "../../../../images/activity02/pencils/purplePencil.png",
      },
    },
  ],

  controls: {},

  validation: {},

  config: {},
};
