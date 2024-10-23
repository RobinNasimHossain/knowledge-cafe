/* eslint-disable react/prop-types */
import BookMark from "../Bookmark/BookMark";

const BookMarks = ({ bookMarks, readingTime }) => {
  return (
    <>
      <div className="md: w-1/3 text-3xl mx-auto bg-gradient-to-r from-yellow-200 via-gray-400 to-cyan-300">
        <div>
          <h3 className="text-4xl "> Reading Time : {readingTime}</h3>
        </div>
        <h1 className="mt-3 p-3">BookMarks : {bookMarks.length}</h1>
        {bookMarks.map((bookmark, idx) => (
          <BookMark key={idx} bookmark={bookmark}></BookMark>
        ))}
      </div>
    </>
  );
};

export default BookMarks;
