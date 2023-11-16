import Button from "../subComponents/Button";
import Background from '../assets/background_image.jpg'

const Hero = () => {
  return (
    <div
      className=""
      style={{
        background: `url(${Background})`,
      }}
    >
      <div className="h-screen bg-cover bg-center flex items-center justify-center text-white ">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-3">Only Quality Food</h1>
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
        <Button title={"View More"} />
        <Button title={"Reservation"} />
      </div>
    </div>
  );
};

export default Hero;
