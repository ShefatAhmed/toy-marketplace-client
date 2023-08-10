import React from 'react';

const FeaturedItems = () => {
    const items = [
        {
          id: 1,
          name: 'Emergency Cars',
          price: '$19.99',
          image: 'https://mybtoys.com/wp-content/uploads/BX1657_PR-600x600.png',
        },
        {
          id: 2,
          name: 'Commuter Stars',
          price: '$24.99',
          image: 'https://drivenbybattat.com/wp-content/uploads/WH1121_PR.png',
        },
        {
          id: 3,
          name: 'Red McQueen',
          price: '$14.99',
          image: 'https://i0.wp.com/pixarpost.com/wp-content/uploads/2022/09/McDonalds-Happy-Meal-Cars-on-the-Road-04-Rumbler-Lightning-McQueen.png?resize=1000%2C1000&ssl=1',
        },
        {
          id: 4,
          name: 'Sports Jetsons',
          price: '$29.99',
          image: 'https://media-www.canadiantire.ca/product/seasonal-gardening/toys/toys-games/0505333/-cars-3-diecast-single-cars-9e6d351b-4335-4d82-a205-e32dea7486ff.png?imdensity=1&imwidth=1244',
        },
      ];
    return (
        <section className="bg-gray-50 py-24 px-12">
            <div className="container mx-auto">
                <h4 className='uppercase text-center'>Shop ToyStars Cars</h4>
                <h2 className="text-5xl font-semibold mb-6 text-center">Featured Items</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {items.map((item) => (
                        <div key={item.id} className="bg-white p-6 rounded-lg drop-shadow-2xl">
                            <img
                                src={`${item.image}`}
                                alt={item.name}
                                className="mb-4 w-full h-40 object-cover"
                            />
                            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                            <p className="text-gray-600 mb-2">{item.price}</p>
                            <button className="btn bg-cyan-500 glass hover:bg-cyan-700">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedItems;