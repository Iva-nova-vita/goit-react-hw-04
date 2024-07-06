import css from './ImageGallery.module.css'

export default function ImageGallery({ images }) {
  console.log(images, 'images');
  return (
    <ul className={css.gallery}>
      {images.map((item) => {
        return (
          <li className={css.galleryItem} key={item.id}>
            <img src={item.urls.small} alt={item.alt_description} />
          </li>
        );
      })}
    </ul>
  );
}
