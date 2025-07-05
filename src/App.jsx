// import logo from './logo.svg';
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./layout/Home";
import ErrorPage from "./layout/Error";
import ExplorePackages from "./pages/ExplorePackages";
import ViewDetails from "./pages/ViewDetails";
import BookNow from "./pages/BookNow";
import Destination from "./pages/Destinations";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="pages" element={<Outlet />}>
          <Route path="explore-packages" element={<ExplorePackages />} >
          </Route>
          <Route path="packages/:id" element={<ViewDetails/>}></Route>
          <Route path="book-now" element={<BookNow/>}/>
          <Route path="destinations" element={<Destination/>}/>
          <Route path="about-us" element={<AboutUs/>}/>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
