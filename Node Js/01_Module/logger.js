const currentDate = () => {
  return new Date().toTimeString();
};

const currentYear = () => {
  return new Date().getFullYear();
};

module.exports = { currentDate, currentYear };
