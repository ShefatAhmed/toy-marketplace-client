import React, { useEffect, useState } from 'react';
import ToyDetail from './ToyDetail';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch('https://toy-marketplace-server-shefatahmed.vercel.app/alltoys/')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, []);

   const handleSearch = () => {
    fetch(`https://toy-marketplace-server-shefatahmed.vercel.app/getToys/${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };
  useTitle('All Toys')
  return (
    <div className="overflow-x-auto mx-8 mb-36">
      <h1 className='text-center font-bold mt-8'>All Toys...</h1>
      <div className="search-box p-8 text-center">
          <input onChange={(event) => setSearch(event.target.value)} type="text" placeholder="Toys search by name" className="input input-bordered input-success w-full max-w-xs" />{" "}
          <button className='btn px-8 ms-5 xs:mt-8 bg-cyan-500 hover:bg-cyan-600 glass' onClick={handleSearch}>Search</button>
        </div>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>available quantity</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {
            toys.map(toy => <ToyDetail
              key={toy._id}
              toy={toy}
            ></ToyDetail>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;

