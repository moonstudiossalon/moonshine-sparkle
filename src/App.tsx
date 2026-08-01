import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnalyticsTracker from "./components/AnalyticsTracker";

// Route-based code splitting — each page is loaded on demand
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const Offers = lazy(() => import("./pages/Offers"));
const NotFound = lazy(() => import("./pages/NotFound"));
const NanoplastiaAndheriEast = lazy(() => import("./pages/NanoplastiaAndheriEast"));
const BalayageSalonAndheri = lazy(() => import("./pages/BalayageSalonAndheri"));
const FamilySalonMarolMumbai = lazy(() => import("./pages/FamilySalonMarolMumbai"));
const ManicurePedicureMumbai = lazy(() => import("./pages/ManicurePedicureMumbai"));
const BestSalonAndheriEast = lazy(() => import("./pages/BestSalonAndheriEast"));
const HydraMediFacialAndheriEast = lazy(() => import("./pages/HydraMediFacialAndheriEast"));
const OlaplexHairTreatmentAndheriEast = lazy(() => import("./pages/OlaplexHairTreatmentAndheriEast"));
const SalonNearPowai = lazy(() => import("./pages/SalonNearPowai"));
const SalonNearGhatkopar = lazy(() => import("./pages/SalonNearGhatkopar"));
const SalonNearKurla = lazy(() => import("./pages/SalonNearKurla"));
const VeganFacialAndheriEast = lazy(() => import("./pages/VeganFacialAndheriEast"));
const DermaGlowFacialAndheriEast = lazy(() => import("./pages/DermaGlowFacialAndheriEast"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NanoplastiaVsKeratin = lazy(() => import("./pages/NanoplastiaVsKeratin"));
const HowLongBalayageLasts = lazy(() => import("./pages/HowLongBalayageLasts"));
const HairSpaBenefits = lazy(() => import("./pages/HairSpaBenefits"));
const AftercareColouredHair = lazy(() => import("./pages/AftercareColouredHair"));
const PrepFirstFacial = lazy(() => import("./pages/PrepFirstFacial"));
const WhyRicaWax = lazy(() => import("./pages/WhyRicaWax"));
const HaircutForWomen = lazy(() => import("./pages/HaircutForWomen"));
const HaircutForMen = lazy(() => import("./pages/HaircutForMen"));
const KidsHaircut = lazy(() => import("./pages/KidsHaircut"));
const HairColourHighlights = lazy(() => import("./pages/HairColourHighlights"));
const O3Facial = lazy(() => import("./pages/O3Facial"));
const RicaWaxing = lazy(() => import("./pages/RicaWaxing"));
const EyebrowThreading = lazy(() => import("./pages/EyebrowThreading"));
const HeadBodyMassage = lazy(() => import("./pages/HeadBodyMassage"));
const BeardTrimShave = lazy(() => import("./pages/BeardTrimShave"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsTracker />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/nanoplastia-andheri-east" element={<NanoplastiaAndheriEast />} />
            <Route path="/balayage-salon-andheri" element={<BalayageSalonAndheri />} />
            <Route path="/family-salon-marol-mumbai" element={<FamilySalonMarolMumbai />} />
            <Route path="/manicure-pedicure-mumbai" element={<ManicurePedicureMumbai />} />
            <Route path="/best-salon-andheri-east" element={<BestSalonAndheriEast />} />
            <Route path="/hydra-medi-facial-andheri-east" element={<HydraMediFacialAndheriEast />} />
            <Route path="/olaplex-hair-treatment-andheri-east" element={<OlaplexHairTreatmentAndheriEast />} />
            <Route path="/salon-near-powai" element={<SalonNearPowai />} />
            <Route path="/salon-near-ghatkopar" element={<SalonNearGhatkopar />} />
            <Route path="/salon-near-kurla" element={<SalonNearKurla />} />
            <Route path="/vegan-facial-andheri-east" element={<VeganFacialAndheriEast />} />
            <Route path="/derma-glow-facial-andheri-east" element={<DermaGlowFacialAndheriEast />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/nanoplastia-vs-keratin-what-to-choose" element={<NanoplastiaVsKeratin />} />
            <Route path="/how-long-does-balayage-last" element={<HowLongBalayageLasts />} />
            <Route path="/hair-spa-benefits-for-damaged-hair" element={<HairSpaBenefits />} />
            <Route path="/aftercare-tips-for-coloured-hair" element={<AftercareColouredHair />} />
            <Route path="/how-to-prep-for-your-first-facial" element={<PrepFirstFacial />} />
            <Route path="/why-rica-wax-is-gentler-on-skin" element={<WhyRicaWax />} />
            <Route path="/haircut-for-women" element={<HaircutForWomen />} />
            <Route path="/haircut-for-men" element={<HaircutForMen />} />
            <Route path="/kids-haircut" element={<KidsHaircut />} />
            <Route path="/hair-colour-highlights" element={<HairColourHighlights />} />
            <Route path="/o3-facial" element={<O3Facial />} />
            <Route path="/rica-waxing" element={<RicaWaxing />} />
            <Route path="/eyebrow-threading" element={<EyebrowThreading />} />
            <Route path="/head-body-massage" element={<HeadBodyMassage />} />
            <Route path="/beard-trim-shave" element={<BeardTrimShave />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
