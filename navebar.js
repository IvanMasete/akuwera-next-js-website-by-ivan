import Link from 'next/link';
import Layout from './myLayout';
import Menu from './menu';
const navebar=() => (
   
   <div>
       <Layout/>
    <ul>
    
    <li><Link href="/navebar"><a>MENU</a></Link></li>
    <li><Link href="/"><a>HOME</a></Link></li>
         <li><Link href="/information"><a>Information</a></Link></li>
         <li><Link href="/gallery"><a>Gallery</a></Link></li>
         </ul> 
         
    <style jsx>{`
    ul {
        background:#333;
        color:#fff;
        list-style: none;
        text-alignment:center;
        margin-left:-30px;
        padding:20;
        justify-content:center;
        
        
        
    }
     ul li {
         font-size:18px;
         margin-right:30px
         text-alignment:center;
         padding:20;
         position:relative;
         margin-left:170px;
         display:flex;
     }
     ul li a{
         color:#fff;\
         text-decoration:none;
     }
    
    
    
    
    `}</style>
    
    
    </div>
    
    
    
);
export default navebar;
 