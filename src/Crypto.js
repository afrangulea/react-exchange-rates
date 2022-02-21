import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CryptoCoin from "./CryptoCoin";

const Crypto = () => {
  //API Call
  let getCoinInfo = async (coin) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let base = `https://api.coincap.io/v2/rates/${coin}`;
    let response = await fetch(base, requestOptions);
    let data = await response.json();
    return data;
  };

  //Get clicked coin value
  let [coin, setCoin] = useState("Select Coin");
  let [rateUsd, setRate] = useState("-");
  let [symbol, setSymbol] = useState("-");
  //On coin name click set coin name and handle API Call result
  const handleClick = (coin, e) => {
    setCoin(coin);

    getCoinInfo(coin)
      .then((data) => {
        symbol = setSymbol(data.data.symbol);
        rateUsd = setRate(data.data.rateUsd);

        console.log(
          `${coin} (${symbol}) is currently valued at ${rateUsd} US dollars`
        );
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    console.log("use effect ran");
  }, []);

  return (
    <div>
      <ul className="coinsList">
        <h4>Please click on currencies to see exchange rates</h4>

        <li>
          <Link
            to="react-exchange-rates/crypto"
            onClick={(e) => handleClick("bitcoin")}
          >
            Bitcoin
          </Link>
        </li>
        <li>
          <Link to="/crypto" onClick={(e) => handleClick("ethereum")}>
            Ethereun
          </Link>
        </li>
        <li>
          <Link to="/crypto" onClick={(e) => handleClick("tether")}>
            Tether
          </Link>
        </li>
      </ul>

      <div className="crypto-coin-details">
        <table className="coin-details">
          <tbody>
            <tr>
              <th colSpan="2" className="text-center capitalize">
                {coin}
              </th>
            </tr>
            <tr>
              <td>USD Value</td>
              <td>{rateUsd}</td>
            </tr>
            <tr>
              <td>Symbol</td>
              <td>{symbol}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <CryptoCoin name={"ceva"} symbol={symbol} rateUsd={rateUsd} coin={coin} /> */}
    </div>
  );
};

export default Crypto;
