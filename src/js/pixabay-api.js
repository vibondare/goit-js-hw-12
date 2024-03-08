import axios from 'axios';

export async function fetchImages(query, page, elementsPerPage) {
  const key = '42569288-7bb99e6b1dd10eb6153443a4f';
  const basicLink = 'https://pixabay.com/api/';

  const link = `${basicLink}?key=${key}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await axios.get(`${link}&page=${page}&per_page=${elementsPerPage}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    alert('Error while fetching images from pixabay!');
    console.log(`Error: ${error}`);
  }
}
