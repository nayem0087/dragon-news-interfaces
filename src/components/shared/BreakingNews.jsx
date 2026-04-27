import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        _id: "1",
        title: "Breaking News: Major Event Unfolds in the City",
    },
    {
        _id: "2",
        title: "Breaking News: Major Event Unfolds in the City",
    },
    {
        _id: "3",
        title: "Breaking News: Major Event Unfolds in the City",
    },
]

const BreakingNews = () => {
    return (
        <div className='max-w-[80%] mx-auto flex justify-between gap-4 items-center bg-gray-200 p-4 rounded-[5px]'>
            <button className='btn bg-red-500 text-white'>Latest News</button>
            <Marquee 
            pauseOnHover={true}
            speed={100} className='gap-20'>
               {news.map((n) => ( 
                 <span key={n._id}>{n.title}</span>
               ))}
            </Marquee>
        </div>
    );
};

export default BreakingNews;