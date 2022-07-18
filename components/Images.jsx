import { useContext, useState, useEffect } from "react";
import ImageItem from "./ImageItem";
import { ImageContext } from "../pages/index";
import useAxios from "../hooks/useAxios";

const Images = () => {
  const { searchQuery, response } = useContext(ImageContext);

  return (
    <>
      {searchQuery?.length ? (
        <h1 className="text-center mt-6 underline text-2xl">
          Results for {searchQuery}
        </h1>
      ) : null}
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
          {searchQuery?.length > 0 ?  (
            response.map((data, key) => <ImageItem key={key} data={data} />)
          ) : (
            <div className="flex justify-center items-center">
              <div
                className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Images;
