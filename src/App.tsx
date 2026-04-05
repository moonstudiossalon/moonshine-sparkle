import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import NanoplastiaAndheriEast from "./pages/NanoplastiaAndheriEast";
import BalayageSalonAndheri from "./pages/BalayageSalonAndheri";
import FamilySalonMarolMumbai from "./pages/FamilySalonMarolMumbai";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/nanoplastia-andheri-east" element={<NanoplastiaAndheriEast />} />
          <Route path="/balayage-salon-andheri" element={<BalayageSalonAndheri />} />
          <Route path="/family-salon-marol-mumbai" element={<FamilySalonMarolMumbai />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
