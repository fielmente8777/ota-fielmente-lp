import Container from "@/components/Container";
import Section from "@/components/Section";
import Image from "next/image";
import { GreenCircleIcon } from "@/icons/icons";

const Supercharge = () => {
  return (
    <Section className="lg:py-10">
      <Container>
        <div className="flex justify-center items-center flex-col mb-8">
          <div>
            <Image src={'/images/landingpage4/fast-charge.png'} alt="alt" width={58} height={58} />
          </div>
          <h2 className="md:text-4xl text-lg text-black font-semibold text-center">
            Let’s Supercharge your <br />{" "}
            <span className="text-blue-sky">Hotel Revenue</span>
          </h2>
        </div>
        <div className="flex flex-col bg-[#4f4f4f]/5 rounded-2xl lg:p-10 p-5 gap-4">
          <h2 className="md:text-3xl text-2xl text-black font-semibold lg:mb-7 mb-5">
            We are the only Revenue Management Company with a team of <br className="lg:block hidden" />{" "}
            <span className="text-blue-sky">Industry Experts</span>
          </h2>
          {data.map((item, index) => (
            <p
              className="text-lg text-gray-primary flex gap-3"
              key={index}
            >
              <span className="mt-1 w-max"><GreenCircleIcon /></span> {item}</p>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Supercharge;

const data = [
  "We’ve built a Hotel Chain",
  "We know how to maximize",
  "Experience of over 15 yrs in the field of revenue management",
];
