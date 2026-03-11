import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Counter  from './components/counter';
function App() {
  return (
    <Layout>
      <Counter />
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
