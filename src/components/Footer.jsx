import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4  text-center mt-10 font-mono ">
      <div className="container mx-auto flex text-right justify-between items-start ">
        <div>
          <div className="text-xl font-bold">فحلة.مقالات</div>
          <div>بوابتك لعالم المقالات في جميع الميادين</div>
        </div>
        <div>
          <div className="text-xl font-bold">روابط سريعة</div>
          <div>الرئيسية</div>
          <div>المقالات</div>
          <div>
            <Link to="/authors" className="hover:underline">
              المؤلفات
            </Link>
          </div>
          <div>من نحن</div>
        </div>
        <div>
          {" "}
          <div className="text-xl font-bold">الدعم</div> <div>الدعم</div>{" "}
          <div>اتصل بنا</div>
          <div>أسئلة شائعة</div>
          <div>سياسة الخصوصية</div>
          <div>شروط الخدمة</div>
        </div>
        <div>
          <div className="text-xl font-bold">تابعنا</div>
          <ul className="flex items-center gap-4 text-2xl">
            <li className="cursor-pointer ">
              <AiFillLinkedin />
            </li>
            <li className="cursor-pointer ">
              <AiFillYoutube />
            </li>
            <li className="cursor-pointer ">
              <AiFillGithub />
            </li>
          </ul>
        </div>
      </div>
      <div className="md:text-sm">
        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
