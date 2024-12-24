import {About} from './Pages/About';
import { Navbar} from './Pages/Navbar';
import {Home} from './Pages/Home';
import './PageStyles/Layout.css';
import {Contact} from './Pages/Contact';
import { Skills } from './Pages/Skill';
import { Projects } from './Pages/Project';


function Layout(){
    return(
        <>
         <div className='div1'>
            <Navbar/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            
            <Contact/>
            
        </div>
      
        </>
    )
}
export {Layout}