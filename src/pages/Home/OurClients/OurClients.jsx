import React from 'react';

const OurClients = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0 md:space-x-12 px-6">
                    <div className='md:w-1/2'>
                        <h3 className="uppercase font-bold text-sm md:text-base lg:text-lg xl:text-xl">our clients</h3>
                        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl mt-2">
                            Meet our top <br /> clients & partners
                        </h1>
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-gray-600">
                            We appreciate your trust greatly. Meet our regular clients & partners who choose us as their kids’ products supplier, and whom we are happy to work with. <br />
                            <br />
                            To become an affiliate, please subscribe and/or contact our sales team for further instructions. Welcome to ToyStars!
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center mt-12 space-x-6 md:mt-16">
                    <img src="https://junotoys.themerex.net/wp-content/uploads/2021/09/cl5-copyright.png" alt="" className="h-10 md:h-16 lg:h-20 xl:h-24 my-2" />
                    <img src="https://junotoys.themerex.net/wp-content/uploads/2021/09/cl4-copyright.png" alt="" className="h-10 md:h-16 lg:h-20 xl:h-24 my-2" />
                    <img src="https://junotoys.themerex.net/wp-content/uploads/2021/09/cl3-copyright.png" alt="" className="h-10 md:h-16 lg:h-20 xl:h-24 my-2" />
                    <img src="https://junotoys.themerex.net/wp-content/uploads/2021/09/cl1-copyright.png" alt="" className="h-10 md:h-16 lg:h-20 xl:h-24 my-2" />
                    <img src="https://junotoys.themerex.net/wp-content/uploads/2021/09/cl2-copyright.png" alt="" className="h-10 md:h-16 lg:h-20 xl:h-24 my-2" />
                </div>
            </div>
        </section>
    );
};

export default OurClients;