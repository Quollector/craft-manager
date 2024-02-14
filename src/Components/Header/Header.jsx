import "./header.css"
import Bg from "./assets/bg.jpg"

function Header() {
  return (
    <div className="header">
      <img src={Bg} alt="background" />
      <div className="header-wrapper">
        <h1 className="bebas">Dofus Craft Manager <span>v1.0</span></h1>
      </div>
    </div>
  )
}
export default Header