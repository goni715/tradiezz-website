import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}


const SectionTitle: React.FC<SectionTitleProps> = ({title, subtitle}) => {
  return (
    <>
    <div className="mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-500">{subtitle}</p>
    </div>
    </>
  )
}

export default SectionTitle