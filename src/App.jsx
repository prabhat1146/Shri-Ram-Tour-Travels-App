// import logo from './logo.svg';
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./layout/Home";
import ErrorPage from "./layout/Error";
import ExplorePackages from "./pages/ExplorePackages";
import ViewDetails from "./components/cards/TourPackageDetails";
import BookNow from "./components/cards/BookNow";
import Destination from "./components/cards/Destinations";
import AboutUs from "./pages/AboutUs";
import Disclaimer from "./components/legal/Disclaimer";
import PrivacyAndPolicy from "./components/legal/PrivacyAndPolicy";
import TermsAndConditions from "./components/legal/TermsAndConditions";

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="pages" element={<Outlet />}>
          <Route path="explore-packages" element={<ExplorePackages />}></Route>
          <Route path="packages/:id" element={<ViewDetails />}></Route>
          <Route path="book-now" element={<BookNow />} />
          <Route path="destinations" element={<Destination />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="legal" element={<Outlet />}>
            <Route path="disclaimer" element={<Disclaimer />} />
            <Route path="privacy-and-policy" element={<PrivacyAndPolicy />} />
            <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
