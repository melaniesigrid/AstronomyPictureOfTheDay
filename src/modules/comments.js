import { getComments, addComments } from './APIcomments';

const displayComments = async (username, commentMessage, userID) => {
  console.log(username, commentMessage, userID);
  const message = await addComments(username, commentMessage, userID);
  const comments = await getComments(userID);

  console.log(comments, message);
};

export { displayComments as default };
