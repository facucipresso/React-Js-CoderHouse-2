import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailConteiner = ()=> {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    /* const {id, name, price, category, img, stock, description}= product */

    const {productId} = useParams()

    useEffect(()=>{
        getProductById (productId)
            .then (product =>{
                setProduct(product)
            }).finally(()=>{
                setLoading(false)
            })
    })

    if (loading){
        return <h1>Se esta cargannndo putitos...</h1>
    }

    return(
        <>
            <h1>Detalle</h1>
            <ItemDetail {...product}/>
        </>
    )
}

export default ItemDetailConteiner