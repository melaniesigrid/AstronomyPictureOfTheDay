const countComments = () => {
  const allComments = document.querySelectorAll('.single-comment').length;
  return allComments;
};

export default countComments;
