const CryptoCoin = (props) => {
  const symbol = props.symbol;
  const rateUsd = props.rateUsd;
  console.log(props);
  // useEffect(() => {
  //   console.log("use effect ran");
  // }, []);
  return (
    <div className="crypto-coin-details">
      <table className="coin-details">
        <tbody>
          <tr>
            <th colSpan="2" className="text-center capitalize">
              {props.coin}
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
  );
};

export default CryptoCoin;
