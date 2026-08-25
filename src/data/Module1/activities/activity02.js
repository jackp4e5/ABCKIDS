import backAudio from "../../../../public/audio/Activity02/backAudio.mp3";
import instructionAudio from "../../../../public/audio/Activity02/instructionAudio.mp3";
import instructionImg from "../../../../public/images/Activity02/instructionImg.png";
import iconAudio from "../../../../public/ImagesBtns/iconAudio.png";
import grayBall from "../../../../public/images/activity02/grayBall.png";
import ActiveBall from "../../../../public/images/activity02/ActiveBall.png";
import grayDie from "../../../../public/images/activity02/grayDie.png";
import ActiveDie from "../../../../public/images/activity02/ActiveDie.png";
import grayConePartyHat from "../../../../public/images/activity02/grayConePartyHat.png";
import activeConePartyHat from "../../../../public/images/activity02/activeConePartyHat.png";
import grayBottle from "../../../../public/images/activity02/grayBottle.png";
import activeBottle from "../../../../public/images/activity02/activeBottle.png";
import graySphere from "../../../../public/images/activity02/graySphere.png";
import paletteSphere from "../../../../public/images/activity02/paletteSphere.png";
import grayCube from "../../../../public/images/activity02/grayCube.png";
import paletteCube from "../../../../public/images/activity02/paletteCube.png";
import grayCylinder from "../../../../public/images/activity02/grayCylinder.png";
import paletteCylinder from "../../../../public/images/activity02/paletteCylinder.png";
import grayTriangle from "../../../../public/images/activity02/grayTriangle.png";
import paletteTriangle from "../../../../public/images/activity02/paletteTriangle.png";
import bluePencil from "../../../../public/images/activity02/pencils/bluePencil.png";
import greenPencil from "../../../../public/images/activity02/pencils/greenPencil.png";
import orangePencil from "../../../../public/images/activity02/pencils/orangePencil.png";
import purplePencil from "../../../../public/images/activity02/pencils/purplePencil.png";

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
