"use client"
import { ICategory } from "@/types/category.type";
import Image from "next/image";
import Link from "next/link";


type TProps = {
    category: ICategory;
}

const CategoryCard = ({ category }: TProps) => {
  return (
    <Link href={`/jobs-by-category/${category._id}`} className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="bg-white p-3 rounded-lg">
        <Image
          src={category.image}
          alt={`category_img`}
          width={80}
          height={80}
          className="w-8 h-8 object-contain"
        />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{category.name}</h3>
      </div>
    </Link>
  );
};
export default CategoryCard;
