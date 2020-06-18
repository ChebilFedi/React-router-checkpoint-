import React from 'react'
import {productsData} from '../productsData'
import {Route,Link} from 'react-router-dom'
import Product from './Product'
const Products=({match})=>{
    return (
        
        <div className='products'>
            <h1>Products</h1>
        <ul>{productsData.map((el)=>(
               <Link to={`${match.url}/${el.id}`}><li key={el.id}>{el.name}</li>
           </Link> ))
        }
        </ul>
<Route path={`${match.url}/:productId`} render={(props) => <Product data= {productsData} {...props} />}/>
        </div>
    )
}
export default Products;