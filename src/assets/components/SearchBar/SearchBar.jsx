import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSubmit }) {
    function handleSubmit(e) {
        e.preventDefault();
        const topic = e.target.elements.search.value;
        if (topic.trim() !== '') {
            onSubmit(topic);
        } else {
            toast('The search field can not be empty!',{
                
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                },
              });
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
        <Toaster />
        <button type='submit'>
          Search
        </button>
      </form>
    </header>
  );
}
