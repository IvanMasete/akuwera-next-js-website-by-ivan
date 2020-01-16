import Link from 'next/link';
import Layout from './myLayout';
import 'font-awesome/css/font-awesome.min.css';
import Menu from './menu';
const navebar=() => (
   
   <div>
       <Layout/>
    <ul>
    
    <li><Link href="/navebar">
    <a>
    <i className="fa fa-podcast"></i>
    Menu
    </a>
    </Link>
    </li>
    <li><Link href="/">
        <a>
        <i className="fas fa-address-card"></i>
        Home</a>
      </Link></li>
         <li><Link href="/About"><a><i className="fas fa-child"></i>
         About</a>
         </Link>
         </li>
         <li><Link href="/gallery"><a>Gallery</a></Link></li>
         <li><Link href="/Contact">
             <a>
             <i className="fal fa-id-card"></i>
                 Contact</a></Link></li>
                 <li><Link href="/Donate"><a>Donate</a></Link></li>
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
        min-height:80px;
        line-height:80px;
        
        
        
    }
     ul li {
         font-size:18px;
         margin-right:30px
         text-alignment:center;
         padding:30;
         position:relative;
         margin-left:100px;
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
 