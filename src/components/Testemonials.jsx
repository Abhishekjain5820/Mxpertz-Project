
import TestemonialsCard from "../subComponents/TestemonialsCard";

const Testimonial = () => {
  return (
    <div>
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Testimonials</h2>
          <h1 className="text-3xl font-semibold mb-8">
            What People are Saying
          </h1>
          <div className="flex">
            <TestemonialsCard
              title={"A Great Find"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
              tag={"Divi"}
            />
            <TestemonialsCard
              title={"A Great Find"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
              tag={"Bloom"}
            />
            <TestemonialsCard
              title={"A Great Find"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
              tag={"Extra"}
            />
            <TestemonialsCard
              title={"A Great Find"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
              tag={"Monarch"}
            />
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
