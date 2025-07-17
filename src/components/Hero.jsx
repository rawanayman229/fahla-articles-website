import { useTranslation } from "react-i18next";

const Hero = () => {
const { t } = useTranslation();

  return (
    <section className="bg-blue-100 py-20 px-4 rounded-3xl m-7">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2563EB]">
          {t('hero.title')}
        </h1>
        <p className="mt-7 text-lg text-[#2563EB] max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <a className="mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-[#2563EB] px-6 py-3 text-base font-bold text-white hover:bg-[#2b305c] cursor-pointer"
        href="#">
          {t('hero.button')}
        </a>
      </div>
    </section>
  );
};

export default Hero;