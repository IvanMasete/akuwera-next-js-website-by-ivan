import Link from 'next/link';
import Layout from './myLayout';
import 'font-awesome/css/font-awesome.min.css';
import Menu from './menu';
const navebar=() => (
   
   <div>
       <Layout/>
    <ul>
    
    <li><Link href="/navebar">
    <a>MENU
    <i className="fa fa-podcast"></i>
    </a>
    </Link></li>
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
        display:flex;
        
        
        
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
 