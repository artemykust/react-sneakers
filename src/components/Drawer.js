function Drawer() {
  return(
    <div className="overlay" style={{ display: 'none' }}>
      <div className="drawer">
        <h2>
          Корзина
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
        </h2>
        <div className="items">
          <div className="cartItem">
            <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>
            <div className="cartItemInfo">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>₽12 999</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem">
            <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>
            <div className="cartItemInfo">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>₽12 999</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>₽21 498</b>
            </li>
            <li>
              <span>Налог 5%</span>
              <div></div>
              <b>₽1074</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;