// Delete.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Delete() {
  const { id } = useParams();
  const [Delete, setDelete] = useState(null);

  useEffect(() => {
    axiosDelete();
  }, []);

  const axiosDelete = async () => {
    try {
      let response = await axios.delete(`https://dummyjson.com/products/${id}`);
      setDelete(response.data); // Örnek olarak response.data kullanıldı, gerçek veri yapısına göre ayarlamalar yapabilirsiniz
    } catch (error) {
      console.error("Error fetching Delete:", error);
    }
  };

  if (!Delete) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Succesfuly</h2>
      <h2>{Delete.title}</h2>
      <p>{Delete.description}</p>
    </div>
  );
}
