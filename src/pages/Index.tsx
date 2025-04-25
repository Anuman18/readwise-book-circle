
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BookRecommendation from "@/components/BookRecommendation";
import StorySection from "@/components/StorySection";
import MembershipSection from "@/components/MembershipSection";
import LeaderboardSection from "@/components/LeaderboardSection";
import ContestsSection from "@/components/ContestsSection";
import BookSummarySection from "@/components/BookSummarySection";
import MegavotesSection from "@/components/MegavotesSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BookRecommendation />
        <StorySection />
        <BookSummarySection />
        <ContestsSection />
        <MegavotesSection />
        <LeaderboardSection />
        <MembershipSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
