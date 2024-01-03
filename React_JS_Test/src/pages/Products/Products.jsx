import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Products({ addpost }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Ürünleri çek
    axiosGet();
  }, [addpost]);

  const axiosGet = async () => {
    try {
      // Ürünleri getir
      let response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
      console.log(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Yeni eklenen ürünü products state'ine ekle
  useEffect(() => {
    if (addpost) {
      setProducts((prevProducts) => [...prevProducts, addpost]);
    }
  }, [addpost]);
  console.log(products.length);
  return (
    <div className="container mt-0 mt-md-5">
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
