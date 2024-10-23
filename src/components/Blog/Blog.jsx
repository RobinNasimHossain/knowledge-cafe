import { BsBookmarks } from "react-icons/bs";
import PropTypes from "prop-types";
// eslint-disable-next-line react/prop-types
const Blog = ({ blog, handleAddToBookMarks, handleMarksAsRead }) => {
  const {
    id,
    title,
    cover,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtags,
  } = blog;

  return (
    <>
      <div className=" mx-auto max-w-2xl mb-20 space-y-5 ">
        <img
          className="w-full object-cover mt-10 p-5 rounded-md  aspect-video mb-8"
          src={cover}
          alt={`Cover picture of the title ${title}`}
        />
        <div className="flex justify-between items-center   ">
          <div className="flex gap-6">
            <img className="w-14 h-14 rounded-full" src={author_img} alt="" />
            <div>
              <h3 className="text-2xl"> Author{author}</h3>
              <p> {posted_date}</p>
            </div>
          </div>
          <div className="flex gap-2 ">
            <span>{reading_time} min read</span>
            <button
              onClick={() => handleAddToBookMarks(blog)}
              className="text-3xl font-bold text-red-700"
            >
              <BsBookmarks />
            </button>
          </div>
        </div>
        <h2 className="text-3xl  my-5 ">{title}</h2>

        <p>
          {hashtags.map((hash, idx) => (
            <span key={idx}> # {hash}</span>
          ))}
        </p>

        <button>
          <span
            onClick={() => handleMarksAsRead(id, reading_time)}
            className="text-xl font-bold text-purple-700 underline"
          >
            Mark as Read
          </span>
        </button>
      </div>
    </>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
