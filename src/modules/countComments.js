const countComments = () => {
  const allComments = document.querySelectorAll('.single-comment').length;

  // if (allComments === undefined || allComments === null) {
  //   return 0;
  // } else {
  //   return allComments;
  // }

  return allComments;
};

export default countComments;
