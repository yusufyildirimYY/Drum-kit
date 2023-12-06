import React from "react";
const card = ({ id, name, email, username }) => {
  return (
    <div className="bg-blue-400 border-blue-700 rounded-2xl inline-block  p-3 m-2 transition duration-200 ease-in-out delay-100 hover:scale-105 border-2 shadow-md text-center">
      <img src={`https://robohash.org/${id}?size=400x400`} alt="robots" />
      <div>
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-sm">{email}</p>
      </div>
    </div>
  );
};

export default card;
