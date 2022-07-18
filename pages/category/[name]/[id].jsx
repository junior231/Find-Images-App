import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import { useRouter } from "next/router";
import Image from "next/image";

const ImageDetails = () => {
  const router = useRouter();
  const [details, setDetails] = useState();
  const { name, id } = router.query;
  const { response, getCurrentItem, isLoading } = useAxios(
    `search/photos?page=1&query=${name}&client_id=${process.env.ACCESS_KEY}`
  );

  useEffect(() => {
    if (response) {
      const currentItem = getCurrentItem(id);
      setDetails(currentItem);
    }
  }, [id, response, name, getCurrentItem]);

  return (
    <>
      <div className="bg-gray-900 flex items-center mx-auto w-full  py-10 mb-6" />
      {isLoading ? (
        <div className="flex justify-center bg-gray-900"></div>
      ) : (
        <>
          <div className="ml-10">
            <button onClick={() => router.push("/")}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center pt-4 mt-10">
            <div className="place-self-center px-2 md:place-self-end">
              {details ? (
                <Image
                  className=" rounded-lg shadow-md"
                  src={details?.urls?.small}
                  alt={details?.alt_description}
                  width={500}
                  height={450}
                  objectFit="cover"
                />
              ) : null}
            </div>
            <div className="place-self-center md:place-self-start md:mt-10 px-4 pt-5">
              <h1 className="px-3 md:px-0 md:text-left font-semibold ">
                Name:{" "}
                <span className="text-gray-700 text-xl ml-1 font-semibold">{`${
                  details && details?.user?.first_name
                } ${details && details?.user?.last_name}`}</span>
              </h1>
              <p className="mt-3 px-3 md:px-0 md:mt-5 text-left md:w-3/4 font-medium md:text-left ">
                Bio:
                {details?.user?.bio ? (
                  <span className="text-gray-700 ml-1">
                    {details ? details?.user?.bio : "Unavailable"}
                  </span>
                ) : (
                  <span className="text-gray-700 ml-1">Unavailable</span>
                )}
                {/* */}
              </p>
              <div className=" pl-4 md:pl-0 mt-8">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={details && details?.urls?.full}
                  className="bg-blue-600 px-3 py-2.5 mt-3 rounded text-white focus:ring-1 text-decoration-line: none focus:ring-blue-300"
                >
                  View Full Image
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ImageDetails;
