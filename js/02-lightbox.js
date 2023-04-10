import { galleryItems } from './gallery-items.js';
// Change code below this line



console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
console.log(galleryList);
const galleryItm = imgMarkup(galleryItems);
galleryList.insertAdjacentHTML("beforeend", galleryItm);

function imgMarkup(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
      
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");

  return markup;
}



galleryList.addEventListener("click", onImgClick);

function onImgClick(e) {
   
  e.preventDefault();
  console.log(e.target);
  if (e.target.nodeName !== "IMG") {
    return;
  } else {
    const imgAlt = `${e.target.getAttribute('alt')}`;
      console.log(imgAlt);
   
    
  }
}


let lightbox = new SimpleLightbox('ul.gallery a', {
        // captions: true,
        // captionType: "attr",
        captionDelay: 250,
        // captionsData: `${imgAlt}`,
        captionsData: 'alt',
        captionPosition: 'bottom'
    });
    // lightbox.on('show.simplelightbox', function () {});