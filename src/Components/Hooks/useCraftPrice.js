import { useState, useEffect } from "react"
import listResourcesRaw from "../../assets/config/resources.json"

export default function useCraftPrice(itemData) {

    const [craftPriceSolo, setcraftPriceSolo] = useState(0)
    const [craftPriceTotal, setcraftPriceTotal] = useState(0)

    useEffect(() => {
        let totalPrice = 0

        itemData.recipe.forEach(recipeItem => {
            listResourcesRaw.resources.forEach(resItem => {
                if( resItem.id === recipeItem.id ){
                    totalPrice += resItem.price * recipeItem.qty
                }
            })
        })

        setcraftPriceSolo(totalPrice)
        setcraftPriceTotal(totalPrice * itemData.qty)
    }, [craftPriceSolo])

    return {craftPriceSolo, craftPriceTotal}
}