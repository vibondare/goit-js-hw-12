import { getImages } from './js/pixabay-api';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector('.search-form');
export const searchInput = document.querySelector('#search-input');
export const gallery = document.querySelector('.gallery');
export const loadingMessageContainer = document.querySelector('.loading-message-container');
export const loadButtonContainer = document.querySelector('.load-button-container');
export const loadButton = document.querySelector('.load-button');

searchForm.addEventListener("submit", submitSearch);
// loadButton.addEventListener("click", loadMoreImages);

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

export function showLoadButton() {
  loadButtonContainer.style.display = 'block';
}

export function hideLoadButton() {
  loadButtonContainer.style.display = 'none';
}

function submitSearch(event) {
  event.preventDefault();

  if (!searchInput.value) {
    return;
  }

  const key = '42569288-7bb99e6b1dd10eb6153443a4f';
  const basicLink = 'https://pixabay.com/api/';
  const q = searchInput.value;

  const link = `${basicLink}?key=${key}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`;

  addLoader();

  getImages(link);
}

// function loadMoreImages() {

// }


