import { RevenueManagementServicesType } from "@/@type/@type";

const RevenueServiceCard: React.FC<
  RevenueManagementServicesType["cards"][0]
> = ({ title, icon }) => {
    const splitTitle = title.split(" ");
    const showTitle = splitTitle.length > 2 ? splitTitle.join(" ") : `${splitTitle[0]} <br /> ${splitTitle[1]}`;
  return (
    <div className="flex flex-col items-center text-center gap-4 bg-white rounded-2xl md:w-full  px-4 py-6">
      <span className="">{icon}</span>
      <h3 className="text-[1.25rem] text-blue-dark" dangerouslySetInnerHTML={{ __html: showTitle }}></h3>
    </div>
  );
};

export default RevenueServiceCard;
