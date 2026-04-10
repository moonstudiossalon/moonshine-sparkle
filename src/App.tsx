import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnalyticsTracker from "./components/AnalyticsTracker";
import Index from "./pages/Index";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import NanoplastiaAndheriEast from "./pages/NanoplastiaAndheriEast";
import BalayageSalonAndheri from "./pages/BalayageSalonAndheri";
import FamilySalonMarolMumbai from "./pages/FamilySalonMarolMumbai";
import ManicurePedicureMumbai from "./pages/ManicurePedicureMumbai";
import BestSalonAndheriEast from "./pages/BestSalonAndheriEast";
import HydraMediFacialAndheriEast from "./pages/HydraMediFacialAndheriEast";
import OlaplexHairTreatmentAndheriEast from "./pages/OlaplexHairTreatmentAndheriEast";
import SalonNearPowai from "./pages/SalonNearPowai";
import SalonNearGhatkopar from "./pages/SalonNearGhatkopar";
import SalonNearKurla from "./pages/SalonNearKurla";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
