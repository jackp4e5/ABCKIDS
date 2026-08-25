import audioEsfera from "../../../../public/audio/Activity01/audioEsfera.mp3"
import backAudio from "../../../../public/audio/Activity01/backAudio.mp3"
import instructionAudio from "../../../../public/audio/Activity01/instructionAudio.mp3"
import instructionImg from "../../../../public/images/Activity01/instruction.png"
import iconAudio from "../../../../public/imagesBtns/iconAudio.png"
import grayCircle from "../../../../public/images/Activity01/grayCircle.png"
import activeCircle from "../../../../public/images/Activity01/activeCircle.png"
import grayCube from "../../../../public/images/Activity01/grayCube.png"
import activeCube from "../../../../public/images/Activity01/activeCube.png"
import audioCubo from "../../../../public/audio/Activity01/audioCubo.mp3"
import grayCilindre from "../../../../public/images/Activity01/grayCilindre.png"
import activeCilindre from "../../../../public/images/Activity01/activeCilindre.png"
import audioCilindro from "../../../../public/audio/Activity01/audioCilindro.mp3"
import grayTriangle from "../../../../public/images/Activity01/grayTriangle.png"
import activeTriangle from "../../../../public/images/Activity01/activeTriangle.png"
import audioCono from "../../../../public/audio/Activity01/audioCono.mp3"



export const activity01 = {
  id: "activity01",
  audio:backAudio,
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
        gray: grayCircle ,
        active:activeCircle ,
      },
    },
    {
      id: "cubo",
      name: "Cubo",
      audio:audioCubo ,
      assets: {
        gray: grayCube ,
        active:activeCube ,
      },
    },
    {
      id: "cilindro",
      name: "Cilindro",
      audio:audioCilindro ,
      assets: {
        gray:grayCilindre ,
        active: activeCilindre,
      },
    },
    {
      id: "cono",
      name: "Cono",
      audio:audioCono ,
      assets: {
        gray:grayTriangle ,
        active:activeTriangle ,
      },
    },
  ],
};
