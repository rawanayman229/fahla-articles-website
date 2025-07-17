import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { latestArticlesData } from "../data/homePageData";

const LatestArticles = () => {
  const { t } = useTranslation();

  return (
    <section className="m-7">
      <h2 className="text-3xl font-bold text-center mt-10 mb-8">
        {t("latestArticles.title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {latestArticlesData.map((article) => (
          <Card key={article.id} className="overflow-hidden bg-[#edeeee] flex flex-col">
            <img
              src={article.image}
              alt={t(`articles.${article.id}.title`)}
              className="w-full h-45 object-cover"
            />
            <CardHeader>
              <CardTitle>{t(`articles.${article.id}.title`)}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600">
                {t(`articles.${article.id}.description`)}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-gray-400">☆☆☆</span>
              </div>
              <a
                className="mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-[#bfd2fa] px-6 py-3 text-base font-bold text-[#2563EB] hover:text-white hover:bg-[#2b305c] cursor-pointer"
                variant="outline"
              >
                {t("buttons.translate")}
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          className="mt-5 inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-[#2563EB] px-6 py-3 text-base font-bold text-white hover:bg-[#2b305c] cursor-pointer"
          href="#"
        >
          {t("buttons.seeAllLatest")}
        </a>
      </div>
    </section>
  );
};

export default LatestArticles;
