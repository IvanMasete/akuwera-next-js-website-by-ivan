import Link from 'next/link';
import Layout from './myLayout';
import Navebar from './navebar'
import Index from './index'
const menu=() => (
   
   <div>
   <ul>
   <Navebar/>
        <li><Link href="/index"><a>Home</a></Link></li>
        <li><Link href="/menu"><a>Menu</a></Link></li>
         <li><Link href="/information"><a>Information</a></Link></li>
         <li><Link href="/gallery"><a>Gallery</a></Link></li>
         <li><Link href="/Contact"><a>Contact</a></Link></li>
        <img src="/images/FB8.jpg"/>
        <h1>Give a Helping Hand</h1>
        <h3></h3>
        <h2>Our Mission</h2>
        <img src="/images/FB9.jpg"/>
        <img src="/images/FB10.jpg"/>
        <img src="/images/FB11.jpg"/>
        <h4>Find Us On Social:</h4>
        </ul>
        
   
   <style jsx>{`
            h1{
                color:white;
                background-color:black;
                text-align:center;
                margin-right:120px;
            }
            h2{
              color:blue;
              text-align:center;
          }  }
          h4{
            color:blue;
            text-align:center;
        }
              
              `}</style>
       </div>
       

);
export default menu;
 