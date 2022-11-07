import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "antd/dist/antd.css";

import AOS from "aos";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);
  return (
    <div>
     <LandingPage />
    </div>
  );
}

export default App;
