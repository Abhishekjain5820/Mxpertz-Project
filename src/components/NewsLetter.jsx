import Button from "../subComponents/Button";
import NewsAndEventCard from "../subComponents/NewsAndEventCard";

const NewsLetter = () => {
  return (
    <div>
      <section
        style={{
          backgroundColor: "#F7F7F7",
        }}
        className="bg-gray-100 py-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">{"Don't Miss"}</h2>
          <h1 className="text-3xl font-semibold mb-8">Our News and Events</h1>
          <div className="flex">
            <NewsAndEventCard />
            <NewsAndEventCard />
            <NewsAndEventCard />
          </div>
          <Button title={"Read More"} bgColor={"bg-yellow-300"}/>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
