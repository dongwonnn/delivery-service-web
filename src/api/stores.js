import axios from 'axios';

export const getStores = async () => {
  const response = await axios.get('http://localhost:4000/stores');
  return response.data;
};

export const getCategory = async (id) => {
  const response = await axios.get('http://localhost:400/stores/${id}');
};
