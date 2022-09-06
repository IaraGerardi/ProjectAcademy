
import Footer from "./components/Footer/Footer";
import Mission from "./components/Mission/Mission"
 import Proposal from "./components/Proposal/Propuesta"

function HomeScreen() {
  return (
    <div className="HomeScreen">
     <Proposal/>
      <Mission/>
      <Footer/>
    </div>
  )
}

export default HomeScreen;
