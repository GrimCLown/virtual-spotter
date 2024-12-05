import Link from "next/link";
import Image from "next/image"; // Assuming you're using Next.js' Image component
import React, { useState, useEffect } from "react";
const StudioCard = ({ data }) => {
  const [isImageValid, setIsImageValid] = useState(true);

  const handleImageError = () => {
    setIsImageValid(false); // Set to false if the image fails to load
  };

  return (
    <Link href={`/studio/${data.id}`}>
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-5 cursor-pointer hover:shadow-lg transition-shadow duration-200">
        <div className="flex flex-col items-center">
          <img
            src={
              isImageValid
                ? data.logo_url
                : "/public/no-image-available-png-4.png"
            }
            alt={`${data.name} logo`}
            width={150}
            height={150}
            className="mb-4"
            onError={handleImageError}
          />
          <h2 className="text-xl font-semibold text-gray-800">{data.name}</h2>
          <p className="text-gray-500 text-sm">{data.business_type}</p>
          <p className="text-gray-600 mt-2">{data.address}</p>
          <p className="text-gray-500 text-sm mt-2">
            Next Due Date: {data.next_due_date}
          </p>
          {data.deleted_at && (
            <p className="text-red-500 text-sm mt-2">
              Deleted at: {data.deleted_at}
            </p>
          )}
          <p
            className={`text-sm font-medium mt-2 ${
              data.status === 2 ? "text-green-500" : "text-gray-500"
            }`}
          >
            Status: {data.status === 2 ? "Active" : "Inactive"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default StudioCard;
