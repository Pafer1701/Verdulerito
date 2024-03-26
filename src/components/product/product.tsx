import "./style.css"

/*const product = {
    image: banana,
    name: 'bananin bananon',
    description: 'Lorem ipsum dolor sit amet consecteturque debitis',
    price: 12.50
} */
interface Product{
    image: string;
    name: string;
    description: string;
    price: number;
}

function Product({image, name, description, price}: Product){
    
    return(

        <div className="card-product">
            <img className="image" src={image} alt={name}/>
            <p className="name">{name}</p>
            <p className="description">{description}</p>
            <h3 className="price">{price}</h3>
        </div>
    )
}

export default Product
