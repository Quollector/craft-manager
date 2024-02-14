import "./menu.css"
import Main from "./Items/Main"
import Resume from "./Items/Resume"

function NavBar() {
  return (
    <nav>
        <div className="nav-wrapper">
            <Main />
            <Resume />
        </div>
    </nav>
  )
}
export default NavBar