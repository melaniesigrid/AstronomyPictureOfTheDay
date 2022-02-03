import getPictures from './GetRequest';

const showCommentCard = async (i) => {
  const myPictures = await getPictures();

  console.log(myPictures);
  console.log(myPictures[i]);
  const commentModel = document.querySelector('.comment-model');
  const commentCard = document.createElement('div');
  commentCard.classList.add('comment-card');

  const closeIcon = document.createElement('div');
  closeIcon.classList.add('close-icon');
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-times');
  closeIcon.appendChild(icon);

  const mainDescription = document.createElement('div');
  mainDescription.classList.add('main-description');

  if (myPictures[i].media_type === 'image') {
    const media = document.createElement('img');
    media.classList.add('mediaImage');
    media.src = myPictures[i].url;
  } else {
    const media = document.createElement('iframe');
    media.classList.add('mediaVideo')
    media.src = myPictures[i].url;
  }

  const h1 = document.createElement('h1');
  h1.classList.add('image-title');
  h1.innerText = myPictures[i].title;

  const explanation = document.createElement('p');
  explanation.classList.add('image-explanation');
  explanation.innerText = myPictures[i].explanation;

  const extraExplanation = document.createElement('p');
  const copyright = document.createElement('span');
  copyright.classList.add('copyright');
  copyright.innerText = `By ${myPictures[i].copyright}`

  const imageDate = document.createElement('span');
  imageDate.classList.add('image-date');
  imageDate.innerText = `${myPictures[i].date};`
  extraExplanation.appendChild(copyright, imageDate);

  const h2 = document.createElement('h2');
  h2.innerText = 'Comments (';
  const commentCounter = document.createElement('span');
  commentCounter.classList.add('comment-counter');
  imageDate.innerText = '3';
  const bracket = document.createTextNode(')');
  h2.appendChild(commentCounter, bracket);

  const commentContainer = document.createElement('ul');
  commentContainer.classList.add('comment-container');
  commentContainer.innerHTML = `
          <li>
            <span class="comment-time">2022-01-26</span>,
            <span class="comment-author">Alex</span>:
            <span class="commment">that's a great picture, I love it</span>
          </li>
          <li>
            <span class="comment-time">2022-01-26</span>,
            <span class="comment-author">Alex</span>:
            <span class="commment">that's a great picture, I love it more</span>
          </li>
          <li>
            <span class="comment-time">2022-01-26</span>,
            <span class="comment-author">Alex</span>:
            <span class="commment">that's a great picture, I love it more and more</span>
          </li>
          `;

  const commentTitle = document.createElement('h2');
  commentTitle.innerText = 'Add a comment';

  const form = document.createElement('form');
  form.innerHTML = `
          <input type="text" placeholder="Your name" class="name-input" required autocomplete="off" />
          <textarea name="comment-input" class="comment-input" placeholder="Your insights..." required></textarea>
          <button type="submit">Comment</button>
          `;

  mainDescription.appendChild(media, h1, explanation, extraExplanation, h2, commentContainer, commentTitle, form);
  commentCard.appendChild(closeIcon, mainDescription);
  commentModel.appendChild(commentCard);
}

export {
  showCommentCard as
  default
};