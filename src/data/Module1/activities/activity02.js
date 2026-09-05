const backAudio = "/audio/Activity02/backAudio.mp3";
const instructionAudio = "/audio/Activity02/instructionAudio.mp3";

const instructionImg = "/images/Activity02/instructionImg.png";

const iconAudioImg = "/ImagesBtns/iconAudio.png";

const grayBall = "/images/Activity02/grayBall.png";
const grayDie = "/images/Activity02/grayDie.png";
const graySphere = "/images/Activity02/graySphere.png";

const activeBall = "/images/Activity02/activeBall.png";

const ActiveDie = "/images/Activity02/activeDie.png";
const grayConePartyHat = "/images/Activity02/grayConePartyHat.png";
const activeConePartyHat = "/images/Activity02/activeConePartyHat.png";
const grayBottle = "/images/Activity02/grayBottle.png";
const activeBottle = "/images/Activity02/activeBottle.png";
const paletteSphere = "/images/Activity02/paletteSphere.png";
const grayCube = "/images/Activity02/grayCube.png";
const paletteCube = "/images/Activity02/paletteCube.png";
const grayCylinder = "/images/Activity02/grayCylinder.png";
const paletteCylinder = "/images/Activity02/paletteCylinder.png";
const grayTriangle = "/images/Activity02/grayTriangle.png";
const paletteTriangle = "/images/Activity02/paletteTriangle.png";
const bluePencil = "/images/Activity02/pencils/bluePencil.png";
const greenPencil = "/images/Activity02/pencils/greenPencil.png";
const orangePencil = "/images/Activity02/pencils/orangePencil.png";
const purplePencil = "/images/Activity02/pencils/purplePencil.png";

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
      iconAudio: iconAudioImg,
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
        active: activeBall,
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
