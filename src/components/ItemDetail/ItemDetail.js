import Counter from "../Counter/Counter"

const ItemDetail = ({id, name, price, category, img, stock, description})=> {

    const handleOnAdd = (count)=>{
        const productToAdd = {id, name, price, count}
        console.log(productToAdd);
    }

    

    return (
        <div>
                <img src={img} alt={name} style={{width: 200}}/>
                <h2>{name}</h2>
                <p>Precio {price}</p>
                <p>{description}</p>
                <Counter onAdd={handleOnAdd} stock={stock}/> 
        </div>
    )
}

export default ItemDetail