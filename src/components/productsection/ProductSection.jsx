import Product from "../product/Product";

/* eslint-disable react/prop-types */
const ProductSection = ({products}) => {
  return (
    <>
    <section className="products" id="products">
        <h2>Our Products</h2>
        <div className="product-card">
        {products.map((item) => {
          return(<Product product={item} key={item.name} />);
        })}</div>
      </section>
    </>
  )
}

export default ProductSection