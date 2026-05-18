import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import CallToACtion from "@/components/home/calltoAction";
import BannerImage from "@/components/home/bannerImage";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <CallToACtion />
    </main>
  );
}