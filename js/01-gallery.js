import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryList = document.querySelector('.gallery')
console.log(galleryList);
const galleryItm = imgMarkup(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryItm)


function imgMarkup(galleryItems) {
    const markup = galleryItems.map(({preview, original, description}) => { 
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    }).join('');
  
    return markup;
  }
  
//   console.log(imgMarkup(galleryItems));

// const imgCard = document.querySelector('.gallery__item')
// console.log(imgCard)



galleryList.addEventListener('click', onImgClick);

function onImgClick(e) {
    e.preventDefault();
    console.log(e.target)
    if (e.target.nodeName !== 'IMG') {
        return;
      } else {
        const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)
instance.show()


      }
}