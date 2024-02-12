import { nanoid } from "nanoid"
import MenuItem from "./MenuItems"

function Main() {

    const menuItems = [
        {id: nanoid(8), content: "Tableau"},
        {id: nanoid(8), content: "Items"},
        {id: nanoid(8), content: "Ressources"},
        {id: nanoid(8), content: "Panier"},
        {id: nanoid(8), content: "Options"},
    ]

    return (
        <div className="nav-main">
            <ul>
                {menuItems.map(item => (
                    <MenuItem key={item.id} itemData={item} />
                ))}
            </ul>
        </div>
    )
}
export default Main