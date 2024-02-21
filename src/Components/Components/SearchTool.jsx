import { useState } from "react"
import { createPortal } from "react-dom"
import { Icon } from '@iconify/react';
import ModalRes from "../../Pages/Resources/Components/ModalRes";

export default function SearchTool({searchQueryResult, context}) {
    const [searchQuery, setsearchQuery] = useState("")
    const [addRes, setAddRes] = useState(false)
    const [addItem, setAddItem] = useState(false)

    function filterItems(val){
        setsearchQuery(val)
        searchQueryResult(val)
    }

    let btnAdd = "";

    if( context === "resources" ) {
        btnAdd = 
        <button onClick={() => setAddRes(true)} className="add-tool roboto">
            <span>Ajouter une ressource</span>
            <Icon icon="pajamas:todo-add" />
        </button>
    }
    else if( context === "items" ){
        btnAdd = 
        <button onClick={() => setAddItem(true)} className="add-tool roboto">
            <span>Ajouter un item</span>
            <Icon icon="pajamas:todo-add" />
        </button>
    }

    return (
        <div className="search-tools">
            <div className="search-tool">
                <input 
                className="roboto"
                type="text" 
                placeholder="Recherche"
                value={searchQuery}
                onChange={e => filterItems(e.target.value)} 
                />
                <Icon icon="iconamoon:search" />
            </div>
            {btnAdd}
            {(context === "resources" && addRes) && createPortal(<ModalRes closeModal={() => setAddRes(false)} />, document.body)}
        </div>
    )
}