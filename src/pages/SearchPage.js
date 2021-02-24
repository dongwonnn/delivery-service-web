import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import './SearchPage.scss';
import Stores from '../compoentns/Stores';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from '../compoentns/Navigation';

const SearchPage = ({ categories, stores }) => {
  const [inputValue, setInputValue] = useState('');
  const [sortStores, setSortStores] = useState([]);

  useEffect(() => {
    if (inputValue !== '') {
      const valueLen = inputValue.length;

      const nextStores = stores.filter(
        (store) => store.name.substring(0, valueLen) === inputValue,
      );

      setSortStores(nextStores);
    }
  }, [inputValue, stores]);

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Container className="searchPage">
      <Row>
        <Navigation />
      </Row>
      <Row>
        <Col>
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
        </Col>
      </Row>
      <Row>
        <Col>
          {inputValue === '' ? (
            <div className="sp-categories">
              {categories.map((cat) => (
                <div className="category-card" key={cat.name}>
                  <Link to={`/category/${cat.text}`}>
                    <div className="category-img"></div>
                    <p className="category-text">{cat.text}</p>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <Stores stores={sortStores} />
            </div>
          )}
        </Col>
      </Row>
    </Container>

    // <div className="searchPage">
    //   <div className="sp-header">
    //     <input
    //       type="text"
    //       placeholder="검색어를 입력하세요."
    //       name="inputValue"
    //       value={inputValue}
    //       onChange={onChangeInput}
    //     />
    //     <BsSearch />
    //   </div>

    //   {inputValue === '' ? (
    //     <div className="sp-categories">
    //       {categories.map((cat) => (
    //         <Link to={`/category/${cat.text}`} key={cat.name}>
    //           <div key={cat.name}>
    //             <div className="category-card">
    //               <div className="category-img"></div>
    //               <p className="category-text">{cat.text}</p>
    //             </div>
    //           </div>
    //         </Link>
    //       ))}
    //     </div>
    //   ) : (
    //     <div>
    //       <Stores stores={sortStores} />
    //     </div>
    //   )}
    // </div>
  );
};

export default SearchPage;
