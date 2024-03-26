
import "./style.css"
import banana from '../../assets/banana.jpg';
import Product from "../product/product";

function getRandomPrice(min: number, max: number): number {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function Products(){

    const productsArray = [];
    
const products: Product[] = [
     {
        image:banana,
        name: 'Manzana',
        description: 'Manzanas frescas del huerto',
        price: getRandomPrice(1, 5)
    },
    {
        image:banana,
        name: 'Plátano',
        description: 'Plátanos maduros y deliciosos',
        price: getRandomPrice(2, 6)
    },
    {
        image:banana,
        name: 'Naranja',
        description: 'Naranjas jugosas y llenas de vitamina C',
        price: getRandomPrice(3, 7)
    },
    {
        image:banana,
        name: 'Kiwi',
        description: 'Kiwi frescos y deliciosos',
        price: getRandomPrice(2, 5)
    },
    {
        image:banana,
        name: 'Uva',
        description: 'Uvas dulces y jugosas',
        price: getRandomPrice(4, 8)
    },
    {
        image:banana,
        name: 'Durazno',
        description: 'Duraznos frescos y sabrosos',
        price: getRandomPrice(3, 6)
    },
    {
        image:banana,
        name: 'Limón',
        description: 'Limones ácidos y refrescantes',
        price: getRandomPrice(1, 4)
    },
    {
        image:banana,
        name: 'Fresa',
        description: 'Fresas maduras y deliciosas',
        price: getRandomPrice(3, 7)
    },
] 
    
    for(let i = 0; i<products.length ; i++){
        productsArray.push(<Product {...products[i]}  key={i} />);
    }

    return(
        <>
        <div className="container-products">
            {productsArray}
        </div>
        </>
    )
}

export default Products