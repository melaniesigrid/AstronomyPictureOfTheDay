import { key } from './configuration.js';

const url = 'https://api.nasa.gov/planetary/apod?api_key=';
const startDate = '&start_date=2022-01-26';
const endDate = '&end_date=2022-02-01';

const getPictures = async () => {
  const response = await fetch(`${url}${key}${startDate}${endDate}`);
  const answer = await response.json();
  console.log(answer);
  return answer;
};

export { getPictures };