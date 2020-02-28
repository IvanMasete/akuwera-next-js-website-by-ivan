import Link from 'next/link';
import Layout from './myLayout';
import 'font-awesome/css/font-awesome.min.css';
import Menu from './menu';
const navebar=() => (
    
    <div>
      <button class = "navebar-toggle" type="button" data-toggle="collapse"></button>
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
    <img class="gb_ua gb_7d" alt="" aria-hidden="true" src="https://www.gstatic.com/images/branding/product/1x/sheets_48dp.png" srcset="https://www.gstatic.com/images/branding/product/1x/sheets_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/sheets_48dp.png 2x "/>
        <span class="gb_6d gb_zc">MENU</span>
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
        padding:60px;
        justify-content:center;
        display:inline-flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content: flex-start;
        min-height:120px;
        line-height:100px;
        overflow:hidden;
        width:100%;
        }
        btn:focus, .btn:active, button:focus, button:active {
            outline: none !important;
            box-shadow: none !important;
          }
     ul li {
        .btn:focus, .btn:active, button:focus, button:active 
            outline: none !important;
            box-shadow: none !important;
          
         font-size:18px;
         text-alignment:center;
         padding:50;
         width:10;
         position:relative;
         margin-left:40px;
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
 