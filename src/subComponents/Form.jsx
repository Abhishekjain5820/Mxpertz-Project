import Button from "./Button";

const Form = () => {
  return (
    <div className="mt-8 w-96 h-50">
      <div className="flex items-center justify-center ">
        <div className="bg-gray-700 bg-opacity-80 p-4 rounded-md flex flex-col">
          <h3>Drop us a Line</h3>
          <p>{"Don't be shy.Let us know if you have any question"}</p>
          <Button title={"Contact Us"}/>
          <input
            type="text"
            placeholder="Enter your First name"
            className="bg-transparent border-b border-white text-white p-2 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Enter your Last Name"
            className="bg-transparent border-b border-white text-white p-2 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent border-b border-white text-white p-2 focus:outline-none"
          />
          <button
            type="submit"
            className="  px-4 py-2 ml-2 rounded-md mt-2"
            style={{backgroundColor:"#C19F5C"}}
          >
            
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
