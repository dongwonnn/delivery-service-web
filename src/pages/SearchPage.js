import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './SearchPage.scss';
import axios from 'axios';
import Stores from '../compoentns/Stores';

const SearchPage = ({ categories }) => {
  const [inputValue, setInputValue] = useState('');
  const [stores, setStores] = useState([]);
  const [sortStores, setSortStores] = useState([]);

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
    if (inputValue !== '') {
      const valueLen = inputValue.length;

      const nextStores = stores.filter(
        (store) => store.name.substring(0, valueLen) === inputValue,
        // (name) => name.spilit('').substring(0, valueLen) === inputValue,
      );

      setSortStores(nextStores);
    }
  }, [inputValue]);

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  console.log(stores);

  return (
    <div className="searchPage">
      <div className="sp-header">
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          name="inputValue"
          value={inputValue}
          onChange={onChangeInput}
        />
        <BsSearch />
      </div>

      {inputValue === '' ? (
        <div className="sp-categories">
          {categories.map((ct) => (
            <div key={ct.name}>
              <div className="category-card">
                <div className="category-img"></div>
                <p className="category-text">{ct.text}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <Stores stores={sortStores} />
        </div>
      )}
    </div>
  );
};

export default SearchPage;
