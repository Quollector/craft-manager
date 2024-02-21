import kamas from "../../../assets/kamas.svg"
import useCraftPrice from "../../../Components/Hooks/useCraftPrice"
import { Icon } from '@iconify/react';
import { useState } from "react"

export default function Item({itemData}) {

    const {craftPriceSolo, craftPriceTotal} = useCraftPrice(itemData)
    
    function editItemFn(){
    }

    function viewItem(){
    }

    function saleItem(){
    }

    function deleteItem(){
        var confirmation = confirm("Êtes-vous sûr de vouloir supprimer cet item ?", "Supprimer l'item'")
    }

    // Format numbers
    function formatNumbers(value, type) {
        if(type==="int"){
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }
        else if(type==="float"){
            var parts = value.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            return parts.join(".");
        }
    }

    return (
        <li className="items-item roboto">
            <div className="item-img">
                <img src={`/items/item_${itemData.img}.png`} alt={itemData.name} />
            </div>
            <div className="item-name">
                <p>{itemData.name}</p>
            </div>
            <div className="item-price">
                <p>{formatNumbers(craftPriceSolo, "int")}</p>
                <img src={kamas} />
            </div>
            <div className="item-btns">
                <button onClick={editItemFn} className="orange-btn"><Icon icon="mdi-light:pencil" /></button>
                <button onClick={viewItem} className="orange-btn"><Icon icon="ph:eye" /></button>
                <button onClick={saleItem} className="orange-btn"><Icon icon="healthicons:market-stall" /></button>
                <button onClick={deleteItem} className="orange-btn"><Icon icon="fluent:delete-20-regular" /></button>
            </div>
        </li>
    )
}