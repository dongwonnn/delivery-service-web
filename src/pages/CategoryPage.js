import React, { useEffect, useState } from 'react';
import Categories from '../compoentns/Categories';
import './CategoryPage.scss';
import axios from 'axios';
import Stores from '../compoentns/Stores';

const CategoryPage = ({ match, categories }) => {
  const { category } = match.params;
  const [stores, setStores] = useState([]);
  const [catStores, setCatStores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/stores');

        setStores(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const sortCat = stores.filter((store) => store.category === category);
    setCatStores(sortCat);
  }, [category, stores]);

  return (
    <div className="categoryPage">
      <h1>카테고리 페이지</h1>
      <Categories categories={categories} />
      <Stores stores={catStores} />
    </div>
  );
};

export default CategoryPage;
