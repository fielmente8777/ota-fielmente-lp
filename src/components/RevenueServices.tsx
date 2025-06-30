import Container from "@/components/Container";
import Section from "@/components/Section";

const RevenueServices = () => {
  return (
    <Section className="lg:py-10 ">
      <Container>
        <div className="lg:mb-10 mb-5">
          <h2 className="lg:text-5xl text-3xl font-semibold text-blue-sky text-center">
            Revenue Management Services
          </h2>
        </div>
        <ul className="grid lg:grid-cols-4 grid-cols-1 lg:gap-8 gap-1 ps-6">
          {data.map((item, index) => (
            <li key={index} className="text-lg font-medium text-[#4F4F4F]  list-disc">
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default RevenueServices;

const data = [
  "Experienced Revenue Manager",
  "Competitor Analysis",
  "Advanced Analytics",
  "Channel Optimization",
  "Inventory & Rate Parity across OTA",
  "Comparison & Performance Report",
  "Demand Forecasting",
  "Competitive Analysis",
  "Dynamic Pricing",
  "Monthly Meeting",
  "Competitive Analysis",
  "Promotional Strategies",
  "Competitor Analysis",
  "Invoicing Management",
  "Market Segmentation",
];
