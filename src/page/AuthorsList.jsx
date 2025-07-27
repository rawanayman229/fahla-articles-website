// src/pages/Authors.jsx
import React from "react";
import author from "../assets/author.jpg";
import author2 from "../assets/author2.jpg";
import author3 from "../assets/author3.jpeg";


const authors = [
  { id:1,
    name: "أمينة العروسي",
    title: "كاتبة في الفكر التربوي الإسلامي",
    image: author,
    description: "متخصصة في تدريس النحو والبلاغة للمرحلة الثانوية",
  },
  {
    id:2,
    name: "آية بن أحمد",
    title: "باحثة في الدراسات الإسلامية",
    image: author2,
    description: "مهتم بالفكر الإسلامي المعاصر وتأصيل العلوم.",
  },
  {
    id:3,
     name: "ياسمين خليل",
    title: "أستاذة جامعية في العقيدة والفكر",
    image: author3,
    description: "تصمم محتوى بصري تعليمي موجه للأطفال واليافعي",
  },
];

import { Link } from "react-router-dom";

export default function Authors() {
  return (
    <div className="container mx-auto py-12 px-4 text-right">
      <h1 className="text-3xl font-bold text-[#111827]  mb-8">المؤلفات</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {authors.map((author, index) => (
          <Link
            to={`/author/${author.id}`}
            key={index}
            className=" rounded-2xl bg-gray-300 shadow-md p-6 hover:shadow-lg transition duration-300 block"
          >
            <img
              src={author.image}
              alt={author.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-[#111827] text-center">{author.name}</h2>
            <p className="text-sm text-[#4B5563]  text-center mb-2">{author.title}</p>
            <p className="text-sm text-[#6B7280] text-center">{author.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
