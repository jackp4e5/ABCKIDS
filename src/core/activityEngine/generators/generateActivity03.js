const shuffle = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const generateActivity03 = (activity) => {
  const palette = shuffle(activity.palette);

  return palette.map((item) => ({
    ...item,
    figures: shuffle(item.figures),
  }));
};

export default generateActivity03;