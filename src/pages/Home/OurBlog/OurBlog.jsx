import React from 'react';

const OurBlog = () => {
    const BlogPosts = [
        {
            id: 1,
            image: 'https://m.media-amazon.com/images/I/614KleEgYcL._AC_SL1500_.jpg',
            title: 'The top Audi Kids Ride on Cars for 2023',
            date: 'August 10, 2023',
            commentCount: 5,
        },
        {
            id: 2,
            image: 'https://m.media-amazon.com/images/I/51Shwit2bkL._AC_SL1000_.jpg',
            title: 'The Top 5 Best Digger Toys For Toddlers',
            date: 'August 15, 2023',
            commentCount: 10,
        },
        {
            id: 3,
            image: 'https://m.media-amazon.com/images/I/61g8teQZltL._AC_UF1000,1000_QL80_.jpg',
            title: 'The top kids Petrol Buggy [updated for 2023]',
            date: 'August 20, 2023',
            commentCount: 7,
        },
    ];
    return (
        <section className="container mx-auto p-16">
            <p className='text-center uppercase font-bold'>Our Blog</p>
            <h1 className='text-center font-bold text-6xl mb-5'>Latest News</h1>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {BlogPosts.map((post) => (
                    <div
                        key={post.id}
                        className="relative overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg shadow"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center text-white text-center">
                            <div>
                                <h1 className="text-xl font-bold mb-2 p-1">{post.title}</h1>
                                <p className="mb-1">{post.date}</p>
                                <button className="underline">Read <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurBlog;