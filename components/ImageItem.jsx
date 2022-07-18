import Link from "next/link";
import Image from "next/image";
import { ImageContext } from "../pages/index";
import { useContext } from "react";

const ImageItem = ({ data }) => {
  const { isLoading, searchQuery } = useContext(ImageContext);


  return (
    <Link
      href={`category/${searchQuery}/${data.id}`}
      target="_blank"
      rel="noreferrer"
    >
      {isLoading ? (
        <div className="h-20 w-30 rounded-md bg-gray-300"></div>
      ) : (
        <div>
          <Image
            className=" rounded-lg shadow-md"
            width={300}
            height={200}
            objectFit="cover"
            src={data.urls.small}
            alt={data.alt_description}
          />
        </div>
      )}
    </Link>
  );
};

export default ImageItem;
