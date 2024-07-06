import css from './ImageCard.module.css';

export default function ImageCard({image}) {
  const { urls, alt_description } = image;
  
  return (
      <img className={css.image} src={urls.small} alt={alt_description} />
  );
}
