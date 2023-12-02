import React from "react";

const UserData = ({ data }) => {
  return <h2 className="text-2xl mb-5">Welcome, <span className="text-orange-600 font-semibold">{data}</span></h2>;
};

export default UserData;
