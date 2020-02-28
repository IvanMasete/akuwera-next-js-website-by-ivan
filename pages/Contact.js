import Layout from './myLayout';
import Navebar from './navebar';
import Link from 'next/link';
const Contact = () => (
     <div>
       
            <Navebar/>
       <h>CONTACT US</h>
            <form>
  <div class="form-group">
  <h3> <label for="exampleInputName">Your Names</label>
    <input type="Name" class="form-control" id="exampleInputNames" aria-describedby="NamelHelp"></input></h3>
    <small id="NameHelp" class="form-text text-muted"></small>
   <h3> <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input></h3>
    <small id="emailHelp" class="form-text text-muted"></small>
    We'll never share your email with anyone else
  </div>
  <div class="form-group">
   <h3> <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input></h3>
    Please keep your password strong and secret
  </div>
  <h3> <label for="exampleInputPhoneNumber">Telephone Number</label>
    <input type="Phone Number" class="form-control" id="exampleInputPhoneNumber" aria-describedby="NumberHelp"></input></h3>
    <small id="NumberlHelp" class="form-text text-muted"></small>
  <div class="form-group form-check">
   <h5> <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label></h5>
    </div>
 <h> <button type="submit" class="btn btn-primary">Submit</button></h>
</form>
  <img src="https://ssl.gstatic.com/docs/templates/thumbnails/1lR-gfTmxpmKNd-kmx80_VbbVgOU3F2QkdNWd8s4j4KA_400.png"/>
              <style jsx>{`
               img{
                padding:20px;
                margin-right:70px;
                text-align:center;
                margin-left:400px;
             }
                h3{
                  padding:20px;
                 min-height:100px;
                  height:"1000px";
                  font-size:"400px";
                  }
                  h5{
                    color:blue;
                    font-size:"500px";
                    padding:20px;
                    font-weight:bold;
                    }
              h2,h1{
                color:blue;
                font-size:bold;
            }
            h{
              background-color:orange;
              padding:10px;
              margin-right:700px;
              text-align:center;
              margin:210px;
              margin-left:500px;
    
          }
              `}</style>
            
              </div>
              
              

 );
export default Contact;