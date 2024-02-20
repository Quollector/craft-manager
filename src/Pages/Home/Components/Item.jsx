import { useState, useRef, useEffect } from "react"
import kamas from "../../../assets/kamas.svg"
import pourcent from "../../../assets/pourcent-b.svg"
import { Icon } from '@iconify/react';
import craftNames from "../../../assets/config/craftswork.json"

export default function Item({itemData}) {
    const [price, setPrice] = useState(30000)
    const [benef, setBenef] = useState(false)
    const [benefRatio, setBenefRatio] = useState(false)
    const [craftPrice, setCraftPrice] = useState(15000)
    const [onSale, setOnSale] = useState(itemData.onsale)
    const [visualBalance, setVisualBalance] = useState("holding")
    const [firstView, setFirstView] = useState(true)

    const saveButton = useRef()

    // change benef and ratio on input change
    useEffect(handlePricesChange, [price, craftPrice])

    function handlePricesChange(){
        if(!firstView){
            saveButton.current.classList.add("active")
        }
        setFirstView(false)
        
        if( price != 0 && craftPrice != 0){
            var newBenef = parseInt(price - craftPrice - (price * 0.02))
            var newBenefRatio = (((price - (price * 0.02)) / craftPrice * 100) - 100).toFixed(2)

            setBenef(newBenef)
            setBenefRatio(newBenefRatio)
        }
        else{
            setBenef(false)
            setBenefRatio(false)
        }
    }

    // Save items
    function handleSaveItem(){
        saveButton.current.classList.remove('active')

        alert("Item sauvegardé")
    }

    // Delete items
    function deleteItem(){
        var confirmation = confirm("Êtes-vous sûr de vouloir supprimer cet item de votre liste de vente ?", "Supprimer l'item")
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

    // Visual Balance Color
    useEffect(() => {
        if(price != 0 && craftPrice != 0 && benefRatio){
            if(price <= 100000){
                if(benefRatio <= 50){
                    setVisualBalance("invalid")
                }
                else if(benefRatio > 50 && benefRatio <= 100){
                    setVisualBalance("mid")
                }
                else{
                    setVisualBalance("valid")
                }
            }
            else if(price > 100000 && price <= 5000000 ){
                if(benefRatio <= 35){
                    setVisualBalance("invalid")
                }
                else if(benefRatio > 35 && benefRatio <= 75){
                    setVisualBalance("mid")
                }
                else{
                    setVisualBalance("valid")
                }
            }
        }
        else{
            setVisualBalance("holding")
        }
    }, [benefRatio])

    return (
        <li>
            <ul className="item-datas roboto">
                <li className="item-base">
                    <div className={`flasher${onSale ? " onsale" : ""}`}></div>
                    <img src={`/items/item_${itemData.img}.png`} alt={itemData.name} />
                    <p>{itemData.name}</p>
                </li>
                <li className="item-input">
                    <input value={price ? price : 0} type="number" onChange={e => setPrice(e.target.value)} min={0} placeholder="0"/>
                    <img src={kamas} />
                </li>
                {/* <li className="item-result">
                    <span>{formatNumbers(craftPrice, "int")}</span>
                    <img src={kamas} />
                </li> */}
                <li className="item-input">
                    <input value={craftPrice ? craftPrice : 0} type="number" onChange={e => setCraftPrice(e.target.value)} min={0} placeholder="0"/>
                    <img src={kamas} />
                </li>
                <li className="item-result">
                    <span>{benef ? formatNumbers(benef, "int") : "-"}</span>
                    <img src={kamas} />
                </li>
                <li className="item-result">
                    <span>{benefRatio ? formatNumbers(benefRatio, "float") : "-"}</span>
                    <img src={pourcent} />
                    <div className={`visual-balance ${visualBalance}`}></div>
                </li>
                <li className="item-actions">
                    <div className="item-actions-wrapper">
                        <div className="item-actions-infos">
                            <div>
                                <p className="cat">Métier:</p>
                                <p className="res">{craftNames["craftsmanship"][itemData.work]}</p>
                            </div>
                            <div>
                                <p className="cat">Catégorie:</p>
                                <p className="res">{craftNames["craftCategories"][itemData.work][itemData.cat]}</p>
                            </div>
                            <div>
                                <p className="cat">Niveau</p>
                                <p className="res">{itemData.level}</p>
                            </div>
                        </div>
                        <div className="item-actions-buttons">
                            <div className="item-actions-buttons-wrapper">
                                <button onClick={handleSaveItem} ref={saveButton} className="save"><Icon icon="material-symbols-light:save-outline" /></button>
                                <button className="craft"><Icon icon="solar:sledgehammer-outline" /></button>
                                <button onClick={deleteItem} className="delete"><Icon icon="fluent:delete-20-regular" /></button>
                                <button onClick={() => setOnSale(!onSale)} className={`onsale ${onSale ? "selling" : "notSelling"}`}><Icon icon="healthicons:market-stall" /></button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </li>
    )
}