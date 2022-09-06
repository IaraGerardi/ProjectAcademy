
function Proposal() {
  return (
    <div className="containerProposal">
       <div className="boxProposalText">
            <h2>¿Cual es nuestra propuesta?</h2>
            <p>Programas de desarrollo profesional y descubrimiento.</p>
       </div>
        <div className="boxsProposalChildren">
            <div className="proposalBox1">
              <h3>Orientación vocacional</h3>
              <p>Te entrenamos enla toma de decision tu trayecto profesional.</p>
              <button>Mas informacion</button>
            </div>
            <div className="proposalBox2">
              <h3>Re-orientacion vocacional</h3>
              <p>Reinversion personal, laboral y profesional.</p>
              <button>Mas informacion</button>
            </div>
            <div className="proposalBox3">
              <h3>Espacios de aprendizaje</h3>
              <p>Aprende a pensar desde otra logica.</p>
              <button>Mas informacion</button>
            </div>
        </div>
    </div>
  )
}

export default Proposal;
