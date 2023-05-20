import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyDetail from './ToyDetail';

const AllToys = () => {
    const toys = useLoaderData()
    return (
        <div className="overflow-x-auto mx-8 my-16">
        <table className="table table-compact w-full">
          <thead>
            <tr> 
              <th>Seller Name</th> 
              <th>Cars Name</th> 
              <th>Cars category</th> 
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

