import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { gallery } from '../main.js';
import { loadButton } from '../main.js';

import { addLoader } from '../main.js';
import { hideLoader } from '../main.js';
import { showLoadButton } from '../main.js';
import { loadingMessageContainer } from '../main.js';

export function renderGallery(imagesData) {
  const data = imagesData.hits;

  const markup = data
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" class="image" width="358px" />
        </a>
        <ul class="image-properties-list">
            <li class="image-properties-list-item">
                <h2 class="property-name">Likes</h2>
                <p class="property-value">${likes}</p>
            </li>
            <li class="image-properties-list-item">
                <h2 class="property-name">Views</h2>
                <p class="property-value">${views}</p>
            </li>
            <li class="image-properties-list-item">
                <h2 class="property-name">Comments</h2>
                <p class="property-value">${comments}</p>
            </li>
            <li class="image-properties-list-item">
                <h2 class="property-name">Downloads</h2>
                <p class="property-value">${downloads}</p>
            </li>
        </ul>
    </li>
`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  showLoadButton();

  const lightbox = new simpleLightbox('.gallery a', {
    captionsData: 'alt',
  });

  hideLoader();
}
