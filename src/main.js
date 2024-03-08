import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

import errorIcon from './img/error-icon.svg';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('#search-input');
const gallery = document.querySelector('.gallery');
const loadingMessageContainer = document.querySelector(
  '.loading-message-container'
);
const loadButtonContainer = document.querySelector('.load-button-container');
const loadButton = document.querySelector('.load-button');

searchForm.addEventListener('submit', submitSearch);

function addLoader() {
  loadingMessageContainer.classList.add('loading-message-container-is-visible');
}

function hideLoader() {
  loadingMessageContainer.classList.remove(
    'loading-message-container-is-visible'
  );
}

function showLoadButton() {
  loadButtonContainer.style.display = 'block';
}

function hideLoadButton() {
  loadButtonContainer.style.display = 'none';
}

function submitSearch(event) {
  event.preventDefault();

  if (!searchInput.value) {
    return;
  }

  gallery.innerHTML = '';

  addLoader();

  let lightbox;
  let currentQuery;

  let page = 1;
  let elementsPerPage = 15;
  const q = searchInput.value;
  const resp = fetchImages(q, page, elementsPerPage);

  resp
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: '#B51B1B',
          messageColor: '#FFFFFF',
          position: 'topRight',
          theme: 'dark',
          iconUrl: errorIcon,
        });

        hideLoader();
        hideLoadButton();
        return;
      }

      const markup = renderGallery(data.hits);
      gallery.insertAdjacentHTML('beforeend', markup);

      hideLoader();

      lightbox = new simpleLightbox('.gallery a', {
        captionsData: 'alt',
      });

      currentQuery = q;

      showLoadButton();
    })
    .catch(error => alert(error.message));

  loadButton.addEventListener('click', loadMoreImages);

  function loadMoreImages() {
    page++;

    fetchImages(currentQuery, page, elementsPerPage)
      .then(data => {
        gallery.insertAdjacentHTML('beforeend', renderGallery(data.hits));

        const maxPages = Math.floor(data.totalHits / elementsPerPage);
        console.log(maxPages);
        if (page > maxPages) {
          iziToast.show({
            message: `We're sorry, but you've reached the end of search results.`,
            position: 'topRight',
          });

          hideLoadButton();
          return;
        }

        lightbox.refresh();

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
      })
      .catch(error => alert(error.message));
  }
}
