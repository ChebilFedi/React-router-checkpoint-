import React from 'react';
import {categoryData} from './categoryData'
import {Route,Link} from 'react-router-dom'
import Cat from './Cat'
import Nav from '../Nav';
const Category = ({match}) => {
    return (
        <div className='category'>
           <nav>
            <ul>
               {categoryData.map((el)=>(
                  <Link to={`${match.url}/${el.name}`}> <li key={el.id}>{el.name}</li>
               </Link>))}
            </ul>
<Route path={`${match.url}/:categoryName`} render={(props) => <Cat data= {categoryData} {...props} />}/>
</nav>
        </div>
    )
}
export default Category;