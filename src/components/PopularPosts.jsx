import { useTranslation } from "react-i18next";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { popularPostsData } from "@/data/homePageData";

const PopularPosts = () => {
    const { t } = useTranslation();
    return (
        <section className="m-7">
            <h2 className="text-3xl font-bold text-center mb-8">{t('popularPosts.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {popularPostsData.map((post) => (
                    <Card key={post.id} className="overflow-hidden bg-[#edeeee]">
                        <img src={post.image} alt={t(`posts.${post.id}.title`)} className="w-full h-48 object-cover" />
                        <CardHeader>
                            <CardTitle>{t(`posts.${post.id}.title`)}</CardTitle>
                            <CardDescription>{t(`posts.${post.id}.author`)}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default PopularPosts;