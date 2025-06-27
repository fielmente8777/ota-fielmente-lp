import React from "react";

const Section = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?:string
}) => {
  return (
    <section className={`${className ? className : "lg:py-6"} py-6`} id={id}>
      {children}
    </section>
  );
};

export default Section;
