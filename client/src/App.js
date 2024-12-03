

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/header/header";
import MainPage from "./pages/MainPage/MainPage";
import Map from "./components/Map/Map";
import Care from "./components/advice_page/care/care";


import CufflinksPage from "./components/SilverComponent/CuflinksPage";
//

import PendantPage from "./components/SilverComponent/PendantPage/PendantPage";
//
import RingsPage from "./components/SilverComponent/RingPage/RingPage";
import AlkorR from "./components/SilverComponent/RingPage/AlkorR";
import RedR from "./components/SilverComponent/RingPage/RedR";
import RusR from "./components/SilverComponent/RingPage/RusR";
import CrystallR from "./components/SilverComponent/RingPage/CrystallR";
//
import BraceletsPage from "./components/SilverComponent/BraceletsPage/BraceletsPage";
//
import EarringsPage from "./components/SilverComponent/EarringsPage/EarringsPage";
import AlkorE from "./components/SilverComponent/EarringsPage/AlkorE";
import RusE from "./components/SilverComponent/EarringsPage/RusE";
import RedE from "./components/SilverComponent/EarringsPage/RedE";
import CrystallE from "./components/SilverComponent/EarringsPage/CrystallE";
//
import NecklacePage from "./components/SilverComponent/NecklacePage";
//
import Health from "./components/advice_page/health/health";
import Storage from "./components/advice_page/storage/storage";
import AboutUs from "./pages/aboutUs/aboutUs";
import Delivery from "./pages/delivery/delivery";





function App() {
 
  return (
    <Router>
      <div className="App">
        <Header />
        

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/map" element={<Map />}></Route>
          <Route path="/care" element={<Care />}></Route>
          <Route path="/health" element={<Health />}></Route>
          <Route path="/storage" element={<Storage />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/delivery" element={<Delivery/>}></Route>
            
          <Route path="/gifts/wife/rings" element={<RingsPage />} />
          <Route path="/gifts/wife/rings/AlkorR" element={<AlkorR/>}/>
          <Route path="/gifts/wife/rings/RedR" element={<RedR/>}/>
          <Route path="/gifts/wife/rings/RusR" element={<RusR/>}/>
          <Route path="/gifts/wife/rings/CrystallR" element={<CrystallR/>}/>


          <Route path="/gifts/wife/bracelets" element={<BraceletsPage />} />
          <Route path="/gifts/wife/pendants" element={<PendantPage />} />
          <Route path="/gifts/wife/cufflinks" element={<CufflinksPage />} />


          <Route path="/gifts/wife/earrings" element={<EarringsPage />} />
          <Route path="/gifts/wife/earrings/AlkorE" element={<AlkorE/>}/>
          <Route path="/gifts/wife/earrings/RusE" element={<RusE/>}/>
          <Route path="/gifts/wife/earrings/RedE" element={<RedE/>}/>
          <Route path="/gifts/wife/earrings/CrystallE" element={<CrystallE/>}/>

          <Route path="/gifts/wife/necklace" element={<NecklacePage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
