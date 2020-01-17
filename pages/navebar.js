import Link from 'next/link';
import Layout from './myLayout';
import 'font-awesome/css/font-awesome.min.css';
import Menu from './menu';
const navebar=() => (
   
   <div>
       <Layout/>
       
    <ul>
        <header>
    <img src="/images/FB13.JPG"/>  
    </header>
    <a>+256773787253/</a>
    <a>+1413726-5454</a> 
  <a1>Call us</a1>
    <li><Link href="/index">
    <a>
    <i className="fa fa-podcast"></i>
    Menu
    </a>
    </Link>
    </li>
    <li><Link href="/">
        <a>
        <i className="fa fa-podcast"></i>
        Home</a>
      </Link></li>
         <li><Link href="/About"><a><i class="fas fa-camera fa-sm"></i>
         About</a>
         </Link>
         </li>
         <li><Link href="/gallery"><a>Gallery</a></Link></li>
         <li><Link href="/Contact">
             <a>
             <i className="fal fa-user-visor"></i>
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
        min-height:100px;
        line-height:100px;
        
        
        
    }
     ul li {
         font-size:18px;
         margin-right:30px
         text-alignment:center;
         padding:30;
         position:relative;
         margin-left:70px;
         display:flex;
     }
     ul li a{
         color:#fff;\
         text-decoration:none;
     }
     header{
         text-align:center;
         background-color:grey;
     }
     a1{
         color:blue;
     }
    
    
    
    
    `}</style>
    
    
    </div>
    
    
    
);
export default navebar;
 