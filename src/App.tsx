// import { FooterComponent } from "./components/Footer";
// import { Navbar2 } from "./components/navbar/Navbar2";
// import HomeIndex from "./pages/homepage/Index";

// export default function App() {
//   return (
//     <div  ><Navbar2 />
//     <div >
//      <HomeIndex />

//      <FooterComponent />
//     </div>
//     </div>
//   );
// }

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FooterComponent } from "./components/Footer";
import MainNavBar from "./components/navbar/MainNavBar";
import HomeIndex from "./pages/home_page/HomeIndex";
import AboutUsIndex from "./pages/aboutus_page/AboutUsIndex";
import ContactUsIndex from "./pages/contact_page/ContactUsIndex";
import MyServicesIndex from "./pages/services_page/MyServicesIndex";
import MyPricingIndex from "./pages/pricing_page/MyPricingIndex";


// import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/about" element={<AboutUsIndex />} />
        <Route path="/services" element={<MyServicesIndex />} />
        <Route path="/contact" element={<ContactUsIndex />} />
        <Route path="/pricing" element={<MyPricingIndex />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <FooterComponent />
    </Router>
  );
};

export default App;
