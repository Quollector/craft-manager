import NavBar from "../../../Components/NavBar/NavBar"
import ListHeader from "./ListHeader/Theader"
import ListItems from "./ListItems/ListItems"
import "./dashboard.css"

function Dashboard() {
  return (
    <>
      <NavBar />
      <div className="dashboard">
          <ListHeader />
          <ListItems />
      </div>
    </>
  )
}
export default Dashboard