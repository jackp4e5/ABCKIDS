import bearDropLeft from "../../../../public/images/Activity04/bearDropLeft.png";
import bearDropRight from "../../../../public/images/Activity04/bearDropRight.png";
import catDropRight from "../../../../public/images/Activity04/catDropRight.png";
import catDropLeft from "../../../../public/images/Activity04/catDropLeft.png";
import dogDropLeft from "../../../../public/images/Activity04/dogDropLeft.png";
import dogDropRight from "../../../../public/images/Activity04/dogDropRight.png";
import monkeyDropRight from "../../../../public/images/Activity04/monkeyDropRight.png";
import monkeyDropLeft from "../../../../public/images/Activity04/monkeyDropLeft.png";
import catLeft from "../../../../public/images/Activity04/catLeft.png";
import catRight from "../../../../public/images/Activity04/catRight.png";
import bearRight from "../../../../public/images/Activity04/bearRight.png";
import bearLeft from "../../../../public/images/Activity04/bearLeft.png";
import dogLeft from "../../../../public/images/Activity04/dogLeft.png";
import dogRight from "../../../../public/images/Activity04/dogRight.png";
import monkeyRight from "../../../../public/images/Activity04/monkeyRight.png";
import monkeyLeft from "../../../../public/images/Activity04/monkeyLeft.png";

export const activity04 = {
  id: "activity04",
  audio: "../../../../public/audio/Activity03/backAudio.mp3",
  type: "",
  hero: "../../../../public/images/Activity04/hero.png",
  header: {
    title: "Caritas de animales",
    audio: "../../../../audio/Activity03/titleAudio.mp3",
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
      iconAudio: "../../../../public/imagesBtns/iconAudio.png",
    },
  },
  animals: [
    {
      id: "bearLeft",
      dropZone: {
        image: bearDropLeft,
      },
      piece: {
        id: "bearRight",
        image: bearRight,
      },
    },
    {
      id: "bearRight",
      dropZone: {
        image: bearDropRight,
      },
      piece: {
        id: "bearLeft",
        image: bearLeft,
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
      },
    },
  ],
};
