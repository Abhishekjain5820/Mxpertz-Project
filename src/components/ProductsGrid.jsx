import ProductCard from "../subComponents/ProductCard";
import Product1 from '../assets/Product1.jpg'


const ProductsGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <ProductCard price={26.95} title={"Stwawberry Pestry"}  description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}/>
      <img src={Product1} alt="Side Image" className="" />
      <ProductCard price={26.95} title={"Stwawberry Pestry"}  description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}/>
      <img src={Product1} alt="Side Image" className="" />
      <ProductCard price={26.95} title={"Stwawberry Pestry"}  description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}/>
      <img src={Product1} alt="Side Image" className="" />
      <ProductCard price={26.95} title={"Stwawberry Pestry"}  description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}/>
      <img src={Product1} alt="Side Image" className="" />
      <ProductCard price={26.95} title={"Stwawberry Pestry"}  description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}/>
      <img src={Product1} alt="Side Image" className="" />
      <ProductCard price={26.95} title={"Stwawberry Pestry"}  description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}/>
      <img src={Product1} alt="Side Image" className="" />



    </div>
  );
};

export default ProductsGrid;
