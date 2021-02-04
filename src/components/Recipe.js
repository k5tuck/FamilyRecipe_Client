import React from "react";

export default function Recipe({ path, getDetails, recipedata }) {
  return (
    <div
      className="bg-gradient-to-br from-blue-100 via-red-200 to-blue-300 max-w-md rounded-lg overflow-hidden shadow-xl my-6 mx-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      key={recipedata.id}
      onClick={(e) => {
        console.log(`${recipedata.title} - ${recipedata.id}`);
        console.log(path);
        // Function that passes in recipedata.id
        getDetails(recipedata.id);
        // ---------------
      }}
    >
      <div>
        <div className="font-bold text-green-400 text-xl mb-2 text-center">
          {recipedata.title}
        </div>
        <img
          src={recipedata.image ? recipedata.image : ""}
          alt={recipedata.title}
          className="w-full"
        />
        {/* <img
          src="{data.image}"
          alt="{data.title}"
          className="w-full"
        /> */}
      </div>
      <div className="px-6 py-4">
        <ul>
          <li>
            <strong>Views: </strong>
            4000
          </li>
          <li>
            <strong>Likes: </strong>
            1200
          </li>
        </ul>
      </div>
      {/* <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 text-gray-700">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 text-gray-700">
          #tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 text-gray-700">
          #tag3
        </span>
      </div> */}
    </div>
  );
}
