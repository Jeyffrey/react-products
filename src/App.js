import { useState } from 'react'
import './App.css';
import Category from './components/Category/Category'
import CategoryItem from './components/CategoryItem/CategoryItem';
import CheckboxFilter from './components/CheckboxFilter/CheckboxFilter';
import SearchFilter from './components/SearchFilter/SearchFilter';

const products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [onlyStocked, setOnlyStocked] = useState(false)

  const categories = [...new Set(products.map(i => i.category))] // ['porting Goods', 'Electronics']

  const getCategoryItems = (catName) => {
    return products.filter(product =>  {
      const isInCategory = product.category === catName
      const showNotStocked = onlyStocked ? product.stocked : true
      const isSearched = product.name.toLowerCase().includes(searchValue)
      return isInCategory && showNotStocked && isSearched
    })
  }

  return (
    <div className="App">
      <SearchFilter onInput={setSearchValue} />
      <CheckboxFilter onCheck={setOnlyStocked} />
      {categories.map(cat => (
        <Category key={cat} categoryName={cat}>
          {getCategoryItems(cat).map(item => (
            <CategoryItem key={item.name} item={item} />
          ))}
        </Category>
      ))}
    </div>
  );
}

export default App;
