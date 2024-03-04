import { getImages } from './js/pixabay-api';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector('.search-form');
export const searchInput = document.querySelector('#search-input');
export const gallery = document.querySelector('.gallery');
export const loadingMessageContainer = document.querySelector('.loading-message-container');

searchForm.addEventListener("submit", submitSearch);

export function addLoader() {
  loadingMessageContainer.classList.add(
    'loading-message-container-is-visible'
  );
}

export function hideLoader() {
  loadingMessageContainer.classList.remove(
    'loading-message-container-is-visible'
  );
}

function submitSearch(event) {
  event.preventDefault();

  if (!searchInput.value) {
    return;
  }

  const key = '42569288-7bb99e6b1dd10eb6153443a4f';
  const basicLink = 'https://pixabay.com/api/';
  const q = searchInput.value;

  const link = `${basicLink}?key=${key}&q=${q}&image_type='photo'&orientation='horizontal'&safesearch=true`;

  addLoader();

  getImages(link);
}


