import Navebar from './navebar'; 
const Gallery=() => (
 
  <div class="img">  
    
      <Navebar/>
    <h1>Gallery</h1>
    <li>
    <img src="/images/FB.jpg"/>
    <img src="/images/FB1.jpg"/>
    <img src="/images/FB2.jpg"/>
    <img src="/images/FB3.jpg"/>
    </li>
    <li2>
    <img src="/images/FB4.jpg"/>
    <img src="/images/FB5.jpg"/>
    <img src="/images/FB6.jpg"/>
    <img src="/images/FB7.jpg"/>
    </li2>
    <li3>
    <img src="/images/FB8.jpg"/>
    <img src="/images/FB16.JPG"/>
    <img src="/images/FB10.jpg"/>
    <img src="/images/FB11.jpg"/>
    </li3>
    <li4>
    <img src="/images/FB12.jpg"/>
    <img src="/images/FB15.JPG"/>
    <img src="/images/FB14.JPG"/>
    
    <img src="/images/FB17.JPG"/>
    </li4>
   
    
    <style jsx>{`

           h1{
                color:blue;
                text-align:center;
                padding:15px;
                margin:300px;
                margin-top:-10px;
                margin-right:30px;
            }
            li4{
               display:inline-flex;
               flex-direction:row;
               margin-left:-300px;
               justify-content:flext-end;
               padding:15px;
               margin-right:30px;
               margin-top:-900px;
               
           }
           li{
            display:inline-flex;
            flex-direction:row;
            margin-left:-300px;
            justify-content:flext-end;
            padding:15px;
            margin-right:30px;
            margin-top:-1000px;
            min-height:120px;
            line-height:-300px;
            font-variant:small-caps;
            
        }
        li2{
         display:inline-flex;
         flex-direction:row;
         margin-left:-300px;
         justify-content:flext-end;
         padding:15px;
         margin-right:30px;
         margin-top:-900px;
         min-height:120px;
         line-height:-300px;
         font-variant:small-caps;
         
     }
     li3{
      display:inline-flex;
      flex-direction:row;
      margin-left:-300px;
      justify-content:flext-end;
      padding:15px;
      margin-right:30px;
      margin-top:-900px;
      min-height:120px;
      line-height:-300px;
      font-variant:small-caps;
      
  }
           
            
         img{
               pading:15px;
               margin:300px;
               margin-top:0px;
               margin-right:-295px;
               border:4px solid grey;
               position:relative;
               width:300px;
               height:300px;
               margin-top:-50px;
               
             
            
               

           }
              `}</style>
              
   </div>
);
export default Gallery;