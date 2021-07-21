import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '21693934-b739dad2632fdbf7884e4d0a2',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const fetchImages = async (query, page) => {
  try {
    const { data } = await axios.get('', {
      params: {
        q: query,
        page,
      },
    });
    return data.hits;
  } catch (error) {
    console.log('error', error);
    return [];
  }
};

export default fetchImages;

//const BASE_URL = 'https://pixabay.com/api';
//const API_KEY = '21693934-b739dad2632fdbf7884e4d0a2';

//const fetchImages = async (query, page) => {
//const { data } = await axios.get(
//`${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
//);
//return data.hits;
//};
