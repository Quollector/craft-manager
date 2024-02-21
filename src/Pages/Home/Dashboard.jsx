import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import NavBar from "../../Components/NavBar/NavBar"
import SearchTool from "../../Components/Components/SearchTool";
import Tcells from "./Components/Tcells"
import Item from "./Components/Item"
import json from "../../assets/config/dashboard.json"
import items from "../../assets/config/items.json"
import "./dashboard.css"

function Dashboard() {
  const listItemsRaw = items.items

  const [searchQuery, setSearchQuery] = useState("")
  const [listItems, setListItems] = useState(items.items)
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

    function formatString(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
  }, [searchQuery])

  return (
    <>
      <NavBar />
      <div className="dashboard">
        {/* Search Tool */}
        <SearchTool searchQueryResult={getSearchQuery}/>

        {/* List Header */}
        <ul className="dash-theader">
            {json.thead.map(item => (
                <Tcells key={nanoid(8)} itemData={item} />
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