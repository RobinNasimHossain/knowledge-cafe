import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

export default function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const [readingTime, setReadIngTime] = useState(0);
  const handleAddToBookMarks = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };

  const handleMarksAsRead = (id, time) => {
    const marksAsRead = readingTime + time;
    setReadIngTime(marksAsRead);
    //remove

    const remining = bookMarks.filter((bookmark) => bookmark.id !== id);
    setBookMarks(remining);
  };
  return (
    <>
      <Header />
      <main className="md:flex bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-300 mx-auto max-w-7xl">
        <Blogs
          handleAddToBookMarks={handleAddToBookMarks}
          handleMarksAsRead={handleMarksAsRead}
        />
        <BookMarks bookMarks={bookMarks} readingTime={readingTime} />
      </main>
    </>
  );
}
