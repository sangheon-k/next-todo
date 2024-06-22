"use client";

import React from "react";
import { BeatLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      <BeatLoader />
      <p>loading...</p>
    </div>
  );
};

export default loading;
