import React,{useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';


const Library = () =>{
//   const callAPI = ()=>{
// // should limit call to most relevant search results with only the title, author, cover image, and publish date
//     fetch(https://openlibrary.org/search.json?q=crime+and+punishment&fields=title,author_name,cover_edition_key,cover_i,publish_date&lang=eng&limit=1`)  
//     .then(res => res.json())
//     .then(data => console.log(data));
  
//   }
//   useEffect(()=>{
//     callAPI()
//   },[])
  const [books, setBooks] = React.useState<string[]>([]);
  const [newBook, setNewBook] = React.useState('');
  const handleAddBook = () => {
    if(newBook === "") return;

    setBooks([...books, newBook]);
    setNewBook('');
  }

  return (
    <div className='library'>
      <h1>Library</h1>
      <Box sx={{marginBottom: '20px'}}>
        {!!books && (
          books.map((book, index) => (
            <Box key={index} sx={{padding: '10px', border: '1px solid #ccc', marginBottom: '10px', borderRadius: '4px'}}>
              {book}
            </Box>
          ))
        )}
      </Box>
      <Box sx={{backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px'}}>
        <TextField  
          id="add-book-text" 
          variant="outlined" 
          label='Enter book title or author'
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleAddBook} disabled={!newBook}>
            Add Book
          </Button>
      </Box>
    </div>
  )
}

export default Library;
