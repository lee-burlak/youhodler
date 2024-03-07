import { observer } from "mobx-react-lite";
import { useStore } from "../store";
import { ChangeEvent, useEffect } from "react";
import CoinsList from "../components/CoinsList.tsx";
import styles from "./Home.module.css";

const Home = () => {
  const { coinsStore } = useStore();
  //const { fetchCoins, search } = coinsStore;
  const { search } = coinsStore;

  useEffect(() => {
    // TODO 1: fetch coins
    // if we want to fetch data on every page load, we can use useEffect
    // fetchCoins()
  }, []);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    search({ name: input });
  };

  return (
    <div>
      <h1>Coins</h1>
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          Search
        </label>
        <input id="search" type="text" onChange={onChange} />
      </div>
      <CoinsList />
    </div>
  );
};

export default observer(Home);
