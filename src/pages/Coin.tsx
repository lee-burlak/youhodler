import { useParams } from "wouter";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";
import styles from "./Coin.module.css";

const Coin = () => {
  const { id } = useParams();
  const { coinsStore } = useStore();
  const { getCoin } = coinsStore;

  const { usd } = getCoin(id);

  return (
    <>
      <h1>Coin</h1>
      <h2 className={styles.header2}>{id}</h2>
      <div>
        <div className={styles.rateBlock}>
          <h4 className={styles.header4}>Medium price</h4>
          <div>{usd?.rate}</div>
        </div>
        <div className={styles.rateBlock}>
          <h4 className={styles.header4}>Ask price</h4>
          <div>{usd?.ask}</div>
        </div>
        <div className={styles.rateBlock}>
          <h4 className={styles.header4}>Bid price</h4>
          <div>{usd?.bid}</div>
        </div>
        <div className={styles.rateBlock}>
          <h4 className={styles.header4}>24 hours movement of the price</h4>
          <div>{usd?.diff24h}</div>
        </div>
      </div>
    </>
  );
};

export default observer(Coin);
