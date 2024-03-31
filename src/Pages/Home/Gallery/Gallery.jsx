import { useState } from "react";

const Gallery = () => {
    const [filter, setFilter] = useState("all")
    return (
        <section className="my-28 px-5 lg:px-12">
            <div className="text-center">
                <h1 className="text-5xl font-bold brandFont text-primary">Our Gallery</h1>
            </div>

            <div className="my-16 flex items-center justify-center w-full lg:gap-7 gap-3 px-5">

                <div className={`px-6 lg:px-11 py-2 rounded-md brandFont cursor-pointer ${filter === "all" ? "bg-primary text-white" : "text-primary bg-gray-300"}`}
                    onClick={() => setFilter("all")}
                >
                    <p>All</p>
                </div>

                <div className={`px-6 lg:px-11 py-2 rounded-md brandFont cursor-pointer ${filter === "picnic" ? "bg-primary text-white" : "text-primary bg-gray-300"}`}
                    onClick={() => setFilter("picnic")}>
                    <p>Picnic</p>
                </div>

                <div className={`px-6 lg:px-11 py-2 rounded-md brandFont cursor-pointer ${filter === "recent" ? "bg-primary text-white" : "text-primary bg-gray-300"}`}
                    onClick={() => setFilter("recent")}>
                    <p>Recent</p>
                </div>

            </div>

            <div className="my-11 grid grid-cols-12 gap-5">

                <div className="col-span-12 grid grid-cols-12 gap-5">
                    <div className="col-span-full md:col-span-6 lg:col-span-4 relative">
                        <img src="https://i.ibb.co/68tY7vh/BTEC-Alumni-Association-starts-journey.jpg" alt="BTEC-Alumni-Association" className="w-96 h-72 shadow-lg rounded-lg" />

                        <div className="absolute w-full h-full bg-primary/80 top-0 rounded-lg opacity-0 hover:opacity-100 transition-all duration-700 p-3 text-white">
                            <h1 className="brandFont mb-3 text-2xl font-bold">Alumni Tour</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nam fugit laudantium in omnis, commodi iure ducimus veniam impedit neque beatae autem delectus accusamus quas. Placeat beatae corporis autem? Sapiente, cumque iure? Laborum fugit facilis ratione a alias. Excepturi, iure.</p>
                        </div>
                    </div>
                    <div className="col-span-full md:col-span-6 lg:col-span-4 relative">
                        <img src="https://i.ibb.co/Jc8pJ3K/event-alumni-picnic-1000w600h.jpg" alt="event-alumni-picnic" className="w-96 h-72 shadow-lg rounded-lg" />

                        <div className="absolute w-full h-full bg-primary/80 top-0 rounded-lg opacity-0 hover:opacity-100 transition-all duration-700 p-3 text-white">
                            <h1 className="brandFont mb-3 text-2xl font-bold">Alumni Tour</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nam fugit laudantium in omnis, commodi iure ducimus veniam impedit neque beatae autem delectus accusamus quas. Placeat beatae corporis autem? Sapiente, cumque iure? Laborum fugit facilis ratione a alias. Excepturi, iure.</p>
                        </div>
                    </div>
                    <div className="col-span-full md:col-span-6 lg:col-span-4 relative">
                        <img src="https://i.ibb.co/Nxmc4cB/picnic1.jpg" alt="BTEC-Alumni-Association" className="w-96 h-72 shadow-lg rounded-lg" />

                        <div className="absolute w-full h-full bg-primary/80 top-0 rounded-lg opacity-0 hover:opacity-100 transition-all duration-700 p-3 text-white">
                            <h1 className="brandFont mb-3 text-2xl font-bold">Alumni Tour</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nam fugit laudantium in omnis, commodi iure ducimus veniam impedit neque beatae autem delectus accusamus quas. Placeat beatae corporis autem? Sapiente, cumque iure? Laborum fugit facilis ratione a alias. Excepturi, iure.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 grid grid-cols-12 gap-5">
                    <div className="col-span-full md:col-span-6 lg:col-span-4 relative">
                        <img src="https://i.ibb.co/MGmfZWS/picnic2.jpg" alt="BTEC-Alumni-Association" className="w-96 h-72 shadow-lg rounded-lg" />

                        <div className="absolute w-full h-full bg-primary/80 top-0 rounded-lg opacity-0 hover:opacity-100 transition-all duration-700 p-3 text-white">
                            <h1 className="brandFont mb-3 text-2xl font-bold">Alumni Tour</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nam fugit laudantium in omnis, commodi iure ducimus veniam impedit neque beatae autem delectus accusamus quas. Placeat beatae corporis autem? Sapiente, cumque iure? Laborum fugit facilis ratione a alias. Excepturi, iure.</p>
                        </div>
                    </div>
                    <div className="col-span-full md:col-span-6 lg:col-span-4 relative">
                        <img src="https://i.ibb.co/yVVP2qD/picnic3.jpg" alt="event-alumni-picnic" className="w-96 h-72 shadow-lg rounded-lg" />

                        <div className="absolute w-full h-full bg-primary/80 top-0 rounded-lg opacity-0 hover:opacity-100 transition-all duration-700 p-3 text-white">
                            <h1 className="brandFont mb-3 text-2xl font-bold">Alumni Tour</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nam fugit laudantium in omnis, commodi iure ducimus veniam impedit neque beatae autem delectus accusamus quas. Placeat beatae corporis autem? Sapiente, cumque iure? Laborum fugit facilis ratione a alias. Excepturi, iure.</p>
                        </div>
                    </div>
                    <div className="col-span-full md:col-span-6 lg:col-span-4 relative">
                        <img src="https://i.ibb.co/T0GfMCC/SJHS-Alumni-Picnic-2023-133-of-186.webp" alt="BTEC-Alumni-Association" className="w-96 h-72 shadow-lg rounded-lg" />

                        <div className="absolute w-full h-full bg-primary/80 top-0 rounded-lg opacity-0 hover:opacity-100 transition-all duration-700 p-3 text-white">
                            <h1 className="brandFont mb-3 text-2xl font-bold">Alumni Tour</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nam fugit laudantium in omnis, commodi iure ducimus veniam impedit neque beatae autem delectus accusamus quas. Placeat beatae corporis autem? Sapiente, cumque iure? Laborum fugit facilis ratione a alias. Excepturi, iure.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Gallery;