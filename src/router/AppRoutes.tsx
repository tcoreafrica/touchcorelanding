import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "../components/homeCompo/NavBar";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import WorkPage from "../pages/WorkPage";
import ServicesPage from "../pages/services/ServicesPage";
import StrategyDesign from "../pages/services/StrategyDesign";
import EnterprisePlatforms from "../pages/services/EnterprisePlatforms";
import ContactUsPage from "../pages/ContactUsPage";
import WebAppPage from "../pages/WebAppPage";
// import MobileAppPage from "../pages/MobileAppPage";
import AboutSaroAfrica from "../pages/AboutSaroAfrica";
import AboutIJETraveles from "../pages/AboutIJETraveles";
import TravelSolutionDevelopment from "../pages/services/TravelSolutionDevelopment";
import EcommercePage from "../pages/services/EcommercePage";
import WorkIntraverseAfr from "../pages/WorkIntraverseAfr";
import WorkIcarryGo from "../pages/WorkIcarryGo";
import NotFoundPage from "../pages/NotFoundPage";
import WorkOdioPay from "../pages/WorkOdioPay";

function AppRoutes() {
  const location = useLocation();

  const definedRoutes = [
    "/",
    "/about",
    "/work",
    "/mobile-web-apps",
    "/product-design",
    "/enterprise-platform",
    "/travel-solution-development",
    "/ecommerce",
    "/contact-us",
    "/web-app",
    "/mobile-app",
    "/work/intraverse-africa",
    "/work/icarryGo",
    "/work/saroAfrica",
    "/work/odioPay",
    "/work/ijeTravels",
  ];

  const shouldHideNavBar = !definedRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/mobile-web-apps" element={<ServicesPage />} />
        <Route path="/product-design" element={<StrategyDesign />} />
        <Route path="/enterprise-platform" element={<EnterprisePlatforms />} />
        <Route
          path="/travel-solution-development"
          element={<TravelSolutionDevelopment />}
        />
        <Route path="/ecommerce" element={<EcommercePage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/web-app" element={<WebAppPage />} />
        {/* <Route path="/mobile-app" element={<MobileAppPage />} /> */}
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/intraverse-africa" element={<WorkIntraverseAfr />} />
        <Route path="/work/odioPay" element={<WorkOdioPay />} />
        <Route path="/work/icarryGo" element={<WorkIcarryGo />} />
        <Route path="/work/saroAfrica" element={<AboutSaroAfrica />} />
        <Route path="/work/ijeTravels" element={<AboutIJETraveles />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
