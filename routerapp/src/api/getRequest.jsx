import axios from "axios";

export const GetProduct = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    if (response.status !== 200) {
      throw new Error("Error");
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const GetSingleProduct = async (id) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    if (response.status !== 200) {
      throw new Error("Error");
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error.message);
  }
};
