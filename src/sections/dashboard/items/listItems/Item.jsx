import kamas from "../../../../assets/kamas.svg"
import pourcent from "../../../../assets/pourcent-b.svg"
import { Icon } from '@iconify/react';
import { useState, useRef } from "react"

export default function Item({itemData}) {
    const [price, setPrice] = useState(0)
    const [benef, setBenef] = useState(false)
    const [benefRatio, setBenefRatio] = useState(false)
    const [craftPrice, setCraftPrice] = useState(0)
    const [onSale, setOnSale] = useState(false)
    const [changeButtonsPrice, setChangeButtonsPrice] = useState(false)
    const [changeButtonsCraft, setChangeButtonsCraft] = useState(false)
    const [visualBalance, setVisualBalance] = useState("holding")

    const works = ["Cordonnier", "Tailleur", "Sculpteur", "Bijoutier"]
    const cat = [
        ["Bottes", "Ceinture"],
        ["Coiffe", "Cape", "Sac"],
        ["Baguette", "Bâton", "Arc"],
        ["Anneau", "Amulette"],
    ]

    function handlePricesChange(e, handle){
        if(handle === "price"){
            var newPrice = e.target.value
            setChangeButtonsPrice(true)
    
            if( newPrice != 0 && craftPrice != 0){
                var newBenef = parseInt(newPrice - craftPrice - (newPrice * 0.02))
                var newBenefRatio = ((newPrice / craftPrice * 100) - 100).toFixed(2)
        
                setPrice(newPrice)
                setBenef(newBenef)
                setBenefRatio(newBenefRatio)
        
                if(benefRatio){
                    if(newPrice <= 100000){
                        if(newBenefRatio <= 50){
                            setVisualBalance("invalid")
                        }
                        else if(newBenefRatio > 50 && newBenefRatio <= 100){
                            setVisualBalance("mid")
                        }
                        else{
                            setVisualBalance("valid")
                        }
                    }
                    else if(newPrice > 100000 && newPrice <= 5000000 ){
                        if(newBenefRatio <= 35){
                            setVisualBalance("invalid")
                        }
                        else if(newBenefRatio > 35 && newBenefRatio <= 75){
                            setVisualBalance("mid")
                        }
                        else{
                            setVisualBalance("valid")
                        }
                    }
                }
            }
            else{
                setPrice(newPrice)
                setBenef(false)
                setBenefRatio(false)
                setVisualBalance("holding")
            }
        }
        else if(handle === "craft"){
            var newCraft = e.target.value
            setChangeButtonsCraft(true)
    
            if( newCraft != 0 && price != 0){
                var newBenef = parseInt(price - newCraft - (price * 0.02))
                var newBenefRatio = ((price / newCraft * 100) - 100).toFixed(2)
        
                setCraftPrice(newCraft)
                setBenef(newBenef)
                setBenefRatio(newBenefRatio)
        
                if(benefRatio){
                    if(price <= 100000){
                        if(newBenefRatio <= 50){
                            setVisualBalance("invalid")
                        }
                        else if(newBenefRatio > 50 && newBenefRatio <= 100){
                            setVisualBalance("mid")
                        }
                        else{
                            setVisualBalance("valid")
                        }
                    }
                    else if(price > 100000 && price <= 5000000 ){
                        if(newBenefRatio <= 35){
                            setVisualBalance("invalid")
                        }
                        else if(newBenefRatio > 35 && newBenefRatio <= 75){
                            setVisualBalance("mid")
                        }
                        else{
                            setVisualBalance("valid")
                        }
                    }
                }
            }
            else{
                setCraftPrice(newCraft)
                setBenef(false)
                setBenefRatio(false)
                setVisualBalance("holding")
            }
        }
    }

    function handleChangeButton(type, change){
        if(type === 1){
            setChangeButtonsPrice(false)
        }
        else if(type === 2){
            setChangeButtonsCraft(false)
        }
    }

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    function floatNumberWithSpaces(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return parts.join(".");
    }

    return (
        <li>
            <ul className="item-datas roboto">
                <li className="item-base">
                    <div className="flasher" style={{background: `#${onSale ? "00D72F" : "D70000"}`}}></div>
                    <img src={`/public/items/item_${itemData.img}.png`} alt={itemData.name} />
                    <p>{itemData.name}</p>
                </li>
                <li className={`item-input ${changeButtonsPrice && "changeButtonsActive"}`}>
                    <input type="number" onChange={e => handlePricesChange(e, "price")} min={0} placeholder="0"/>
                    <img src={kamas} />
                    <div className="changeButtons">
                        <button onClick={() => handleChangeButton(1, true)} className="validationChange"><Icon icon="ic:baseline-check" /></button>
                        <button onClick={() => handleChangeButton(1, false)} className="deleteChange"><Icon icon="la:times" /></button>
                    </div>
                </li>
                {/* <li className="item-result">
                    <span>{numberWithSpaces(craftPrice)}</span>
                    <img src={kamas} />
                </li> */}
                <li className={`item-input ${changeButtonsCraft && "changeButtonsActive"}`}>
                    <input type="number" onChange={e => handlePricesChange(e, "craft")} min={0} placeholder="0"/>
                    <img src={kamas} />
                    <div className="changeButtons">
                        <button onClick={() => handleChangeButton(2, true)} className="validationChange"><Icon icon="ic:baseline-check" /></button>
                        <button onClick={() => handleChangeButton(2, false)} className="deleteChange"><Icon icon="la:times" /></button>
                    </div>
                </li>
                <li className="item-result">
                    <span>{benef ? numberWithSpaces(benef) : "-"}</span>
                    <img src={kamas} />
                </li>
                <li className="item-result">
                    <span>{benefRatio ? floatNumberWithSpaces(benefRatio) : "-"}</span>
                    <img src={pourcent} />
                    <div className={`visual-balance ${visualBalance}`}></div>
                </li>
                <li className="item-actions">
                    <div className="item-actions-wrapper">
                        <div className="item-actions-infos">
                            <div>
                                <p className="cat">Métier:</p>
                                <p className="res">{works[itemData.work]}</p>
                            </div>
                            <div>
                                <p className="cat">Catégorie:</p>
                                <p className="res">{cat[itemData.work][itemData.cat]}</p>
                            </div>
                            <div>
                                <p className="cat">Niveau</p>
                                <p className="res">{itemData.level}</p>
                            </div>
                        </div>
                        <div className="item-actions-buttons">
                            <div className="item-actions-buttons-wrapper">
                                <button className="craft"><Icon icon="solar:sledgehammer-outline" /></button>
                                <button className="delete"><Icon icon="fluent:delete-20-regular" /></button>
                                <button onClick={() => setOnSale(!onSale)} className={`onsale ${onSale ? "selling" : "notSelling"}`}><Icon icon="healthicons:market-stall" /></button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </li>
    )
}