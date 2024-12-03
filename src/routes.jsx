import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Contact from "./pages/Contact";
import Video from "./pages/Video";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/music"
          element={
            <MainLayout>
              <Music />
            </MainLayout>
          }
        />
        <Route
          path="/video"
          element={
            <MainLayout>
              <Video />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />
        {/* Fallback route */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
