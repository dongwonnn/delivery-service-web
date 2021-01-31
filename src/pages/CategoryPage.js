import React, { useCallback } from 'react';

const CategoryPage = ({ match, categories }) => {
  const { foodMenu } = match.params;

  return (
    <div>
      <h1>카테고리 페이지</h1>
      <p></p>
    </div>
  );
};

export default CategoryPage;
