const backAudio = "/audio/Activity02/backAudio.mp3";
const instructionAudio = "/audio/Activity02/instructionAudio.mp3";
const instructionImg = "/images/Activity02/instructionImg.png";
const iconAudio = "/ImagesBtns/iconAudio.png";
const grayBall = "/images/activity02/grayBall.png";
const ActiveBall = "/images/activity02/ActiveBall.png";
const grayDie = "/images/activity02/grayDie.png";
const ActiveDie = "/images/activity02/ActiveDie.png";
const grayConePartyHat = "/images/activity02/grayConePartyHat.png";
const activeConePartyHat = "/images/activity02/activeConePartyHat.png";
const grayBottle = "/images/activity02/grayBottle.png";
const activeBottle = "/images/activity02/activeBottle.png";
const graySphere = "/images/activity02/graySphere.png";
const paletteSphere = "/images/activity02/paletteSphere.png";
const grayCube = "/images/activity02/grayCube.png";
const paletteCube = "/images/activity02/paletteCube.png";
const grayCylinder = "/images/activity02/grayCylinder.png";
const paletteCylinder = "/images/activity02/paletteCylinder.png";
const grayTriangle = "/images/activity02/grayTriangle.png";
const paletteTriangle = "/images/activity02/paletteTriangle.png";
const bluePencil = "/images/activity02/pencils/bluePencil.png";
const greenPencil = "/images/activity02/pencils/greenPencil.png";
const orangePencil = "/images/activity02/pencils/orangePencil.png";
const purplePencil = "/images/activity02/pencils/purplePencil.png";

export const activity02 = {
  id: "activity02",
  audio: backAudio,
  type: "dropPencil",
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
    audio: instructionAudio,
    assets: {
      image: instructionImg,
      iconAudio: iconAudio,
    },
  },

  figures: [
    {
      id: "esfera",
      name: "Esfera",
      shape: "esfera",
      color: "blue",
      assets: {
        gray: graySphere,
        active: paletteSphere,
      },
    },
    {
      id: "cubo",
      name: "Cubo",
      shape: "cubo",
      color: "purple",
      assets: {
        gray: grayCube,
        active: paletteCube,
      },
    },
    {
      id: "cilindro",
      name: "Cilindro",
      shape: "cilindro",
      color: "orange",
      assets: {
        gray: grayCylinder,
        active: paletteCylinder,
      },
    },
    {
      id: "triangulo",
      name: "Triangulo",
      shape: "triangulo",
      color: "green",
      assets: {
        gray: grayTriangle,
        active: paletteTriangle,
      },
    },
    {
      id: "ball",
      name: "Ball",
      shape: "esfera",
      color: "blue",
      assets: {
        gray: grayBall,
        active: ActiveBall,
      },
    },
    {
      id: "die",
      name: "Die",
      shape: "cubo",
      color: "purple",
      assets: {
        gray: grayDie,
        active: ActiveDie,
      },
    },
    {
      id: "ConeParty",
      name: "Cone Party",
      shape: "triangulo",
      color: "green",
      assets: {
        gray: grayConePartyHat,
        active: activeConePartyHat,
      },
    },
    {
      id: "bottle",
      name: "Bottle",
      shape: "cilindro",
      color: "orange",
      assets: {
        gray: grayBottle,
        active: activeBottle,
      },
    },
  ],

  paletteFigures: [
    {
      id: "esfera",
      name: "Esfera",
      shape: "esfera",
      color: "blue",
      assets: {
        gray: graySphere,
        active: paletteSphere,
      },
    },
    {
      id: "cubo",
      name: "Cubo",
      shape: "cubo",
      color: "purple",
      assets: {
        gray: grayCube,
        active: paletteCube,
      },
    },
    {
      id: "cilindro",
      name: "Cilindro",
      shape: "cilindro",
      color: "orange",
      assets: {
        gray: grayCylinder,
        active: paletteCylinder,
      },
    },
    {
      id: "triangulo",
      name: "Triangulo",
      shape: "triangulo",
      color: "green",
      assets: {
        gray: grayTriangle,
        active: paletteTriangle,
      },
    },
  ],

  pencils: [
    {
      id: "bluePencil",
      name: "blue Pencil",
      color: "blue",
      assets: {
        src: bluePencil,
      },
    },
    {
      id: "greenPencil",
      name: "green Pencil",
      color: "green",
      assets: {
        src: greenPencil,
      },
    },
    {
      id: "orangePencil",
      name: "orange Pencil",
      color: "orange",
      assets: {
        src: orangePencil,
      },
    },
    {
      id: "purplePencil",
      name: "purple Pencil",
      color: "purple",
      assets: {
        src: purplePencil,
      },
    },
  ],
};
