import React from "react";
import Header from "./Components/Header/Header";
import NavbarMenu from "./Components/NavbarMenu/NavbarMenu";
import Home from "./Components/Pages/Home";
import ScrollToTop from "./Components/ScrollToTop"
import FloatingWhatsApp from "./Components/FloatingWhatsappButton/FloatingWhatsappButton";
import General from "./Components/Pages/General";
import WhiteFillings from "./Components/Pages/WhiteFillings";
import TeethCleaning from "./Components/Pages/TeethCleaning";
import RootCanal from "./Components/Pages/RootCanal";
import Cosmetics from "./Components/Pages/Cosmetics";
import Surgical from "./Components/Pages/Surgical";
import KidsDentistry from "./Components/Pages/KidsDentistry";
import EmegencyCare from "./Components/Pages/EmegencyCare";
import PORCELAIN from "./Components/Pages/PORCELAIN";
import Holistic from "./Components/Pages/Holistic";
import DentalVeneers from "./Components/Pages/DentalVeneers";
import DentalCrown from "./Components/Pages/DentalCrown";
import InlaysandOnlays from "./Components/Pages/InlaysandOnlays";
import DentalImplants from "./Components/Pages/DentalImplants";
import DentalBonding from "./Components/Pages/DentalBonding";
import RootCanalTherapy from "./Components/Pages/RootCanalTherapy";
import WisdomToothExtraction from "./Components/Pages/WisdomToothExtraction";
import DentalImplantsSurgical from "./Components/Pages/DentalImplantsSurgical";
import Reconstructiveprocedures from "./Components/Pages/Reconstructiveprocedures";
import Toothcoloredfillingsforkids from "./Components/Pages/Toothcoloredfillingsforkids";
import FAQ from "./Components/Faq/FAQ-ANS";
import BookOnline from "./Components/BookOnline/BookOnline";
import Sealants from "./Components/Pages/Sealants";
import CleaningPrevention from "./Components/Pages/CleaningPrevention";
import ToothExtracted from "./Components/Pages/ToothExtracted";
import KidsEmergencyDental from "./Components/Pages/KidsEmergencyDental";
import PhotoGallery from "./Components/Pages/PhotoGallery";
import Videos from "./Components/Pages/Videos";
import WorkProgress from "./Components/Pages/WorkProgress";
import AboutClinic from "./Components/About/AboutClinic";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <NavbarMenu />
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/General-denstistry" element={<General />} />
      <Route path="/White_Fillings" element={<WhiteFillings />}/>
      <Route path="/Cleanings-and-exams" element={<TeethCleaning />}/>
      <Route path="/Root_Canal" element={<RootCanal />}/>
      <Route path="/Cosmetics-dentistry" element={<Cosmetics />}/>
      <Route path="/Surgical" element={<Surgical />}/>
      <Route path="/Kids-dentistry" element={<KidsDentistry />}/>
      <Route path="/Emergency-Care" element={<EmegencyCare />}/>
      <Route path="/Porcelain-Crown" element={<PORCELAIN />}/>
      <Route path="/Holistic-dentistry" element={<Holistic />} />
      <Route path="/Dental-Veneers" element={<DentalVeneers />} />
      <Route path="/Dental-Crown" element={<DentalCrown />} />
      <Route path="/Inlays-and-Onlays" element={<InlaysandOnlays />} />
      <Route path="/Dental-Implants" element={<DentalImplants />} />
      <Route path="/Dental-Bonding" element={<DentalBonding />} />
      <Route path="/Root-Canal-Therapy" element={<RootCanalTherapy  />} />
      <Route path="/Wisdom-Tooth-Extraction" element={<WisdomToothExtraction  />} />
      <Route path="/Surgical-Dental-implants" element={<DentalImplantsSurgical  />} />
      <Route path="/Reconstructive-procedures" element={<Reconstructiveprocedures  />} />
      <Route path="/Tooth-colored-fillings-for-kids" element={<Toothcoloredfillingsforkids />} />
      <Route path="/Faq" element={<FAQ />} />
      <Route path="/Book-Online" element={<BookOnline />} />
      <Route path="/Sealants" element={<Sealants />} />
      <Route path="/Cleaning-And-Prevention" element={<CleaningPrevention/>} />
      <Route path="/Tooth-Extraction" element={<ToothExtracted/>} />
      <Route path="/Kids-Emergency-Dental" element={<KidsEmergencyDental/>} />
      <Route path="/PhotoGallery" element={<PhotoGallery/>} />
      <Route path="/Video-Gallery" element={<Videos/>} />
      <Route path="/Notification" element={<WorkProgress />} />
      <Route path="/About-clinic" element={<AboutClinic />} />
    </Routes>
  </BrowserRouter>,
  <FloatingWhatsApp />
    </div>
  );
}

export default App;
