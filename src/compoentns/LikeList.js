import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const LikeList = ({ user, store, detailItem }) => {
  const [like, setLike] = useState(false);

  console.log(detailItem);

  //사용자가 이 store에 like를 눌렀는지 체크
  useEffect(() => {
    const hasUserLikedStore = !!user.likesList.find(
      (list) => list.name === store,
    );

    setLike(hasUserLikedStore);
  }, [store, user.likesList]);

  const onLikeBtn = () => {
    setLike(!like);
    const nextLike = !like;

    if (nextLike) {
      user.likesList.push(detailItem);
    } else {
      user.likesList = user.likesList.filter((list) => list.name !== store);
    }
  };

  return (
    <div>
      <div onClick={onLikeBtn}>
        {like ? <AiFillHeart /> : <AiOutlineHeart />}
      </div>
    </div>
  );
};

export default LikeList;
