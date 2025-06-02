import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import HartexhPage from '@/pages/HartexhPage';
    import { Toaster } from '@/components/ui/toaster';
    import { TooltipProvider } from "@/components/ui/tooltip";

    function App() {
      return (
        <Router>
          <TooltipProvider>
            <div className="min-h-screen bg-background text-foreground">
              <Routes>
                <Route path="/" element={<HartexhPage />} />
              </Routes>
              <Toaster />
            </div>
          </TooltipProvider>
        </Router>
      );
    }

    export default App;