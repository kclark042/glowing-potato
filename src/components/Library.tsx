import React, {useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';


type Book = {
  title: string;
  author: string;
  publishDate: string;
  coverImage: string;
}

const Library = () =>{
  const callAPI = ()=>{
      // should limit call to most relevant search results with only the title, author, cover image, and publish date
      // fetch(`https://openlibrary.org/search.json?q=crime+and+punishment&fields=title,author_name,cover_edition_key,publish_date&lang=eng&limit=1`)  
      // .then(res => res.json())
      // .then(data => console.log(data));
      // Mock response for testing purposes
      const response = {
        "numFound": 2942,
        "start": 0,
        "numFoundExact": true,
        "num_found": 2942,
        "documentation_url": "https://openlibrary.org/dev/docs/api/search",
        "q": "crime and punishment",
        "offset": null,
        "docs": [
            {
                "author_name": [
                    "Fyodor Dostoevsky"
                ],
                "cover_edition_key": "OL55900058M",
                "publish_date": [
                    "2015",
                    "2018",
                    "2017",
                    "1866",
                    "2018-01-18",
                    "2013",
                    "2016",
                    "2014"
                ],
                "title": "Crime and Punishment"
            }
        ]
    }
    const newBook = {
      title: response.docs[0].title,
      author: response.docs[0].author_name[0],
      publishDate: response.docs[0].publish_date.sort()[0], // Get the earliest publish date
      coverImage: `https://covers.openlibrary.org/b/olid/${response.docs[0].cover_edition_key}-M.jpg`
    }
    setBooks([...books, newBook]);
  }


 
  const [books, setBooks] = React.useState<Book[]>([]);
  const [newBook, setNewBook] = React.useState('');
  const handleAddBook = () => {
    if(newBook === "") return;
    callAPI();
    setNewBook('');
  }

  const handleDeleteBook = (index: number) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  }

  return (
    <div className='library'>
      <h1>Library</h1>
      <Box sx={{marginBottom: '20px'}}>
        {!!books && (
          books.map((book, index) => (
            <Card key={index} sx={{padding: '10px', border: '1px solid #ccc', marginBottom: '10px', borderRadius: '4px'}}>
              <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="subtitle1">{book.author}</Typography>
                <Typography variant="body2">{book.publishDate}</Typography>
                <CardMedia component="img" src={book.coverImage} alt={`cover image of  ${book.title}, authored by ${book.author}`}/>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary" onClick={() => handleDeleteBook(index)} >Delete</Button>
              </CardActions>
            </Card>
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
