
import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {

  const[readBook, setReadBook] = useState(data);

  const removeBook = (id) =>{
    let deleteBook = readBook.filter(book => book.id !== id);
    setReadBook(deleteBook);
  }

  const[annotation, setAnnotation] = useState(0);
  const{book, annotationBook} = data[annotation];

  const[showAllText, setShowAllText] = useState(false);

  const previousAnnotation = () =>{
    setAnnotation(annotation =>{
      annotation --;

      if(annotation<0){
        return data.length -1;
      }
      return annotation;
    })
  }

  const nextAnnotation = () =>{
    setAnnotation(annotation =>{
      annotation ++;
      if(annotation>data.length -1){
        annotation = 0;
      }
      return annotation;
    })
  }

  return (
      <div className="App">
      
      <div className='header'>
        <h3>Мій список книг для читання в 2023 році</h3>
      </div>

      <div>
        {readBook.map((nameBook =>{
          const{id, book, imageBook} = nameBook;

        return(

        <div key={id}>

          <div>
          <p className='nameBook'>{id}. {book}</p>
          </div>
        
          <div>
          <img className='styleImage' src={imageBook} alt="book" width='140px'/>
          </div>
        
          <div>
          <button className='styleButtonRemote' onClick={ () => removeBook(id)}>Remote</button>
          </div>
        </div> 
      )
        }))}

        <div>
        <button className='styleButtonDeleteAll' onClick={ () => setReadBook([])}>Delete all</button>
        </div>

        <div className='styleBlockAnnotation'>
        <div>
          <h3>Анотація до книг</h3>
        </div>
        <div>
          <p>{book}</p>
        </div>
        <div>
          <p className='styleText'>{showAllText ? annotationBook : annotationBook.substring(0, 100) + '...'}
          <button className='styleButtonAnnotation' onClick={() =>setShowAllText(!showAllText)}>{showAllText ? 'Звернути' : 'Показати більше'}</button></p>
        </div>
        <div>
          <button className='styleButtonNextAndPrevious' onClick={previousAnnotation}>Попередня</button>
          <button className='styleButtonNextAndPrevious' onClick={nextAnnotation}>Слідуюча</button>
        </div>
      </div>
      </div>      
    </div>
  );
}

export default App;
