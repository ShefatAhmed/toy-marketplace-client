import React from 'react';
import useTitle from '../../hooks/useTitle';

const ToyCarsPage = () => {
    useTitle('Toy Cars');
    return (
        <div className="min-h-screen">
            <div className="container mx-auto py-16">
                <h1 className="text-4xl text-center font-bold mb-8">Explore the World of Toy Cars</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-bold mb-4">Different Types of Toy Cars</h2>
                        <p className="text-gray-700">
                            Toy cars come in various shapes and sizes, from classic die-cast models to remote-controlled cars. Explore the exciting world of toy cars and discover the perfect ones for your collection or playtime adventures.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-bold mb-4">Collecting Vintage Toy Cars</h2>
                        <p className="text-gray-700">
                            If you're a collector, you'll love hunting for vintage toy cars. Learn about the history of famous toy car manufacturers and their iconic models that have become collector's items over the years.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-bold mb-4">Building Your Toy Car Collection</h2>
                        <p className="text-gray-700">
                            Starting a toy car collection can be a rewarding hobby. Discover tips on how to build and display your collection, from organizing by brand to showcasing your favorite pieces.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-bold mb-4">Remote-Controlled Toy Cars</h2>
                        <p className="text-gray-700">
                            Remote-controlled (RC) cars offer hours of fun and excitement. Learn about the latest RC car models, how to choose the right one for your skill level, and tips for racing and customizing your RC vehicles.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-bold mb-4">DIY Toy Car Projects</h2>
                        <p className="text-gray-700">
                            Get creative and craft your own toy cars with DIY projects. Whether you're into building model cars or crafting custom designs, we'll provide step-by-step guides and inspiration for your next project.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-bold mb-4">Toy Car Maintenance and Repair</h2>
                        <p className="text-gray-700">
                            Keep your toy cars in top condition with maintenance and repair tips. Learn how to clean, restore, and fix common issues to ensure your collection or playtime remains enjoyable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCarsPage;
