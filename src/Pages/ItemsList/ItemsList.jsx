import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import NavBar from "../../Components/NavBar/NavBar"
import SearchTool from "../../Components/Components/SearchTool";
import Item from "./Components/Item";
import listItemsRaw from "../../assets/config/items.json"
import "./itemslist.css"

export default function ItemsList() {

  const [searchQuery, setSearchQuery] = useState("")
  const [listItems, setListItems] = useState(listItemsRaw.items)
  const [listIsEmpty, setListIsEmpty] = useState(false)

  const getSearchQuery = (query) => {
    setSearchQuery(query)
  }

  useEffect(() => {
    if(searchQuery !== ""){
      var filteredItems = listItemsRaw.items.filter(elmt => formatString(elmt.name).includes(formatString(searchQuery)))
      
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
      setListItems(listItemsRaw.items)
    }

    function formatString(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
  }, [searchQuery])


  return (
    <>
        <NavBar />
        <div className="itemsList">
          <SearchTool searchQueryResult={getSearchQuery} context="items" />

          {/* List Items */}
          { listIsEmpty ?
            <h3 className="items-no-list-items roboto">Pas de résultat pour cette recherche</h3> :
            <ul className="items-listItems">
                {listItems.map(item => (
                    <Item key={nanoid()} itemData={item} />
                ))}
            </ul>
          }
        </div>
    </>
  )
}