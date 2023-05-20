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
              <th></th> 
              <th>Name</th> 
              <th>Job</th> 
              <th>company</th> 
              <th>location</th> 
              <th>Last Login</th> 
              <th>Favorite Color</th>
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

