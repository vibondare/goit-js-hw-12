import iziToast from 'izitoast';
import axios from 'axios';

import { gallery } from '../main.js';
import { loadingMessageContainer } from '../main.js';
import errorIcon from '../img/error-icon.svg';
import { loadButton } from '../main.js';

import { addLoader } from '../main.js';
import { hideLoader } from '../main.js';
import { hideLoadButton } from '../main.js';
import { renderGallery } from './render-functions.js';

let imagesData = '';
let page = 1;
let elementsPerPage = 15;

export function getImages(link) {
  gallery.innerHTML = '';
  page = 1;
  hideLoadButton();

  async function fetchImages() {
    try {
      const response = await axios.get(
        `${link}&page=${page}&per_page=${elementsPerPage}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      alert('Error while fetching images from pixabay!');
      console.log(error);
    }
  }

  fetchImages(link).then(data => {
    handleResponse(data);
  });

  function handleResponse(data) {
    imagesData = data;

    if (imagesData.hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: '#B51B1B',
        messageColor: '#FFFFFF',
        position: 'topRight',
        theme: 'dark',
      });

      gallery.innerHTML = '';

      hideLoader();

      return;
    }

    const maxPages = Math.floor(data.totalHits / elementsPerPage);
    if (page > maxPages) {
      iziToast.show({
        title: 'Error',
        message: `We're sorry, but you've reached the end of search results.`,
        backgroundColor: 'blue',
        messageColor: '#FFFFFF',
        position: 'topRight',
        theme: 'dark',
        iconUrl: errorIcon,
      });

      hideLoadButton();

      return;
    }

    renderGallery(imagesData);
  }

  loadButton.addEventListener('click', loadMoreImages);

  function loadMoreImages() {
    page++;

    fetchImages().then(data => {
      handleResponse(data);
    });

    function smoothScroll() {
      const cardHeight = document
        .querySelector('.gallery-item')
        .getBoundingClientRect().height;

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }

    smoothScroll();
  }
}
