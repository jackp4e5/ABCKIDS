const bearDropLeft = "/images/Activity04/bearDropLeft.png";
const bearDropRight = "/images/Activity04/bearDropRight.png";
const catDropRight = "/images/Activity04/catDropRight.png";
const catDropLeft = "/images/Activity04/catDropLeft.png";
const dogDropLeft = "/images/Activity04/dogDropLeft.png";
const dogDropRight = "/images/Activity04/dogDropRight.png";
const monkeyDropRight = "/images/Activity04/monkeyDropRight.png";
const monkeyDropLeft = "/images/Activity04/monkeyDropLeft.png";
const catLeft = "/images/Activity04/catLeft.png";
const catRight = "/images/Activity04/catRight.png";
const bearRight = "/images/Activity04/bearRight.png";
const bearLeft = "/images/Activity04/bearLeft.png";
const dogLeft = "/images/Activity04/dogLeft.png";
const dogRight = "/images/Activity04/dogRight.png";
const monkeyRight = "/images/Activity04/monkeyRight.png";
const monkeyLeft = "/images/Activity04/monkeyLeft.png";
const heroImg = "/images/Activity04/hero.png";
const backAudio = "/audio/Activity03/backAudio.mp3";
const iconAudioImg = "/ImagesBtns/iconAudio.png";

export const activity04 = {
  id: "activity04",
  audio: backAudio,
  type: "",
  hero: heroImg,
  header: {
    title: "Caritas de animales",
    audio: "../../../../public/audio/Activity03/titleAudio.mp3",
    assets: {
      headerImg: "../../../../public/images/Activity02/titleImg.png",
      badge: "../../../../public/images/iconHeader.png",
    },
  },
  instruction: {
    message: "Observa y completa cada cara.",
    audio: "../../../../audio/Activity03/instructionAudio.mp3",
    assets: {
      image: "../../../../public/images/Activity03/instructionImg.png",
      iconAudio: iconAudioImg,
    },
  },
  animals: [
    {
      id: "bearLeft",
      dropZone: {
        image: bearDropLeft,
      },
      piece: {
        id: "bearLeft",
        image: bearRight,
        position: "right",
        variant: "bear",
      },
    },
    {
      id: "monkeyRight",
      dropZone: {
        image: monkeyDropRight,
      },
      piece: {
        id: "monkeyRight",
        image: monkeyLeft,
        position: "left",
        variant: "monkey",
      },
    },
    {
      id: "bearRight",
      dropZone: {
        image: bearDropRight,
      },
      piece: {
        id: "bearRight",
        image: bearLeft,
        position: "left",
        variant: "bear",
      },
    },
    {
      id: "catLeft",
      dropZone: {
        image: catDropLeft,
      },
      piece: {
        id: "catLeft",
        image: catRight,
        position: "right",
        variant: "cat",
      },
    },
    {
      id: "catRight",
      dropZone: {
        image: catDropRight,
      },
      piece: {
        id: "catRight",
        image: catLeft,
        position: "left",
        variant: "cat",
      },
    },
    {
      id: "dogRight",
      dropZone: {
        image: dogDropRight,
      },
      piece: {
        id: "dogRight",
        image: dogLeft,
        position: "left",
        variant: "dog",
      },
    },
    {
      id: "dogLeft",
      dropZone: {
        image: dogDropLeft,
      },
      piece: {
        id: "dogLeft",
        image: dogRight,
        position: "right",
        variant: "dog",
      },
    },
    {
      id: "monkeyLeft",
      dropZone: {
        image: monkeyDropLeft,
      },
      piece: {
        id: "monkeyLeft",
        image: monkeyRight,
        position: "right",
        variant: "monkey",
      },
    },
  ],
};
