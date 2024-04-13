import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);



  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove boook mark
    // console.log('remove bookmark', id);
    const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookMarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex p-4 mx-4'>
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks
          readingTime={readingTime}
          bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
