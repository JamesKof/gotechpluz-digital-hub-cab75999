import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PriceEstimator from "@/components/PriceEstimator";
import { usePageSEO } from "@/hooks/use-page-seo";

const PriceEstimatorPage = () => {
  usePageSEO({
    title: "Price Estimator | Gotechpluz - Get an Instant Website Quote",
    description:
      "Use our interactive price estimator to get an instant quote for your website project. Choose packages, add features, and share your estimate via WhatsApp.",
    canonical: "/price-estimator",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-28 pb-20 px-4 sm:px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Price Estimator
          </h1>
          <p className="text-muted-foreground">
            Get an instant estimate for your project. Customize your package, add features, 
            and share the quote with us on WhatsApp.
          </p>
        </div>
        <PriceEstimator />
      </main>
      <Footer />
    </div>
  );
};

export default PriceEstimatorPage;
