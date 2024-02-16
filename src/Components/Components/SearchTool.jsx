import { useState } from "react"
import { Icon } from '@iconify/react';

export default function SearchTool({searchQueryResult}) {
    const [searchQuery, setsearchQuery] = useState("")

    function filterItems(val){
        setsearchQuery(val)
        searchQueryResult(val)
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
        </div>
    )
}