import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products page</h1>
      <ul>
        <Link to="/products/a-book">A Book</Link>
        <Link to="/products/a-carpet">A Carpet</Link>
        <Link to="/products/an-online-course">An Online Course</Link>
      </ul>
    </section>
  );
};

export default Products;
