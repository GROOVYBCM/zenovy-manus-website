import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Results from "./pages/Results";
import About from "./pages/About";
import FAQPage from "./pages/FAQ";
import DiagnosticPage from "./pages/Diagnostic";
import DiagnosticBriefing from "./pages/DiagnosticBriefing";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/results" component={Results} />
      <Route path="/about" component={About} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/diagnostic" component={DiagnosticPage} />
      <Route path="/diagnostic/briefing" component={DiagnosticBriefing} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
