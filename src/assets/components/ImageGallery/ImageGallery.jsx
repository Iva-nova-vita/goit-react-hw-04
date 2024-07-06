import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ images }) {
  console.log(images, 'images');
  return (
    <ul className={css.gallery}>
      {images.map((item) => {
        return (
          <li className={css.galleryItem} key={item.id}>
            <ImageCard image={item}></ImageCard>
          </li>
        );
      })}
    </ul>
  );
}
