import Header from "../components/Header";
import ProductList from "../components/ProducList";
import Footer from "../components/Footer/index";
import products from "../json/books.json";

function Home() {

    return (
      <div className="container mx-auto main-layout bg-gray-900 min-h-screen">
        <Header 
          title="Welcome to the Store"
          slogan="The best place to buy your favorite products"
        />
        <ProductList products={products} className="content" /> 
        <Footer className="footer" />
      </div>
    )
  }
  
  export default Home;