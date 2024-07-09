import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NewCampaign from "./pages/NewCampaign";
import { ThemeProvider } from "./context/ThemeContext"; 
import FontSizeControl from "./components/FontSizeControl"; 
import Home from "./pages/Home";
import NewCompany from "./pages/NewCompany";
import NewInfluencer from "./pages/NewInfluencer";
import Login from "./pages/Login";
import VLibras from "vlibras-nextjs";


function App() {
  return (
    <ThemeProvider>
      <VLibras forceOnload />
      <BrowserRouter>

        <NavBar />
        <FontSizeControl /> {/* Adicionando o controle de tamanho de fonte */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/campanha" element={<NewCampaign />} />
          <Route path="/sign-up-company" element={<NewCompany />} />
          <Route path="/sign-up-influencer" element={<NewInfluencer />} />
        </Routes>
        <Footer />
      
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
