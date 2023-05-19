import React from 'react';
import './Gallery.css';
const Gallery = () => {
    const imageUrls = [
        'https://i.ibb.co/L6WTm0h/818b-Vw-Yx21-L-SL1500.jpg',
        'https://i.ibb.co/vqTsv4M/2621-m007-25-01-8298481-lamborghini-v2.jpg',
        'https://i.ibb.co/P6QYdrF/959700197b478cc0f936689593094f65.jpg',
        'https://i.ibb.co/5WT3mnG/baby-toddler-playing-toy-car-boy-40768227.jpg',
        'https://i.ibb.co/28T4NVy/best-toddler-toys-dad-play-660x367.jpg',
        'https://i.ibb.co/CwwkkLn/boy-playing-with-toy-cars.jpg',
        'https://i.ibb.co/wSD552y/cars-construction-benefit-your-child-1200x1200.webp',
        'https://i.ibb.co/mtjhCbN/istockphoto-892876384-612x612.jpg'
    ];
    return (
        <div className='my-16'>
            <div className='text-center'>
                <h1 className='text-4xl font-extrabold text-amber-500'>SATISFIED <span className='text-sky-500'>CUSTOMER</span> GALLERY</h1>
                <p className='md:px-36 px-8 my-3 font-bold text-xs italic'>At Cars Toy Company, customer satisfaction is our top priority. We strive to exceed expectations by delivering exceptional toy cars that spark joy and foster imaginative play. Our commitment to quality craftsmanship and attention to customer needs ensures that every purchase brings smiles and long-lasting enjoyment. Join us on a thrilling journey of satisfaction with Cars Toy Company!
                </p>
            </div>
            <div className="flex flex-wrap justify-center drop-shadow-2xl">
                {imageUrls.map((imageUrl, index) => (
                    <div key={index} className="relative">
                        <img className="w-64 h-64 object-cover" src={imageUrl} alt="Card" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-black bg-opacity-50 p-4 rounded absolute top-0 left-0 w-full h-full">
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;