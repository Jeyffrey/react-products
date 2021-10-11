import './App.css';
import Category from './components/Category/Category'
import CategoryItem from './components/CategoryItem/CategoryItem';
import SearchFilter from './components/SearchFilter/SearchFilter';
import CheckboxFilter from './components/CheckboxFilter/CheckboxFilter';

const products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

function App() {
  const categories = [...new Set(products.map(i => i.category))]

  const getCategoryItems = (catName) => {
    return products.filter(p =>  p.category === catName)
  }

  return (
    <div className="App">
      <SearchFilter />
      <CheckboxFilter />
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
