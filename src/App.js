import './App.css';
import Banner from './components/Banner';
import Catagories from './components/Catagories';
import Header from './components/Header';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import CartItem from './components/CartItem';




function App() {
  return (
    <div className="App">
     <Header/>
     <CartItem/>
     <Banner/>
     <Catagories/>
     <FeaturedProducts/>
     <Footer/>



    </div>
  );
}

export default App;
