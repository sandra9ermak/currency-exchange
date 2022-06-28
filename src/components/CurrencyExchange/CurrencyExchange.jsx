import s from "./CurrencyExchange.module.css";
// import swap from "../../images/right-arrow.png";
import { getUAHtoEUR, getUAHtoPLN, getUAHtoUSD } from "../../api";
import { UAHtoEURselector } from "../../redux/currency/currency-selectors";
import { UAHtoUSD } from "../../redux/currency/currency-selectors";
import { UAHtoPLN } from "../../redux/currency/currency-selectors";
import { error } from "../../redux/currency/currency-selectors";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const CurrencyExchange = () => {
  const [UAHtoUSD, setUAHtoUSD] = useState("");
  const [UAHtoEUR, setUAHtoEUR] = useState("");
  const [UAHtoPLN, setUAHtoPLN] = useState("");
  const [firstCurrencyUAH, setFirstCurrencyUAH] = useState("");
  const [exchangeResult, setExchangeResult] = useState("");
  const [currentCurrency, setCurrentCurrency] = useState("");

  const items = useSelector(UAHtoEURselector);
  console.log("items", items);

  useEffect(() => {
    getUAHtoEUR().then((results) => {
      setUAHtoEUR(results.result);
    });
    getUAHtoPLN().then((results) => {
      setUAHtoPLN(results.result);
    });
    getUAHtoUSD().then((results) => {
      setUAHtoUSD(results.result);
    });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstCurrencyUAH":
        setFirstCurrencyUAH(value);
        break;
      default:
        return;
    }
  };

  const formSubmit = (event) => {
    event.preventDefault();

    switch (currentCurrency) {
      case "usd":
        const resultUAHtoUSD = firstCurrencyUAH * UAHtoUSD;
        setExchangeResult(resultUAHtoUSD);
        console.log(resultUAHtoUSD);
        break;
      case "eur":
        const resultUAHtoEUR = firstCurrencyUAH * UAHtoEUR;
        setExchangeResult(resultUAHtoEUR);
        console.log(resultUAHtoEUR);
        break;
      case "pln":
        const resultUAHtoPLN = firstCurrencyUAH * UAHtoPLN;
        setExchangeResult(resultUAHtoPLN);
        console.log(resultUAHtoPLN);
        break;
      default:
        break;
    }
  };

  const currency = (e) => {
    console.log(e.currentTarget.id);
    setCurrentCurrency(e.currentTarget.id);
  };

  const inputEnter = (event) => {
    if (event.keyCode === 13) {
      console.log("currentCurrency", currentCurrency);
      console.log("firstCurrencyUAH", firstCurrencyUAH);
      switch (currentCurrency) {
        case "usd":
          const resultUAHtoUSD = firstCurrencyUAH * UAHtoUSD;
          setExchangeResult(resultUAHtoUSD);
          console.log(resultUAHtoUSD);
          break;
        case "eur":
          const resultUAHtoEUR = firstCurrencyUAH * UAHtoEUR;
          setExchangeResult(resultUAHtoEUR);
          console.log(resultUAHtoEUR);
          break;
        case "pln":
          const resultUAHtoPLN = firstCurrencyUAH * UAHtoPLN;
          setExchangeResult(resultUAHtoPLN);
          console.log(resultUAHtoPLN);
          break;
        default:
          break;
      }
    }
  };

  return (
    <main className={s.mainContent}>
      <div className={s.container}>
        <form className={s.form} onSubmit={formSubmit}>
          <label>
            <div className={s.currencyAction}>
              <p>Amount</p>
              <p>From</p>
            </div>
            <div className={s.inputFromContainer}>
              <input
                className={s.inputForm}
                placeholder="1.00"
                name="firstCurrencyUAH"
                value={firstCurrencyUAH}
                onChange={handleInputChange}
                onKeyDown={inputEnter}
                required
              />
              <p className={s.inputFromContainerText}>UAH</p>
            </div>
          </label>
          {/* <span className={s.spanArrow}>
            <img src={swap} alt="swap" width="20" height="20" />
          </span> */}
          <label className={s.secondLabel}>
            <div className={s.secondInput}>
              <p className={s.secondInputText}>To</p>
            </div>
            <Link
              exact
              to="/usd"
              className={s.Link}
              id="usd"
              onClick={currency}
            >
              USD
            </Link>
            <Link
              exact
              to="/eur"
              className={s.Link}
              id="eur"
              onClick={currency}
            >
              EUR
            </Link>
            <Link
              exact
              to="/pln"
              className={s.Link}
              id="pln"
              onClick={currency}
            >
              PLN
            </Link>
          </label>
          <button type="submit" className={s.btnSubmitForm}>
            Convert
          </button>
        </form>
        <p className={s.resultText}>
          RESULT: {Math.round(exchangeResult * 100) / 100}
        </p>
      </div>
    </main>
  );
};

export default CurrencyExchange;
