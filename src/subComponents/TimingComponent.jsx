import Button from "./Button";

const TimingComponent = () => {
  return (
    <div className="mt-8 w-96 h-50 ">
      <form className="flex items-center justify-center ">
        <div className="bg-gray-700 bg-opacity-80 p-4 rounded-md flex flex-col">
          <h3 className="Font-bold mb-4">Hours of Operations</h3>
          <p>Mon-Fri</p>
          <p>10:00 am to 1:00 pm</p>
          <p>4:00 pm to 10:00 pm</p>
          <div className="my-4 border-t border-yellow-300"></div>
          <p>Sat</p>
          <p>3:00 pm to 1:00 pm</p>
          <div className="my-4 border-t border-yellow-300"></div>
          <p>Sunday</p>
          <p>We are close</p>
          <Button title={"Make a Reservation"}/>
        </div>
      </form>
    </div>
  );
};

export default TimingComponent;
