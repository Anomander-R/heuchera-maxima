const initialProduct = {
  name: "Salmon",
  price: 120,
  introText:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, deleniti!",
};

// eslint-disable-next-line react/prop-types
const Product = ({ product = initialProduct }) => {
  const { name, price, introText } = product;
  return (
    <div className="product-card">
      <div className="card">
        <img src={`/products/${name}.png`} alt={name} width={200} />
        <div className="info">
        <div className="price-name">
          <h3>{name}</h3>
          <span>{`$${price}`}</span>
        </div>
        <p>{introText}</p>
        <a href="" className="btn">
          Go Shop
        </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
