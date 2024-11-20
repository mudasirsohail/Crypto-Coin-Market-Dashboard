import Image from "next/image";
import CoinMarket from "./coin-market/page";

export default function Home() {
  return (
    <>
    <div className="Heading">
      <h1>Crypto Coin Market Dashboard</h1>
    </div>
    <CoinMarket/>
    </>
  );
}
