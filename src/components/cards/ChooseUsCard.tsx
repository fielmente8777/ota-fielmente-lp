import { ChooseUsType } from "@/@type/@type";

const ChooseUsCard: React.FC<ChooseUsType["cards"][0]> = ({
  icon,
  title,
  description,
  index,
}) => {
  return (
    <div className="border border-orange-primary rounded-2xl shadow-md p-6 flex flex-col gap-4">
      <div className={`${index === 0 ? "bg-[#F26633]" : index === 1 ? "bg-[#F2B203]" :  "bg-blue-dark"} w-20 p-2 aspect-square rounded-full flex items-center justify-center`}>{icon}</div>
      <div className="space-y-2">
        <h3 className="text-2xl md:text-[2rem]/[2.8rem] font-medium poppins text-blue-dark">{title}</h3>
        <p className="text-base text-[#797979]">{description}</p>
      </div>
    </div>
  );
};

export default ChooseUsCard;
