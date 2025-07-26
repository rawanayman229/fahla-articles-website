import { useParams } from "react-router-dom";
import author from "../assets/author.jpg";
import author2 from "../assets/author2.jpg";
import author3 from "../assets/author3.jpeg";

const authors = {
  "1": {
    name: "أمينة العروسي",
    title: "كاتبة في الفكر التربوي الإسلامي",
    description: "تهتم ببناء منظومات تربوية متزنة.",
    image: author,
    articles: [
      {
        title: "التربية الروحية في الإسلام",
        date: "2025-06-01",
        category: "التربية",
        slug: "spiritual-education"
      },
      {
        title: "الأسرة المسلمة وتحديات العصر",
        date: "2025-06-15",
        category: "الأسرة",
        slug: "muslim-family"
      }
    ]
  },
  "2": {
    name: "آية بن أحمد",
    title: "باحثة في الدراسات الإسلامية",
    description: "مهتم بالفكر الإسلامي المعاصر وتأصيل العلوم",
    image: author2,
    articles: [
      {
        title: "تجديد علم أصول الفقه",
        date: "2025-06-10",
        category: "الفقه وأصوله",
        slug: "tajdid-usul-fiqh"
      },
      {
        title: "الفكر المقاصدي في العصر الحديث",
        date: "2025-07-01",
        category: "الفكر الإسلامي",
        slug: "maqasid-modern"
      },
      {
        title: "العلمانية والحداثة من منظور إسلامي",
        date: "2025-07-15",
        category: "الحداثة والعقيدة",
        slug: "secularism-islamic-view"
      }
    ]
  },
  "3": {
    name: "ياسمين خليل",
    title: "أستاذة جامعية في العقيدة والفكر",
    description: "تسعى لربط التراث العقدي بالتحديات الفكرية المعاصرة.",
    image: author3,
    articles: [
      {
        title: "منهجية التعامل مع الشبهات الفكرية",
        date: "2025-07-05",
        category: "العقيدة والفكر",
        slug: "doubts-methodology"
      },
      {
        title: "العقيدة الوسطية ومكانتها",
        date: "2025-07-18",
        category: "العقيدة",
        slug: "wasatiyya-creed"
      }
    ]
  }
};

export default function AuthorProfile() {
  const { id } = useParams();
  const author = authors[id];

  if (!author) return <p className="text-center mt-10">المؤلفة غير موجود</p>;

  return (
    <div className="max-w-3xl mx-auto text-center p-6">
      <img
        src={author.image}
        alt={author.name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h2 className="text-2xl font-bold text-[#111827] ">{author.name}</h2>
      <p className="text-gray-700">{author.title}</p>
      <p className="text-gray-600 mb-6">{author.description}</p>

      <h3 className="text-xl font-bold text-[#4B5563] mb-4">مقالاتها</h3>

      <div className="space-y-4 text-right px-6">
        {author.articles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow p-4 rounded-lg border border-gray-200"
          >
            <a
              href={`/articles/${article.slug}`}
              className="text-lg font-semibold text-[#4B5563]  hover:underline"
            >
              {article.title}
            </a>
            <p className="text-sm text-gray-600 mt-1">
              📅 {article.date} | 🏷️ {article.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
