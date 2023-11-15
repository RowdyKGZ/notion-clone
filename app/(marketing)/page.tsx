import { Footer } from "./_components/Footer";
import { Heading } from "./_components/Heading";
import { Heroes } from "./_components/Heroes";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col justify-center items-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 dark:bg-[#1f1f1f]">
        <Heading />
        <Heroes />
      </div>

      <Footer />
    </div>
  );
};

export default MarketingPage;
