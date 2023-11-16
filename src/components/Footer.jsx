import Background from "../assets/background_image.jpg";
import Form from "../subComponents/Form";
import TimingComponent from "../subComponents/TimingComponent";
const Footer = () => {
  return (
    <div
      className=""
      style={{
        background: `url(${Background})`,
      }}
    >
      <footer className="footer bg-cover bg-center text-white py-8">
        <div className="flex  justify-center gap-3">
        <TimingComponent/>
          <Form />
          
        </div>
        <div className="container mx-auto text-center">
          <p className="text-lg">Developed By Abhishek Jain.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
