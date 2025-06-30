import { ChooseUsType } from "@/@type/@type";
import { ChooseUsCard } from "@/components";
import SectionWithContainer from "@/components/SectionWithContainer";


const ChooseUs: React.FC<ChooseUsType> = ({ title, subTitle, cards }) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#F5F5F5]">
      <div className="flex flex-col items-center md:gap-8 gap-4">
        <div className="max-w-[44rem] mx-auto text-center space-y-2 poppins">
          <h2 className="bg-[#FFE7DE] uppercase text-orange-primary text-sm rounded-full px-4 w-fit mx-auto py-2">
            {title}
          </h2>

          <h3
            className="md:text-[2.5rem]/[3rem] text-2xl font-medium text-blue-dark"
            dangerouslySetInnerHTML={{ __html: subTitle }}
          />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
          {cards.map((item,index)=>(
            <ChooseUsCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ChooseUs;
