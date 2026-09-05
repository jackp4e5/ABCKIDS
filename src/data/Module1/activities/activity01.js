const audioEsfera = "/audio/Activity01/audioEsfera.mp3";
const backAudio = "/audio/Activity01/backAudio.mp3";
const instructionAudio = "/audio/Activity01/instructionAudio.mp3";
const instructionImg = "/images/Activity01/instruction.png";
const iconAudio = "/ImagesBtns/iconAudio.png";
const grayCircle = "/images/Activity01/grayCircle.png";
const activeCircle = "/images/Activity01/activeCircle.png";
const grayCube = "/images/Activity01/grayCube.png";
const activeCube = "/images/Activity01/activeCube.png";
const audioCubo = "/audio/Activity01/audioCubo.mp3";
const grayCilindre = "/images/Activity01/grayCilindre.png";
const activeCilindre = "/images/Activity01/activeCilindre.png";
const audioCilindro = "/audio/Activity01/audioCilindro.mp3";
const grayTriangle = "/images/Activity01/grayTriangle.png";
const activeTriangle = "/images/Activity01/activeTriangle.png";
const audioCono = "/audio/Activity01/audioCono.mp3";

export const activity01 = {
  id: "activity01",
  audio: backAudio,
  header: {
    title: "Solidos geométricos",
    assets: {
      headerImg: "../../../../public/images/Activity01/headerActivity.png",
      badge: "../../../../public/images/iconHeader.png",
    },
  },
  instruction: {
    message: "Señala e identifica.",
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
      audio: audioEsfera,

      assets: {
        gray: grayCircle,
        active: activeCircle,
      },
    },
    {
      id: "cubo",
      name: "Cubo",
      audio: audioCubo,
      assets: {
        gray: grayCube,
        active: activeCube,
      },
    },
    {
      id: "cilindro",
      name: "Cilindro",
      audio: audioCilindro,
      assets: {
        gray: grayCilindre,
        active: activeCilindre,
      },
    },
    {
      id: "cono",
      name: "Cono",
      audio: audioCono,
      assets: {
        gray: grayTriangle,
        active: activeTriangle,
      },
    },
  ],
};
