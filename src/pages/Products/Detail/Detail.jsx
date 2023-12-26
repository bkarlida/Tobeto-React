// ProductDetail.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    axiosGet();
  }, []);

  const axiosGet = async () => {
    try {
      let response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProductDetail(response.data); // Örnek olarak response.data kullanıldı, gerçek veri yapısına göre ayarlamalar yapabilirsiniz
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  if (!productDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{productDetail.title}</h2>
      <p>{productDetail.description}</p>
      {/* Detay sayfasında diğer ürün detaylarını göstermek için gerekli HTML ve JSX */}
    </div>
  );
}
