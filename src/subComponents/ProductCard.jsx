/* eslint-disable react/prop-types */


const ProductCard = ({ price,title, description  }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
        <p className="mt-4 text-gray-600">${price}</p>
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <p className="mt-2 text-gray-500">{description}</p>
         
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
