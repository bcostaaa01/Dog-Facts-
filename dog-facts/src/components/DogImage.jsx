import React, { useState, useEffect } from "react";
import { fetchImg } from "../services/fetchImg";

const DogImage = () => {
  const [image, setImage] = useState("");

  useEffect(() => {
    try {
      fetchImg()
        .then((response) => (response = response.data.url))
        .then((res) => setImage(res));
    } catch (err) {
      console.log(err);
    }
  }, [image]);

  return (
    <>
      <img src={image} alt="dog image" />
    </>
  );
};

export default DogImage;