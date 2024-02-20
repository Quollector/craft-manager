import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import kamas from "../../../assets/kamas.svg"

export default function ModalRes({closeModal}) {

    const [imageUrl, setImageUrl] = useState("")
    const [imageError, setImageError] = useState(false)
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState(false)
    const [price, setPrice] = useState(0)
    const [priceError, setPriceError] = useState(false)

    function handleCloseModal(){
        closeModal()
    }

    function handleFileChange( e ) {
        const file = e.target.files[0]        
        
        if( file ){
            // setImage(file)
            const reader = new FileReader()

            reader.onloadend = () => {
                setImageUrl(reader.result)
            }

            reader.readAsDataURL(file)
        }
    }
    
    function handleSubmit(e){
        e.preventDefault()
        let error = false

        if(!name){
            setNameError(true)
            error = true
        }
        else{
            setNameError(false)
        }

        if(price < 0 || price === ""){
            setPriceError(true)
            error = true
        }
        else{
            setPriceError(false)
        }

        if(!imageUrl){
            setImageError(true)
            error = true
        }
        else{
            setImageError(false)
        }
    }

    return (
        <div className="modal modalRes">
            <div className="modal-wrapper">
                <div className="modal-header">
                    <h2 className="modal-title bebas">Ajouter une ressource</h2>
                    <button onClick={handleCloseModal}><Icon icon="mdi:times" /></button> 
                </div>
                
                <form onSubmit={handleSubmit} className="modal-form">
                    <label htmlFor="image" className='image-input'>
                        <span className="label roboto">Image*</span>
                        {imageError && <span className='error-message roboto'>Ce champs est obligatoire</span>}
                        <input type="file" id="image" onChange={e => {handleFileChange(e)}} />
                        {imageUrl ?
                            <span className='image-result'>
                                <img src={imageUrl} />
                                <div className="image-result-icon">
                                    <Icon icon="mdi:exchange" />
                                </div>
                            </span> :
                            <span className='image-label'>
                                <Icon icon="material-symbols:upload" />
                            </span>                        
                        }
                    </label>

                    <label htmlFor="name" className='name-input'>
                        <span className="label roboto">Nom*</span>
                        {nameError && <span className='error-message roboto'>Ce champs est obligatoire</span>}
                        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                    </label>
                    <label htmlFor="price" className='price-input'>
                        <span className="label roboto">Prix</span>
                        {priceError && <span className='error-message roboto'>Ce nombre doit être positif (min: 0)</span>}
                        <span className="price-wrapper">
                            <input type="number" id="price" min="0" value={price} onChange={e => setPrice(e.target.value)} />
                            <img src={kamas} />
                        </span>
                    </label>
                    <button>Ajouter</button>
                </form>
            </div>
        </div>
    )
}