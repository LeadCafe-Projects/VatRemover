import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import VATCalculator from "@/pages/vat-calculator";
import HowToUse from "@/pages/how-to-use";
import Examples from "@/pages/examples";
import BusinessGuide from "@/pages/business-guide";
import FAQ from "@/pages/faq";
import Feedback from "@/pages/feedback";
import Disclaimer from "@/pages/disclaimer";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={VATCalculator} />
      <Route path="/how-to-use" component={HowToUse} />
      <Route path="/examples" component={Examples} />
      <Route path="/business-guide" component={BusinessGuide} />
      <Route path="/faq" component={FAQ} />
      <Route path="/feedback" component={Feedback} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
