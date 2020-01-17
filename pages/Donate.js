import Navebar from './navebar';
import Layout from './myLayout';
import About from './About';
 const linkStyle ={
marginRight:15,

 };
 const Donate = () => (
   
     <div>
        <Navebar/>
       <h1>Thank you so much for believing in the cause.</h1>
       <h2>YOUR DETAILS:</h2>
       <form>
       <label>
       <h3>Name:<input type="text" name="Name"/></h3>
       <h3>Remarks...<input type="text" name="Remarks..."/></h3>
       </label>
    
      </form>
      <h2>YOUR DONATION:</h2>
      <h3>Currency<input type="text" name="currency"/></h3>
      <h3>Donation Amount<input type="text" name="Donation Amount"/></h3>
      <h4><input type="submit" value="DONATE"/></h4>
       <style jsx>{`
       h2{
          background-color:orange;
          padding:10px;
          margin-right:700px;
          text-align:center;
          margin-left:300px;
       }
       h1{
          color:blue;
          text-align:center;
       }
       h3{
         text-align:center;
         padding:25px;
         margin-right:700px;
         text-align:center;
         margin-left:200px;
         min-height:100px;
         height:"1000px";
         font-size:"400pt";
        
       }
       h4{
         text-align:center;
         padding:10px;
         margin-right:700px;
         text-align:center;
         margin-right:700px;
         text-align:center;
         margin-left:300px;
         font-size:"400pt";
         background-color:green;
        
       }
       
       `}</style>
    </div>
       
 );
 export default Donate;

 