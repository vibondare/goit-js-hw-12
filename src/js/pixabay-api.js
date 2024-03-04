import iziToast from 'izitoast';
import { gallery } from '../main.js';
import { addLoader } from '../main.js';
import { hideLoader } from '../main.js';
import { renderGallery } from './render-functions.js';
import { loadingMessageContainer } from '../main.js';
import errorIcon from '../img/error-icon.svg';

let imagesData = '';

export function getImages(link) {
  function fetchImages() {
    return fetch(link)
      .then(response => {
        if (!response.ok) {
          throw new Error('Image error!');
        }

        return response.json();
      })
      .catch(error => {
        alert('Error while fetching images from pixabay!');
      });
  }

  fetchImages(link).then(data => {
    imagesData = data;

    if (imagesData.hits.length === 0) {
      iziToast.show({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: '#B51B1B',
        messageColor: '#FFFFFF',
        position: 'topRight',
        theme: 'dark',
        iconUrl: errorIcon,
      });

      gallery.innerHTML = '';

      hideLoader();

      return;
    }

    renderGallery(imagesData);
  });
}
