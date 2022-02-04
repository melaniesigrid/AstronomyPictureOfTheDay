import countComments from '../modules/countComments';

test('count comments', () => {
  /**
   * @jest-environment jsdom
  */
  document.body.innerHTML = `
  <ul class="comment-container">
    <li class="single-comment"><span class="comment-time">2022-02-04, </span><span class="comment-author">CHS: </span><span class="commentMsg">Cool</span></li>
    <li class="single-comment"><span class="comment-time">2022-02-04, </span><span class="comment-author">CHS: </span><span class="commentMsg">Great</span></li>
  </ul>
  `;

  expect(countComments()).toEqual(2);
});
