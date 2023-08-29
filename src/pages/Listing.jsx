import React, { useState } from "react";

export default function Listing() {
  const [formData, setFormData] = useState({
    type: "rent",
    discountedPrice: 0,
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    desc: "",
    regularPrice: 0,
    offer: false,
  });

  const {
    offer,
    discountedPrice,
    desc,
    type,
    address,
    name,
    bedrooms,
    bathrooms,
    parking,
    regularPrice,
    furnished,
  } = formData;
  function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Create A Listing</h1>
      <form>
        <p className="text-lg mt-6 font-semibold">Sell/Rent</p>
        <div className="flex space-x-6">
          <button
            type="button"
            id="type"
            value={"sale"}
            onClick={onChange}
            className={` px-7 py-3 font-medium text-sm shadow-md rounded hover:shadow-lg focus:shadow-orange-200 active:shadow-xl transition duration-[250ms] ease-in-out w-full ${
              type === "rent"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
          >
            SELL
          </button>
          <button
            type="button"
            id="type"
            value={"sale"}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm shadow-md rounded hover:shadow-lg focus:shadow-orange-200 active:shadow-xl transition duration-[250ms] ease-in-out w-full ${
              type === "sale"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
          >
            RENT
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Property Name"
          maxLength={32}
          minLength={10}
          required
          className="w-full px-4 py-2 text-lg text-gray-700 bg-white rounded-[8px] border-gray-300 transition duration-[250ms] ease-in-out focus:bg-white focus:border-slate-600 mb-6"
        />

        <div className="flex space-x-10 mb-6">
          <div>
            <p className="text-lg font-semibold "> Rooms </p>
            <input
              type="number"
              id="rooms"
              min={1}
              max={50}
              value={bedrooms}
              onChange={onChange}
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 text-center focus:bg-white focus:border-slate-600"
            />
          </div>

          <div>
            <p className="text-lg font-semibold "> Baths </p>
            <input
              type="number"
              id="bathrooms"
              min={1}
              max={50}
              value={bathrooms}
              onChange={onChange}
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 text-center focus:bg-white focus:border-slate-600"
            />
          </div>
        </div>

        <p className="text-lg mt-6 font-semibold">Parking Spot</p>
        <div className="flex space-x-6">
          <button
            type="button"
            id="parking"
            value={true}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm shadow-md rounded hover:shadow-lg focus:shadow-orange-200 active:shadow-xl transition duration-[250ms] ease-in-out w-full ${
              !parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            YES
          </button>
          <button
            type="button"
            id="parking"
            value={false}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm shadow-md rounded hover:shadow-lg focus:shadow-orange-200 active:shadow-xl transition duration-[250ms] ease-in-out w-full ${
              parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            NO
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold">Furnished</p>
        <div className="flex space-x-6">
          <button
            type="button"
            id="furnished"
            value={true}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm shadow-md rounded hover:shadow-lg focus:shadow-orange-200 active:shadow-xl transition duration-[250ms] ease-in-out w-full ${
              !furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            YES
          </button>
          <button
            type="button"
            id="furnished"
            value={false}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm shadow-md rounded hover:shadow-lg focus:shadow-orange-200 active:shadow-xl transition duration-[250ms] ease-in-out w-full ${
              furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            NO
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold">Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="Enter An Address"
          required
          className="w-full px-4 py-2 text-lg text-gray-700 bg-white rounded-[8px] border-gray-300 transition duration-[250ms] ease-in-out focus:bg-white focus:border-slate-600 mb-6"
        />

        <p className="text-lg font-semibold">Description</p>
        <textarea
          type="text"
          id="description"
          value={desc}
          onChange={onChange}
          placeholder="Describe Your Listing"
          required
          className="w-full px-4 py-2 text-lg text-gray-700 bg-white rounded-[8px] border-gray-300 transition duration-[250ms] ease-in-out focus:bg-white focus:border-slate-600 mb-6"
        />

        <p className="text-lg font-semibold">Offer</p>
        <div className="flex space-x-6 mb-6">
          <button
            type="button"
            id="offer"
            value={true}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm shadow-md rounded hover:shadow-lg focus:shadow-orange-200 active:shadow-xl transition duration-[250ms] ease-in-out w-full ${
              !offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            YES
          </button>
          <button
            type="button"
            id="offer"
            value={false}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm shadow-md rounded hover:shadow-lg focus:shadow-orange-200 active:shadow-xl transition duration-[250ms] ease-in-out w-full ${
              offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
          >
            NO
          </button>
        </div>
        <div className="flex items-center mb-6">
          <div className="">
            <p className="text-lg font-semibold">Regular Price</p>
            <div className="flex w-full justify-center items-center space-x-6">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                min={50}
                max={400000000}
                required
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-100 rounded transition duration-[250ms] ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 text-center"
              />
              {type === "rent" && (
                <div className="">
                  <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {offer && (
          <div className="flex items-center mb-6">
            <div className="">
              <p className="text-lg font-semibold">Discounted Price</p>
              <div className="flex w-full justify-center items-center space-x-6">
                <input
                  type="number"
                  id="discountedPrice"
                  value={discountedPrice}
                  onChange={onChange}
                  min={50}
                  max={400000000}
                  required={offer}
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-100 rounded transition duration-[250ms] ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 text-center"
                />
                {type === "rent" && (
                  <div className="">
                    <p className="text-md w-full whitespace-nowrap">
                      $ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mb-6">
          <p className="text-lg font-semibold"> Images </p>
          <p className="text-gray-600">
            The first image will be the cover image (max:6)
          </p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpeg, .png, .jpg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 focus:bg-white focus:border-slate-600 bg-white border border-gray-200 rounded transition duration-[250ms] ease-in-out"
          />
        </div>
        <button
          type="submit"
          className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase shadow-md hover:bg-blue-700 hover:shadow-lg rounded-md focus:bg-blue-800 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-[250ms] ease-in-out"
        >
          Create Listing
        </button>
      </form>
    </main>
  );
}
