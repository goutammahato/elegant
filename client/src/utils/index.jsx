import axios from "axios";

const productionUrl = "https://threelegant-htt3.onrender.com/api/v1/";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (num) => {
  const curr = num.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
  return curr;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
