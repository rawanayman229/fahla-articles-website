// src/components/Header.jsx
import logo from "../assets/Fahla_logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#A7A9AB] text-[#111827] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Fahla Logo" className="w-16 h-16" />
          <h1 className="text-xl font-bold text-[#111827] ">فَحْلة.كوم</h1>
          <Link to="/authors" className="hover:underline">
            تسجيل دخول
          </Link>
        </div>
        <nav className="space-x-4 space-x-reverse">
          <Link to="/" className="hover:underline">
            الصفحة الرئيسية
          </Link>

          <Link to="/authors" className="hover:underline">
            المؤلفات
          </Link>
          <Link to="/" className="hover:underline">
            {" "}
            المقالات{" "}
          </Link>
          <Link to="/" className="hover:underline">
            من نحن{" "}
          </Link>
          <Link to="/" className="hover:underline">
            اتصل بنا{" "}
          </Link>
        </nav>
      </div>
    </header>
  );
}
