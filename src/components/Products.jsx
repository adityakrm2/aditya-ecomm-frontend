import { useEffect, useState } from "react";
import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://aditya-ecom.herokuapp.com/api/products?category=${cat}`  //  http://localhost:3000/products/dfasfas there needs some category here, since we have made no route on frontend to handle  http://localhost:3000/products/
            : "https://aditya-ecom.herokuapp.com/api/products"              //  http://localhost:3000/ here i home page there is no need for category
        );
        setProducts(res.data);
      } catch (err) { }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
          .slice(0, 8)
          .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;