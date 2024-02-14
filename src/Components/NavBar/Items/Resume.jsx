import kamas from "../../../assets/kamas.svg"
import pourcent from "../../../assets/pourcent.svg"
import ResumeItem from "./ResumeItems"
import { nanoid } from "nanoid"

function Resume() {

    const resumeItems = [
        {id: nanoid(8), content: "Prix de vente total: 133 000", icon: kamas},
        {id: nanoid(8), content: "Bénéfice potentiel: 47 791", icon: kamas},
        {id: nanoid(8), content: "ratio moyen: 37,07", icon: pourcent},
    ]

  return (
    <div className="nav-resume">
        <ul>
            {resumeItems.map(item => (
                <ResumeItem key={item.id} itemData={item} />
            ))}
        </ul>
    </div>
  )
}
export default Resume