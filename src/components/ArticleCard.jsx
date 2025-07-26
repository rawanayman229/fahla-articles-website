export default function ArticleCard({ title, description }) {
  return (
    <div className="border rounded-xl shadow p-4 hover:shadow-lg transition">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
