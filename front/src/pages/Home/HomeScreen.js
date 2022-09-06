
import Footer from "./components/Footer/Footer";
import Mission from "./components/Mission/Mission"
import Proposal from "./components/Proposal/Propuesta"

function HomeScreen() {
  return (
    <div className="HomeScreen">
      <Proposal />
      <Mission />

      <div className="cont-experience">
          <p className="text-transform">Viví tu transformación personal.</p>
          <p className="text-experience">Viví tu experiencia V_Camp.</p>
        </div>

      <Footer />
    </div>
  )
}

export default HomeScreen;





