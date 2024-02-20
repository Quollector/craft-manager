import kamas from "../../../assets/kamas.svg"
import { Icon } from '@iconify/react';
import { useState } from "react"

export default function Item({itemData}) {
    const [price, setPrice] = useState(itemData.price)
    const [name, setName] = useState(itemData.name)
    const [editItem, setEditItem] = useState(false)
    
    function editItemFn(){
        setEditItem(true)
    }

    function setInputName(val){
        setName(val)
    }

    function setInputPrice(val){
        setPrice(val)
    }

    function saveBtn(){
        setEditItem(false)
    }

    function cancelBtn(){
        setEditItem(false)
        setName(itemData.name)
        setPrice(itemData.price)
    }

    function deleteItem(){
        var confirmation = confirm("Êtes-vous sûr de vouloir supprimer cette ressource ?", "Supprimer la ressource")
    }

    return (
        <li className={`res-item roboto ${editItem ? "edit-item" : ""}`}>
            <div className="res-item-img">
                <img src={`/resources/resource_${itemData.img}.png`} alt={itemData.name} />
            </div>
            <div className="res-item-name">
                <input type="text" value={name} onChange={e => setInputName(e.target.value)} className={`${editItem ? "" : "disabled"}`} />
            </div>
            <div className="res-item-price">
                <input type="number" value={price} onChange={e => setInputPrice(e.target.value)} className={`${editItem ? "" : "disabled"}`} />
                <img src={kamas} />
            </div>
            <div className="res-item-btns">
                <button onClick={editItemFn} className="orange-btn"><Icon icon="mdi-light:pencil" /></button>
                <button onClick={deleteItem} className="orange-btn"><Icon icon="fluent:delete-20-regular" /></button>
                <button onClick={saveBtn} className="save-btn"><Icon icon="material-symbols-light:save-outline" /></button>
                <button onClick={cancelBtn} className="cancel-btn"><Icon icon="mdi:times" /></button>
            </div>
        </li>
    )
}