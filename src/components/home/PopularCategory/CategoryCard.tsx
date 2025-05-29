"use client"
import Image from "next/image";


type TProps = {
    icon: string;
    name: string;
    positions: number;
}

const CategoryCard = ({ icon, name, positions }: TProps) => {
  return (
    <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="bg-white p-3 rounded-lg">
        <Image
          src={icon}
          alt={`${name} Icon`}
          width={80}
          height={80}
          className="w-8 h-8 object-contain"
        />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{positions} Open positions</p>
      </div>
    </div>
  );
};
export default CategoryCard;
