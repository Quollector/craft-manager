import { nanoid } from "nanoid"
import MenuItem from "./MenuItems"

function Main() {

    const menuItems = [
        {id: nanoid(8), content: "Tableau", to: "/"},
        {id: nanoid(8), content: "Items", to: "/items"},
        {id: nanoid(8), content: "Ressources", to: "/ressources"},
        {id: nanoid(8), content: "Panier", to: "/cart"},
        {id: nanoid(8), content: "Options", to: "/options"},
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