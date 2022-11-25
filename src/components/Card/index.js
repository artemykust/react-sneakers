import styles from "./Card.module.scss";
import React from "react";

function Card({ title, price, imageUrl, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className={styles.cardBottom}>
        <div>
          <span>Цена:</span>
          <b>₽{price}</b>
        </div>
        <img
          className={styles.plus}
          src={isAdded ? "/img/btn-cheked.svg" : "/img/btn-plus.svg"}
          alt="Plus"
          onClick={onClickPlus}
        />
      </div>
    </div>
  );
}

export default Card;
