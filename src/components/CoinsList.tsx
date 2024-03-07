import { useStore } from "../store";
import { observer } from "mobx-react-lite";
import { Link } from "wouter";
import styles from "./CoinsList.module.css";

const CoinsList = () => {
  const { coinsStore } = useStore();
  const { coins, loading, error } = coinsStore;

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return coins.map(([key, obj]) => {
    return (
      <div key={key} className={styles.listItem}>
        <Link to={`/coins/${key}`}>
          <strong>{key} </strong>
          {obj.usd?.rate}
        </Link>
      </div>
    );
  });
};

export default observer(CoinsList);
