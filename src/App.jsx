import { ShopItemClass } from './components/ShopItemClass';
import { ShopItemFunc } from './components/ShopItemFunc';
import '../src/App.css';

const itemData = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemClass item={itemData} />
      </div>
      <div className="window">
        <ShopItemFunc item={itemData} />
      </div>
    </div>
  )
}

export default App
