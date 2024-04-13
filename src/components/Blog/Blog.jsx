import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';


const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { title, cover, author_img, author, date, reading_time, hashtags } = blog;
    return (
        <div className='my-5'>
            <img className='w-full rounded-md' src={cover} alt="" />
            <div className='flex justify-between mt-3'>
                <div>
                    <div className='flex gap-2'>
                        <img className="w-12 rounded-full" src={author_img} alt="" />
                        <div>
                            <h3 className="text-xl font-bold">{author}</h3>
                            <h4 className="text-sm">{date}</h4>
                        </div>
                    </div>
                </div>
                <div>
                    <span>{reading_time}</span> min read
                    <button
                        onClick={()=> handleAddToBookmark(blog)}
                        className='ml-2 text-2xl text-red-600'
                    ><FaRegBookmark></FaRegBookmark></button>

                </div>
            </div>
            <h2 className="text-4xl font-bold mt-2">{title}</h2>
            <h4 className="text-sm my-2">{hashtags}</h4>
            <button onClick={() =>handleMarkAsRead(reading_time)} className='text-blue-500 font-medium underline'>Mark as read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
handleMarkAsRead: PropTypes.func
}

export default Blog;