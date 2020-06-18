import React from 'react'
const Cat=({match,data})=>{
    var cat=data.find(p => p.name == match.params.categoryName);
    var categoryData;
    
    categoryData = <div>
      <h3> {cat.name.toLowerCase()} </h3>
    
 </div>

  return (
    <div>
      <div>
         {categoryData}
      </div>
    </div>
  )    
}
export default Cat;