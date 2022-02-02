const url = 'https://api.nasa.gov/planetary/apod?api_key=';
const key = 'j9gWflgyCduUULTGmKMfahoaNAbzAULMkGGuu9jN';
const startDate = '&start_date=2022-01-24';
const endDate = '&end_date=2022-02-01';

const getPictures = async () => {
  const response = await fetch(`${url}${key}${startDate}${endDate}`);
  const answer = await response.json();
  return answer;
};

export { getPictures as default };
