import { Link } from "react-router-dom"

const Item = ({id, img, name, category, price})=>{
    return (
        <div>
            <img src={img} alt={name} style={{width:100}}/>
            <h1>{name}</h1>
            <h3>{category}</h3>
            <p>{price}</p>
            <Link to={`/detail/${id}`}>Ver Detalle</Link >
        </div>
    )
}

export default Item 