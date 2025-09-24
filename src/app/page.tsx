import BannerSlider from "@/components/homeContents/bannerSlider";
import ReasonGrid from "@/components/homeContents/whyChooseUs";

export default function Home() {
  return (
    <div>
      <div className="max-w-7xl mx-auto p-4">
        <div className="text-center mb-8">
          <BannerSlider/> 
        </div>
        <div>
          <ReasonGrid/>
        </div>
      </div>
    </div>
  );
}
