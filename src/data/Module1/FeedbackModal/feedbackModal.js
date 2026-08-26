const imgGoodJob = "/imagesFeedback/imgGoodJob.png";
const imgGoodJob02 = "/imagesFeedback/imgGoodJob02.png";
const imgGoodJob03 = "/imagesFeedback/imgGoodJob03.png";
const audioGoodJob = "/audio/Feedback/audioGoodJob.mp3";
const audioGoodJob02 = "/audio/Feedback/audioGoodJob02.mp3";
const audioGoodJob03 = "/audio/Feedback/audioGoodJob03.mp3";
const imgAgain = "/imagesFeedback/imgAgain.png";
const imgAgain02 = "/imagesFeedback/imgAgain02.png";
const intentaDeNuevo = "/audio/FeedBack/intentaDeNuevo.mp3";
const revisaNuevamente = "/audio/FeedBack/revisaNuevamente.mp3";

const feedBackModal = {
  id: "feedback",

  correct: {
    images: {
      correct: imgGoodJob,
      correct02: imgGoodJob02,
      correct03: imgGoodJob03,
    },

    audio: {
      correct: audioGoodJob,
      correct02: audioGoodJob02,
      correct03: audioGoodJob03,
    },
  },

  inCorrect: {
    images: {
      inCorrect: imgAgain,
      inCorrect02: imgAgain02,
    },

    audio: {
      inCorrect: intentaDeNuevo,
      inCorrect02: revisaNuevamente,
    },
  },
};

export default feedBackModal;
