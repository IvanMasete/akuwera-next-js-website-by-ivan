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
  <div class="form-group">
  <h3> <label for="exampleInputName">Your Names</label>
    <input type="Name"  class="form-control" id="exampleInputNames" aria-describedby="NameHelp"></input></h3>
    <small id="NameHelp" class="form-text text-muted" ></small>
    <h3> <label for="exampleInputRemarks">Remarks...</label>
  <input type="Remarks" class="form-control" id="exampleInputRemarks" aria-describedby="RemarksHelp"></input></h3>
    <small id="RemarksHelp" class="form-text text-muted"></small>
    </div>
   
      <h2>YOUR DONATION:</h2>
      <h3> <label for="exampleInputCurrency">Currency</label>
    <input type="Currency" class="form-control" id="exampleInputCurrency" aria-describedby="CurrencyHelp"></input></h3>
    <small id="CurrencyHelp" class="form-text text-muted"></small>
    <h3> <label for="exampleInputDonationAmount">Donation Amount</label>
    <input type="DonationAmount" class="form-control" id="exampleInputDonationAmount" aria-describedby="AmountlHelp"></input></h3>
    <small id="AmountHelp" class="form-text text-muted"></small>
      <h4><button type="submit" class="btn btn-primary">Donate</button></h4>
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
  </button>
  
</div>
      </form>
      <img src="https://responsivedesign.is/wp-content/uploads/2017/02/HAML-HTML-Preprocessor-300x195.jpg" alt="Boat" img width ="-300" height="195" class="width-100"/>
       <style jsx>{`
       h2{
          background-color:orange;
          padding:10px;
          margin-right:700px;
          text-align:center;
          margin:210px;
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
         min-height:145px;
         height:"1000px";
         font-size:"400pt";
         overflow:auto;
         box-sizing:border-box;
         display:in-line block;

         
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
         background:green;
         margin-bottom: lem;
         text-transform: uppercase;
         flex-wrap:wrap;
         font-weight: 500;
         margin:280px;

           }
           img{
            padding:20px;
            margin-right:70px;
            text-align:center;
            margin-left:400px;
         }
       `}</style>
    </div>
       );
 export default Donate;

 