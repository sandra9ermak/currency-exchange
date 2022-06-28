import axios from "axios";

axios.defaults.baseURL = "https://api.exchangerate.host/";

export const getUAHtoEUR = () => {
  axios
    .get(`convert?from=UAH&to=EUR`)
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};

export const getUAHtoUSD = () => {
  axios
    .get(`convert?from=UAH&to=USD`)
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};

export const getUAHtoPLN = () => {
  axios
    .get(`convert?from=UAH&to=PLN`)
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};
