import axios from 'axios';

export const getStores = async () => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/stores');
      return response.data;
    } catch (e) {
      console.log(e);
      return;
    }
  };
  fetchData();
};
