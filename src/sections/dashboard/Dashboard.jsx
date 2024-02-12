import Theader from "./items/theader/Theader"
import ListItems from "./items/listItems/ListItems"
import "./dashboard.css"

function Dashboard() {
  return (
    <div className="dashboard">
        <Theader />
        <ListItems />
    </div>
  )
}
export default Dashboard