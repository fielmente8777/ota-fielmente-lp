import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/images/landingPage/logo2.png";
import bannerImg from "../../../public/images/landingPage4/OBJECTS_.png";
import Container from "@/app/components/Container";
import {
  Airbnb,
  CallOrangeIcon,
  GoogleIcon,
  MailIcon,
  TrustPiolet,
} from "@/icons/icons";
import Form from "./Form";

const Banner: React.FC = () => {
  return (
    <header className="max-w-[1600px] mx-auto  lg:pb-14 pb-10 lg:pt-7 bg-blue-sky rounded-b-3xl">
      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 flex flex-col gap-4 max-md:pt-4">
          {/* <div className="w-full col-span-1">
            <Image src={bannerImg} alt="object" width={412} height={365} />
          </div> */}
          <div className="w-full flex justify-center lg:gap-14 gap-5 flex-col">
            <h1 className="text-white lg:text-6xl text-3xl font-bold mb-4 max-md:text-center">
              Fielmente - Leading Online Revenue Management Company
            </h1>
            <div className="flex md:flex-row flex-col md:items-center md:gap-8 gap-3">
              <p className="text-[18px] flex items-center gap-5">
                Best Reviews on :{" "}
                <span className="lg:block hidden">
                  <GoogleIcon />
                </span>
              </p>
              <div className="lg:block flex items-center gap-10 lg:ps-0 ps-5">
                <span className="block lg:hidden">
                  <GoogleIcon />
                </span>
                <span className="flex gap-10 items-center justify-center">
                  <TrustPiolet />
                  {/* <Airbnb /> */}
                </span>
              </div>
            </div>
            {/* <Link
              href="#ScheduleCall"
              className="flex items-center w-max text-blue-sky hover:bg-blue-sky/10 hover:text-white bg-white transition duration-300 ease-in-out border border-white rounded-full lg:text-xl text-[1rem] font-semibold button_box_shadow md:px-6 px-4 md:py-4 py-3"
            >
              Schedule Call
            </Link> */}
          </div>
          <div className="w-full flex justify-end items-center">
            <Form />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Banner;

{
  /* <div className="lg:grid lg:grid-cols-3 lg:gap-8 flex flex-col gap-4">
  <div className="w-full col-span-1">
    <Image src={bannerImg} alt="object" width={412} height={365} />
  </div>
  <div className="w-full flex justify-center items-center lg:gap-14 gap-5 flex-col col-span-2">
    <h1 className="text-white lg:text-6xl text-3xl font-bold mb-4 text-center">
      Fielmente- Leading Online Revenue Management
    </h1>
    <Link
      href="#ScheduleCall"
      className="flex items-center w-max text-blue-sky hover:bg-blue-sky/10 hover:text-white bg-white transition duration-300 ease-in-out border border-white rounded-full lg:text-xl text-[1rem] font-semibold button_box_shadow md:px-6 px-4 md:py-4 py-3"
    >
      Schedule Call
    </Link>
  </div>
</div>; */
}
