/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";

const TestemonialsCard = ({ title, description, tag }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="flex">
          {Array(5)
            .fill()
            .map((_, i) => (
              <div key={i}>
                <AiFillStar className="star" color="#ffc107" size={25} />
              </div>
            ))}

          </div>
        

          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <p className="mt-2 text-gray-500">{description}</p>
          <p className="mt-2 text-gray-500">{tag}</p>
        </div>
      </div>
    </div>
  );
};

export default TestemonialsCard;
