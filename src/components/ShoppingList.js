import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [allItems,setallItems]=useState(items)
  const [selectedCategory,setselectedCategory]=useState("")
  const filteredItems=items.filter((eachItem)=>{
    if(selectedCategory==="All"){
      return eachItem
     
    }
    else{
     
      return eachItem.category===selectedCategory
    }
  })
  setallItems(filteredItems)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e)=>setselectedCategory(e.target.value)} name="filter" value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      {
          
        }
      </div>
      <ul className="Items">
        {allItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
