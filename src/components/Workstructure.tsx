import Container from "@/components/Container";
import Section from "@/components/Section";
import { GreenCircleIcon } from "@/icons/icons";

const Workstructure = () => {
  return (
    <Section className="lg:py-10">
      <Container>
        <div className="max-w-6xl mx-auto shadow-md bg-[#F2F2F2]  rounded-2xl">
          <div className="lg:px-[3.75rem] lg:py-12 p-4">
            <h2 className="md:text-3xl text-xl text-black font-semibold lg:mb-7 mb-5">
              We work on{" "}
              <span className="text-orange-primary">fixed fee structure</span>{" "}
              only!
            </h2>
            <ul className="flex flex-col gap-5">
              {data.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3  line-through text-gray-primary "
                >
                  <span className=""><GreenCircleIcon /></span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Workstructure;

const data = ["No Commission", "No Hidden charges", "No setup cost"];
