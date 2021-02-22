import React from 'react';
import Stores from '../compoentns/Stores';
import { AiFillHeart } from 'react-icons/ai';

const FavoritePage = ({ user }) => {
  if (user.likesList.length === 0) {
    return (
      <div>
        <p>즐겨찾는 맛집이 없습니다.</p>
        <p>
          좋아하는 맛집에 <AiFillHeart />를 눌러주세요.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>즐겨찾기</h1>
      <p>총 {user.likesList.length}개</p>
      <Stores stores={user.likesList} />
    </div>
  );
};

export default FavoritePage;
