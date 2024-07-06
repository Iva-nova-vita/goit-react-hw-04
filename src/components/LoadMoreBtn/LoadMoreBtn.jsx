import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({getImages, searchQuery, page}) {
    const handleClick = ()=>getImages(searchQuery, page)
    return (
        <button className={css.btnLoadMore} onClick={handleClick}>Load more</button>
    )
}