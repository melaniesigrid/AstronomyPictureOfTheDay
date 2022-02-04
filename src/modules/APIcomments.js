const getComments = async (item_id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PXvVn75NsImDnwHgqLa4/comments?item_id=${item_id}`);
  const data = await response.json();
  return data;
};

const addComments = async (username, comment, itemID) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PXvVn75NsImDnwHgqLa4/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemID,
      username,
      comment,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  return response.text();
};

export { getComments, addComments };
