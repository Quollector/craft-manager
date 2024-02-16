import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import { Icon } from '@iconify/react';
import NavBar from "../../Components/NavBar/NavBar"
import SearchTool from "../../Components/Components/SearchTool";
import Tcells from "./Components/Tcells"
import Item from "./Components/Item"
import "./dashboard.css"

function Dashboard() {

  const theadItems = [
      {id: nanoid(8), content: "Item"},
      {id: nanoid(8), content: "Prix de vente"},
      {id: nanoid(8), content: "Prix de craft"},
      {id: nanoid(8), content: "Bénéfice"},
      {id: nanoid(8), content: "Taux de bénéfice"},
      {id: nanoid(8), content: "Informations / Actions"},
  ]

  const listItemsRaw = [
      {id: nanoid(8), name: "Bottes d'apprentissage", img: 1, craft: 16555, work: 0, cat: 0, level: 50, onsale: 1},
      {id: nanoid(8), name: "Bottes d'apprentissage légères", img: 1, craft: 125000, work: 0, cat: 0, level: 50, onsale: 0},
  ]

  const [searchQuery, setSearchQuery] = useState("")
  const [listItems, setListItems] = useState(listItemsRaw)
  const [listIsEmpty, setListIsEmpty] = useState(false)

  const getSearchQuery = (query) => {
    setSearchQuery(query)
  }

  useEffect(() => {
    if(searchQuery !== ""){
      var filteredItems = listItemsRaw.filter(elmt => formatString(elmt.name).includes(formatString(searchQuery)))
      
      if(filteredItems.length > 0){
        setListItems(filteredItems)
        setListIsEmpty(false)
      }
      else{
        setListIsEmpty(true)
      }
    }
    else{
      setListIsEmpty(false)
      setListItems(listItemsRaw)
    }
  }, [searchQuery])

  function formatString(str) {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  return (
    <>
      <NavBar />
      <div className="dashboard">
        {/* Search Tool */}
        <SearchTool searchQueryResult={getSearchQuery}/>

        {/* List Header */}
        <ul className="dash-theader">
            {theadItems.map(item => (
                <Tcells key={item.id} itemData={item} />
            ))}
        </ul>

        {/* List Items */}
        { listIsEmpty ? 
        <h3 className="dash-no-list-items roboto">Pas de résultat pour cette recherche</h3> : 
        <ul className="dash-listItems">
            {listItems.map(item => (
                <Item key={item.id} itemData={item} />
            ))}
        </ul>
        }
      </div>
    </>
  )
}
export default Dashboard