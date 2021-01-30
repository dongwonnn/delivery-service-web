import React, { useEffect } from 'react';

const CategoryPage = ({ match, categories }) => {
  const { foodMenu } = match.params;

  //findIdx

  useEffect(() => {
    const idx = categories.findIndex((el) => el.name === foodMenu);
  }, []);

  return (
    <div>
      <h1>카테고리 페이지</h1>
      <p>{console.log(categories[idx].text)}</p>
    </div>
  );
};

export default CategoryPage;
