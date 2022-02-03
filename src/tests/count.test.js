import countCards from '../modules/count';

test('counts card elements', () => {
  /**
   * @jest-environment jsdom
   */
  document.body.innerHTML = `
  <div class="card"><h3 class="first-card-text">First Element</h3></div>
  <div class="card my-card"><p class="second-card">Second element</p></div>
  <div class="card another-card"><p class="third-card">Third element</p></div>
  `;
  expect(countCards()).toEqual(3);
});