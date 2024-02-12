import { nanoid } from "nanoid"
import Tcells from "./Tcells"

export default function Theader() {

    const theadItems = [
        {id: nanoid(8), content: "Item"},
        {id: nanoid(8), content: "Prix de vente"},
        {id: nanoid(8), content: "Prix de craft"},
        {id: nanoid(8), content: "Bénéfice"},
        {id: nanoid(8), content: "Taux de bénéfice"},
        {id: nanoid(8), content: "Informations / Actions"},
    ]

  return (
    <ul className="dash-theader">
        {theadItems.map(item => (
            <Tcells key={item.id} itemData={item} />
        ))}
    </ul>
  )
}