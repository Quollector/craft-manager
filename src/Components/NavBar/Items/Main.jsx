import { nanoid } from "nanoid"
import MenuItem from "./MenuItems"
import menus from "../../../assets/config/menu.json"

function Main() {
    return (
        <div className="nav-main">
            <ul>
                {menus.menus.map(item => (
                    <MenuItem key={nanoid(8)} itemData={item} />
                ))}
            </ul>
        </div>
    )
}
export default Main