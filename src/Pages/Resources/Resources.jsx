import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import NavBar from "../../Components/NavBar/NavBar"
import SearchTool from "../../Components/Components/SearchTool";
import Item from "./Components/Item";
import "./resources.css"

export default function Resources() {
  const listResourcesRaw = [
      {id: nanoid(8), name: "Kolérat Mort", img: 1, price: 1600},
      {id: nanoid(8), name: "Cuir de Cuirboule", img: 2, price: 2400},
      {id: nanoid(8), name: "Hélice en laiton", img: 3, price: 980},
      {id: nanoid(8), name: "Salikrone", img: 4, price: 150},
      {id: nanoid(8), name: "Pile Steamer", img: 5, price: 250},
      {id: nanoid(8), name: "Aile de Vortex", img: 6, price: 5000},
  ]

  const [searchQuery, setSearchQuery] = useState("")
  const [listResources, setListResources] = useState(listResourcesRaw)
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
      setListResources(listResourcesRaw)
    }
  }, [searchQuery])

  function formatString(str) {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  return (
    <>
        <NavBar />
        <div className="resources">
          <SearchTool searchQueryResult={getSearchQuery}/>

          {/* List Items */}
          { listIsEmpty ? 
          <h3 className="res-no-list-items roboto">Pas de résultat pour cette recherche</h3> : 
          <ul className="res-listItems">
              {listResources.map(item => (
                  <Item key={item.id} itemData={item} />
              ))}
          </ul>
          }
        </div>
    </>
  )
}