const countCards = () => {
  const myArray = document.querySelectorAll('.card');
  const count = myArray.length;
  return count;
};

export default countCards;