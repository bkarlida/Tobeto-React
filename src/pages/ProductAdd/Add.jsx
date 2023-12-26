import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Products/Products";

const Add = () => {
  const [addpost, setaddpost] = useState([]);

  useEffect(() => {
    axiosPost();
  }, []);

  const axiosPost = async () => {
    try {
        const response = await axios.post("https://dummyjson.com/products/add", {
        title: 'porsce',
        desription: 'araba',
      });
      console.log(response.data);

      setaddpost([...addpost, response.data]);
    } catch (error) {
      console.error('Error posting product:', error);
    }
  };

  return (
    <div className="container mt-0 mt-md-5">
        <Product addpost={addpost} />
    </div>
  );
};

export default Add;
