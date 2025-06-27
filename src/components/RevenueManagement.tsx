import Container from "@/components/Container";
import Section from "@/components/Section";
import Image, { StaticImageData } from "next/image";

const RevenueManagement = () => {
  return (
    <Section className="lg:py-10">
      <Container>
        <h2 className="lg:text-5xl text-3xl text-blue-sky font-bold lg:mb-8 mb-5">
          Revenue Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col group items-baseline gap-4 rounded-t-[3.1rem] overflow-hidden"
            >
              <div className="relative w-full lg:h-[25rem] aspect-[4/2.43] overflow-hidden">
                <Image
                  src={item.src}
                  alt="avatar"
                  fill
                  priority={true}
                  className="object-contain w-full h-full hover:scale-105 transition duration-700 ease-in-out"
                />
              </div>
              <div className="flex flex-col pb-5 gap-4 justify-between">
                <h3 className="lg:text-3xl text-xl text-orange-primary capitalize font-bold">
                  {item.title}
                </h3>
                <p className="text-gray-primary text-lg">{item.description}</p>
                {/* <Link
                  href="#"
                  className="text-blue-dark text-xl underline font-semibold"
                >
                  Request Demo &gt;
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default RevenueManagement;

interface cardDataType {
  src: string | StaticImageData;
  title: string;
  description: string;
}

const data: cardDataType[] = [
  {
    src: '/images/landingpage4/standard-quality-control.png',
    title: "Proven Expertise",
    description:
      "Our team brings extensive experience in revenue management, ensuring that your business capitalizes on every opportunity for growth.",
  },
  {
    src: '/images/landingpage4/man-working.png',
    title: "Data-Driven Strategies",
    description:
      "We employ sophisticated analytics to understand market trends, demand patterns, and customer behaviour, allowing us to tailor strategies that align with your business objectives.",
  },
  {
    src: '/images/landingpage4/still-life.png',
    title: "Customized Approach",
    description:
      "We employ sophisticated analytics to understand market trends, demand patterns, and customer behavior, allowing us to tailor strategies that align with your business objectives.",
  },
];
