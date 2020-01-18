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
    Menu
    </a>
    </Link>
    </li>
    <li><Link href="/">
        <a>
        <i className="fa fa-bars"></i>
        Home</a>
      </Link></li>
         <li><Link href="/About"><a><i className="fa fa-user"></i>
         About</a>
         </Link>
         </li>
         <li><Link href="/gallery"><a><i className="fa fa-camera"></i>Gallery</a></Link></li>
         <li><Link href="/Contact">
             <a>
             <i className="fa fa-inbox"></i>
                 Contact</a></Link></li>
                 <li><Link href="/Donate"><a><i className="fa fa-book"></i>Donate</a></Link></li>
         </ul> 
         
    <style jsx>{`
    ul {
        background:#333;
        color:#fff;
        list-style: none;
        text-align:center;
        margin-left:-30px;
        padding:30px;
        justify-content:center;
        display:flex;
        min-height:120px;
        line-height:100px;
        overflow:hidden;
        
        
        
    }
     ul li {
         font-size:18px;
         margin-right:20px
         text-alignment:center;
         padding:40;
         position:relative;
         margin-left:50px;
         display:flex;
         float:left;
         color:#f2f2f2;
         font-family:"Times New Roman" Times, serif;
         font-style:italic;
         font-weight:bold;
         font-variant: big-caps;
     }
     ul li a{
         color:#f2f2f2;\
         text-decoration:none;
         display:block;
         
     }
     header{
         text-align:center;
         background-color:f1f1f1;
     }
     a1{
         color:blue;

     }
    
    
    
    
    `}</style>
    
    
    </div>
    
    
    
);
export default navebar;
 