/* eslint-disable react/prop-types */
const Button = ({ title }) => {
  return (
    <div>
      <button style={{backgroundColor:"#C19F5C"}} className={` hover:bg-blue-700 text-white  py-2 px-4 rounded`}>
        {title}
      </button>
    </div>
  );
};

export default Button;
