import Link from 'next/link';
import Layout from './myLayout';
import Navebar from './navebar'
import Index from './index'
const menu=() => (
   
   <div>
   <ul>
       <Navebar/>
       <Index/>

       <li><Link href="/index"><a>MENU</a></Link></li>
       
    <li><Link href="/index"><a>HOME</a></Link></li>
         <li><Link href="/information"><a>Information</a></Link></li>
         <li><Link href="/gallery"><a>Gallery</a></Link></li>
         <li><Link href="/Contact"><a>Contact</a></Link></li>
         </ul>  
       </div>
       

);
export default menu;
 