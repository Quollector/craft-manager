import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import NavBar from "../../Components/NavBar/NavBar"
import SearchTool from "../../Components/Components/SearchTool";
import Item from "./Components/Item";
import listResourcesRaw from "../../assets/config/resources.json"
import "./resources.css"

export default function Resources() {

  const [searchQuery, setSearchQuery] = useState("")
  const [listResources, setListResources] = useState(listResourcesRaw.resources)
  const [listIsEmpty, setListIsEmpty] = useState(false)

  const getSearchQuery = (query) => {
    setSearchQuery(query)
  }

  useEffect(() => {
    if(searchQuery !== ""){
      var filteredItems = listResourcesRaw.filter(elmt => formatString(elmt.name).includes(formatString(searchQuery)))
      
      if(filteredItems.length > 0){
        setListResources(filteredItems)
        setListIsEmpty(false)
      }
      else{
        setListIsEmpty(true)
      }
    }
    else{
      setListIsEmpty(false)
      setListResources(listResourcesRaw.resources)
    }

    function formatString(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
  }, [searchQuery])

  return (
    <>
        <NavBar />
        <div className="resources">
          <SearchTool searchQueryResult={getSearchQuery} context="resources" />

          {/* List Items */}
          { listIsEmpty ? 
          <h3 className="res-no-list-items roboto">Pas de résultat pour cette recherche</h3> : 
          <ul className="res-listItems">
              {listResources.map(item => (
                  <Item key={nanoid()} itemData={item} />
              ))}
          </ul>
          }
        </div>
    </>
  )
}