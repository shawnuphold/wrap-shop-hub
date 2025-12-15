import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import VehicleWraps from "./pages/industries/VehicleWraps";
import PPFInstallers from "./pages/industries/PPFInstallers";
import WindowTint from "./pages/industries/WindowTint";
import WallWraps from "./pages/industries/WallWraps";
import FlatGlass from "./pages/industries/FlatGlass";
import SignGraphics from "./pages/industries/SignGraphics";
import MultiService from "./pages/industries/MultiService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/industries/vehicle-wraps" element={<VehicleWraps />} />
          <Route path="/industries/ppf" element={<PPFInstallers />} />
          <Route path="/industries/window-tint" element={<WindowTint />} />
          <Route path="/industries/wall-wraps" element={<WallWraps />} />
          <Route path="/industries/flat-glass" element={<FlatGlass />} />
          <Route path="/industries/sign-graphics" element={<SignGraphics />} />
          <Route path="/industries/multi-service" element={<MultiService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
