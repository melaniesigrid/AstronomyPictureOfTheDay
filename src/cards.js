import {
  getPictures,
} from './getRequest.js';

const itemGrid = document.querySelector('.item-grid');

const createCards = async () => {
  const myPictures = await getPictures();
  myPictures.forEach((item, i) => {
    const card = document.createElement('div');
    card.classList.add('card');

    if (item.media_type === 'image') {
      const media = document.createElement('img');
      media.classList.add('picture');
      media.src = item.url;
      card.appendChild(media);
    } else {
      const media = document.createElement('iframe');
      media.classList.add('video');
      media.src = item.url;
      card.appendChild(media);
    }

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = item.title;
    cardTitle.classList.add('card-title');
    
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    const likesContainer = document.createElement('div');
    likesContainer.classList.add('likes-container');

    const love = document.createElement('i');
    love.classList.add('fas', 'fa-heart');
    likesContainer.appendChild(love);

    const likes = document.createElement('p');
    likes.classList.add('like-number');
    likes.textContent = '5 likes';
    likesContainer.appendChild(likes);
    
    const comment = document.createElement('button');
    comment.classList.add('comment-btn');
    comment.type = 'button';
    comment.setAttribute('index', `${i}`);
    comment.innerText = 'Comments';
    
    titleContainer.appendChild(cardTitle);
    titleContainer.appendChild(contentContainer);
    contentContainer.appendChild(likesContainer);
    contentContainer.appendChild(comment);
    card.appendChild(titleContainer);

    card.setAttribute('index', `${i}`);

    itemGrid.appendChild(card);
  });
};

export { createCards };