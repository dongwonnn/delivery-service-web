import React, { useEffect, useState } from 'react';
import Categories from '../compoentns/Categories';
import './CategoryPage.scss';
import Stores from '../compoentns/Stores';

const CategoryPage = ({ match, categories, stores }) => {
  const { category } = match.params;
  const [catStores, setCatStores] = useState([]);

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
