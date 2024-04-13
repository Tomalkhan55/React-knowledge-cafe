
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3  text-center bg-gray-300 ml-4 mt-4 pt-2 rounded-xl">
            <div>
                <h3 className="text-4xl">Reading Time: {readingTime}</h3>
            </div>

            <h1 className="text-xl">Bookmarked blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )
            }
        </div>

    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;