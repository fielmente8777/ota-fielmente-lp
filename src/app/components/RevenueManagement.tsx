import Container from "@/app/components/Container";
import Section from "@/app/components/Section";
import img1 from "../../../public/images/landingpage4/standard-quality-control.png";
import img2 from "../../../public/images/landingpage4/man-working.png";
import img3 from "../../../public/images/landingpage4/still-life.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const RevenueManagement = () => {
  return (
    <Section className="lg:py-10">
      <Container>
        <h2 className="lg:text-5xl text-3xl text-blue-sky font-bold lg:mb-8 mb-5">
          Revenue Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col group items-baseline gap-4 rounded-t-[3.1rem] overflow-hidden"
            >
              <div className="relative w-full h-[25rem] aspect-[4/1.7] overflow-hidden">
                <Image
                  src={item.src}
                  alt="avatar"
                  fill
                  priority={true}
                  className="object-contain w-full h-full hover:scale-105 transition duration-700 ease-in-out"
                />
              </div>
              <div className="flex flex-col h-[20rem] gap-4 justify-between">
                <h3 className="lg:text-3xl text-xl text-orange-primary capitalize font-bold">
                  {item.title}
                </h3>
                <p className="text-gray-primary text-lg">{item.description}</p>
                <Link
                  href="#"
                  className="text-blue-dark text-xl underline font-semibold"
                >
                  Request Demo &gt;
                </Link>
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
    src: img1,
    title: "Proven Expertise",
    description:
      "Our team brings extensive experience in revenue management, ensuring that your business capitalizes on every opportunity for growth.",
  },
  {
    src: img2,
    title: "Data-Driven Strategies",
    description:
      "We employ sophisticated analytics to understand market trends, demand patterns, and customer behaviour, allowing us to tailor strategies that align with your business objectives.",
  },
  {
    src: img3,
    title: "Customized Approach",
    description:
      "We employ sophisticated analytics to understand market trends, demand patterns, and customer behavior, allowing us to tailor strategies that align with your business objectives.",
  },
];
