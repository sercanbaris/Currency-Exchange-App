import { useState, useEffect } from "react";
import "./doviz.css";
import { LiaExchangeAltSolid } from "react-icons/lia";
import axios from "axios";

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest?apikey=";
const API_KEY = "fca_live_TCAJM3kEMY5imiJZ9ffOgPYJ0spYLg4F8HjYKOH9";

export default function index() {
  const [fromDoviz, setFromDoviz] = useState("1");
  const [toDoviz, setToDoviz] = useState(0);
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [toBaseCurrency, setToBaseCurrency] = useState("TRY");
  const [buttonTrigger, setButtonTrigger] = useState(false);

  useEffect(() => {
    if (buttonTrigger == true) {
      const exchange = async () => {
        const response = await axios.get(
          `${BASE_URL}${API_KEY}&base_currency=${baseCurrency}`
        );
        const result = (response.data.data[toBaseCurrency] * fromDoviz).toFixed(
          2
        );
        setToDoviz(result);
      };

      console.log("Tetiklendi");
      exchange();
      setButtonTrigger(false);
    }
  }, [buttonTrigger]);

  return (
    <div>
      <h2>Currency App</h2>

      <div className="containerX">
        <input
          className="inputsu"
          type="number"
          value={fromDoviz}
          onChange={(e) => {
            setFromDoviz(e.target.value);
          }}
        />
        <select
          className="doviz"
          onChange={(e) => {
            setBaseCurrency(e.target.value);
          }}
        >
          <option>USD</option>
          <option>TRY</option>
          <option>EUR</option>
        </select>

        <button
          className="dugme"
          value="{buttonTrigger}"
          onClick={() => setButtonTrigger(true)}
        >
          <LiaExchangeAltSolid />
        </button>

        <input type="text" value={toDoviz} className="inputsu" readOnly />

        <select
          className="doviz"
          onChange={(e) => {
            setToBaseCurrency(e.target.value);
          }}
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
      </div>
    </div>
  );
}
