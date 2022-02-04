const countComments = () => {
  const allComments = document.querySelectorAll('.single-comment').length;
  console.log(allComments);
  return allComments;
};

export default countComments;
