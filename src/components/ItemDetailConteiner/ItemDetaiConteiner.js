import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

/* const product = { 
        id: '1', 
        name: 'El poder del ahora', 
        price: '$1000', 
        category: 'Desarrollo personal', 
        img:'http://d3ugyf2ht6aenh.cloudfront.net/stores/235/530/products/ahora1-8359f7b083d7524fb415832762611256-320-0.jpg', 
        stock: 25, 
        description:'Descripcion de El poder del ahora'
    } */

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