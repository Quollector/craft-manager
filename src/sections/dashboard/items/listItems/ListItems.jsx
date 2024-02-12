import Item from "./Item"
import { nanoid } from "nanoid"

export default function ListItems() {

    const listItems = [
        {id: nanoid(8), name: "Bottes d'apprentissage", img: 1, craft: 16555, work: 0, cat: 0, level: 50},
        {id: nanoid(8), name: "Bottes d'apprentissage", img: 1, craft: 125000, work: 0, cat: 0, level: 50},
    ]

  return (
    <ul className="dash-listItems">
        {listItems.map(item => (
            <Item key={item.id} itemData={item} />
        ))}
    </ul>
  )
}