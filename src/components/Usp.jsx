import Button from "../subComponents/Button";
const Usp = () => {
  return (
    <div  style={{
      backgroundColor:"#F7F7F7"
    }} className="bg-gray-500">
      <div className="h-custom-height bg-cover bg-center flex items-center justify-center ">
        <div className="text-center">
          <h1 className="text-4xl font-bold ">Fresh Ingredients,Tasty Meal</h1>
          <div className="text-lg ">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              recusandae ipsa pariatur architecto, quidem eligendi aliquid minus
              atque suscipit eius dicta et, temporibus distinctio incidunt non
              autem nostrum ut hic!
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 pb-3">
        <Button title={"view items"} bgColor={"bg-yellow-300"}/>
      </div>
    </div>
  );
};

export default Usp;
