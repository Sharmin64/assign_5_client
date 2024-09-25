import React, { useState } from "react";
import Navber from "../sharedPage/Navber";
import { useGetAllServicesQuery } from "../../redux/api/serviceApi";
// import { useFetchServicesQuery } from "../../redux/api/baseApi";
import { IService } from "../../types";

const Service: React.FC = () => {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data, error, isLoading } = useGetAllServicesQuery({
    name: search,
    price,
    duration,
    sortBy,
    page,
    limit,
  });

  // const {
  //   data: services,
  //   isLoading,
  //   isError,
  //   error,
  // } = useFetchServicesQuery({});
  // console.log(services, "Fetching service  from backend ");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error?.toString()}</div>;

  // // Check if services is defined and is an array before using map
  // if (!services || !Array.isArray(services)) {
  //   return (
  //     <div className="mt-20 text-pretty text-5xl text-yellow-300">
  //       No services available
  //     </div>
  //   );
  // }

  return (
    <>
      <Navber />
      <div className="container mx-auto py-4 mt-8">
        <h1 className="text-4xl font-bold mb-6">Services</h1>
        <div className="space-x-4 text-xl ml-3 px-2">
          {/* Search and Filter Inputs */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name"
          />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Filter by price"
          />
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Filter by duration"
          />
          <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
            <option value="">Sort By</option>
            <option value="price">Price</option>
            <option value="duration">Duration</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {data?.data?.map((service: IService) => (
            <div
              key={service._id}
              className="card card-compact bg-base-100 w-80 shadow-xl mx-auto"
            >
              <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
                <p>${service.price}</p>
                <div className="card-actions justify-end">
                  <button className="btn bg-[#6b6bff] hover:bg-[#c0c0ff] text-white hover:text-black">
                    Duration: {service.duration}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex flex-1 justify-between my-6">
          {/* Pagination Controls */}
          <button
            className="px-6 py-3 bg-[#fff199] hover:bg-[#ffdd00] font-mono font-bold text-xl rounded-xl"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            Previous
          </button>
          <span className="font-bold text-xl">Page {page}</span>
          <button
            className="px-6 py-3 bg-[#fff199] hover:bg-[#ffdd00] font-mono font-bold text-xl rounded-xl"
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>

        {/* Pagination Info */}
        <div className="w-28 bg-[#d5d5ff] mb-6 inline-table rounded-2xl">
          Total: {data?.pagination?.total} | Limit: {limit}
          <select
            className="inline float-right bg-[#d5d5ff]"
            onChange={(e) => setLimit(Number(e.target.value))}
            value={limit}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Service;

// ?extra  code
// <div key={service._id} className="p-4 border rounded-lg shadow">
//   <h2 className="text-2xl font-semibold">{service.name}</h2>
//   <p className="text-gray-700">{service.description}</p>
//   <p className="text-gray-900 font-bold mt-2">${service.price}</p>
//   <p className="text-gray-500">Duration: {service.duration} mins</p>
// </div>
