import imageUrl from "../assets/about_image.jpg"
const About = () => {
  return (
    <div className="flex">
      {/* Content Side */}
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600">Welcome To Royal</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem recusandae doloremque distinctio at laboriosam eligendi, consectetur enim dolore, id soluta nobis asperiores. Molestias tempore aliquid distinctio quis, doloribus pariatur modi itaque a ullam at hic nemo, esse laboriosam voluptates sunt neque repellat adipisci voluptatem numquam libero error, animi quod eius?</p>
      </div>

      {/* Image Side */}
      <div className="flex-1 bg-gray-500 p-4">
        <img src={imageUrl} alt="Side Image" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default About;
