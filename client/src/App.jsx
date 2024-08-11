import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import BlogPost from './pages/BlogPost';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Test from './pages/TestSection'; // Assuming you have a Test page
import FAQ from './pages/FAQSection';   // Assuming you have a FAQ page
import Features from './pages/FeaturesSection'; // Assuming you have a Features page

export default function App() {
  return (
    <BrowserRouter>
      {/* Header */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/blog/:id' element={<BlogPost />} /> {/* Route for individual blog posts */}
        <Route path='/test' element={<Test />} /> {/* Route for Test page */}
        <Route path='/faq' element={<FAQ />} /> {/* Route for FAQ page */}
        <Route path='/features' element={<Features />} /> {/* Route for Features page */}
        
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
