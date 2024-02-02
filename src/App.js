import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './pages/Home/home.css'
import './style/media.css';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import Team from './pages/Team/Team';
import Service from './pages/Service/Service';
// import Header from './pages/Header/Header';
// import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/team' element={<Team />} />
        <Route path='/service' element={<Service />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
     
    </div>
  );
}

export default App;
