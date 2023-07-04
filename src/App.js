import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import BusinessPartneship from "./Pages/businessPartneship";
import Footer from "./Components/Footer";
import ReportDownload from "./Pages/reportDownload";
import Doctor from "./Pages/Doctor";
import BookTest from "./Pages/BookTest";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <Router>
      <div className="bg-primary ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/business-partnership" element={<BusinessPartneship />}/>
          <Route path="/download-report" element={<ReportDownload />} />
          <Route path="/book-a-test" element={<BookTest />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
