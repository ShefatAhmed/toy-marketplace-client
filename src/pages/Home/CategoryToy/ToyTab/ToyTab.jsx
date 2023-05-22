import React, { useEffect, useState } from 'react';
import ToyTabChild from '../ToyTabChild/ToyTabChild';
const ToyTab = () => {
    const [activeTab, setActiveTab] = useState("sports-car");
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`https://toy-marketplace-server-shefatahmed.vercel.app/tabs/${activeTab}`)
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
            });
    }, [activeTab]);


    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div className='my-20 '>
            <div className='text-center my-8'>
                <h1 className='font-bold text-2xl uppercase'>Shop By Category</h1>
                <p className='md:mx-16 mx-3 text-xs'>We have a wide collection of toy cars. Sports cars, trucks, police cars are popular among these toy cars. <br /> So the below section is for everyone's convenience  to purchase these toys. Check the details of your favorite toy from the category.</p>
            </div>
            <div className="w-full px-16 mx-auto">
                <div className="flex border rounded-lg border-gray-200 gap-1 font-bold">
                    <button
                        className={`w-1/3 py-4 px-6 ${activeTab === "sports-car" ? 'bg-gradient-to-r from-cyan-400 to-cyan-800 text-white' : 'bg-gray-300 text-gray-700'
                            }`}
                        onClick={() => handleTabClick("sports-car")}
                    >
                        Sports Cars
                    </button>
                    <button
                        className={`w-1/3 py-4 px-6 ${activeTab === "truck" ? 'bg-gradient-to-r from-cyan-400 to-cyan-800 text-white' : 'bg-gray-300 text-gray-700'
                            }`}
                        onClick={() => handleTabClick("truck")}
                    >
                        Trucks
                    </button>
                    <button
                        className={`w-1/3 py-4 px-6 ${activeTab === "mini-police-car" ? 'bg-gradient-to-r from-cyan-400 to-cyan-800 text-white' : 'bg-gray-300 text-gray-700'
                            }`}
                        onClick={() => handleTabClick("mini-police-car")}
                    >
                        Police Cars
                    </button>
                </div>
                <div className='grid grid-cols-1  md:grid-cols-2 justify-items-center mt-8 gap-5 md:gap-0'>
                    {
                        toys.slice(0, 2).map(toy => <ToyTabChild
                        key={toy._id}
                        toy={toy}
                        ></ToyTabChild>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ToyTab;