
import Footer from "./components/Footer/Footer";
import Mission from "./components/Mission/Mission"
import Proposal from "./components/Proposal/Propuesta"
import {Header} from './components/header/Header'

function HomeScreen() {
  return (
    <div className="HomeScreen">
      <Header />
      <Proposal/>
      <Mission/>
      <Footer/>
    </div>
  )
}

export default HomeScreen;
