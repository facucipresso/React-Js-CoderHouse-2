import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

/* const products = [
    { 
        id: '1', 
        name: 'El poder del ahora', 
        price: '$1000', 
        category: 'Desarrollo personal', 
        img:'http://d3ugyf2ht6aenh.cloudfront.net/stores/235/530/products/ahora1-8359f7b083d7524fb415832762611256-320-0.jpg', 
        stock: 25, 
        description:'Descripcion de El poder del ahora'
    },
    { 
        id: '2', 
        name: 'El club de las 5 de la mañana', 
        price: '$800', 
        category: 'Desarrollo personal', 
        img:'https://d22fxaf9t8d39k.cloudfront.net/54bbb30585e659256295f9e893909b4d686a6f45e74370deda873246c49ae8af38892.jpeg', 
        stock: 16, 
        description:'Descripcion de El club de las 5 de la mañana'
    },
    { 
        id: '3', 
        name: 'Harry Potter y la piedra filosofal', 
        price: '$1200', 
        category: 'Aventura', 
        img:'https://images.cdn3.buscalibre.com/fit-in/360x360/ce/e6/cee6ef96dad70d3f599b953f0e50afc7.jpg', 
        stock: 10, 
        description:'Descripcion de Harry Potter y la piedra filosofal'
    },
    { 
        id: '4', 
        name: 'El codigo del dinero', 
        price:' $1200', 
        category: 'Finanzas', 
        img:'https://www.cronista.com/files/image/371/371701/61537bd1a293f.jpg', 
        stock: 10, 
        description:'Descripcion de El codigo del dinero'
    }
] */

const ItemListConteiner = ()=>{

    const [products, setProducts]= useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    

    /* const navigate = useNavigate() */

    

    useEffect(()=>{

        const asyncFunction = categoryId ? getProductsByCategory : getProducts


        asyncFunction(categoryId)
        .then(products => {
            setProducts(products)
        }).catch(error =>{
            console.log(error);
        }).finally(()=>{
            setLoading(false)
        })
    },[categoryId])

    if (loading){
        return <h1>Se esta cargannndo putitos...</h1>
    }

    return (
        <div>
            <h1>Listado de productos</h1>
            <ItemList products={products}/>
            {/* {products.map (prod=> {
                return (
                    <div key={prod.id}>
                        <h1>{prod.name}</h1>
                        <img src={prod.img} alt={prod.name} style={{width: 100}} />
                        <p>Precio {prod.price}</p>
                        <Link to={`/detail/${prod.id}`}>Ver Detalle</Link>
                        <button onClick={()=>navigate(`/detail/${prod.id}`)}>Ver Detalle</button>
                    </div>
                )
            })} */}
        </div>
    )       
}

export default ItemListConteiner
