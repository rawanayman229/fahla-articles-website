import { useTranslation } from "react-i18next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authorsData } from "@/data/homePageData";

const OurAuthors = () => {
    const { t } = useTranslation();
    return (
        <section className="mt-7 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">{t('ourAuthors.title')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {authorsData.map((author) => (
                        <div key={author.id} className="bg-[#edeeee] border-1 border-[#c9cece] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                            <Avatar className="w-24 h-24 mb-4">
                                <AvatarImage src={author.image} alt={t(`authors.${author.id}.name`)} />
                                <AvatarFallback>{author.fallback}</AvatarFallback>
                            </Avatar>

                            <h3 className="text-xl font-semibold">{t(`authors.${author.id}.name`)}</h3>
                            <p className="text-gray-500">{t(`authors.${author.id}.role`)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurAuthors;