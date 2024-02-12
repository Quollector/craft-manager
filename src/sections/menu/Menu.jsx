import "./menu.css"
import Main from "./items/Main"
import Resume from "./items/Resume"

function Menu() {
  return (
    <nav>
        <div className="nav-wrapper">
            <Main />
            <Resume />
        </div>
    </nav>
  )
}
export default Menu