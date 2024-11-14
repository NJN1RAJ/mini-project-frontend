import React from "react";

function Navbar() {
  return (
    <>
      <div className="font-bold flex justify-between p-5">
        <div className="cursor-pointer">Logo</div>
        <div className="h-10 w-10 cursor-pointer">
          <img
            className="rounded-full"
            src="https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
            alt="user image"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
