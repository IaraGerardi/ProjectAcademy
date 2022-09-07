
import Footer from "./components/Footer/Footer";
import { Header } from "./components/header/Header";
import Mission from "./components/Mission/Mission"
import Proposal from "./components/Proposal/Propuesta"
import {Banner} from './components/Banner/banner'

function HomeScreen() {
  return (
    <div className="HomeScreen">
      <Header />
      <Banner />
      <Mission />
      <Proposal />
    

      <div className="cont-experience">
          <p className="text-transform">Viví tu transformación personal.</p>
          <p className="text-experience">Viví tu experiencia V_Camp.</p>
        </div>

      <Footer />
    </div>
  )
}

export default HomeScreen;





