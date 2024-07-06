export default function SearchBar({ onSubmit }) {
    function handleSubmit(e) {
        e.preventDefault();
        const topic = e.target.elements.search.value;
        if (topic.trim() !== '') {
            onSubmit(topic);
        } else {
          alert('The search field can not be empty!');
        }
      }
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name='search'
          type='text'
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
        />
        <button type='submit'>
          Search
        </button>
      </form>
    </header>
  );
}
