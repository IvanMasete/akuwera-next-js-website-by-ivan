import Layout from './myLayout';
import Navebar from './navebar';
import Link from 'next/link';
const Contact = () => (
     <div>
            <Navebar/>
             <h1>How to Find Us </h1>
              <h2>Contact Us</h2>
              <h3>Name<input type="text" name="Name"/></h3>
              <h3>Email<input type="text" name="Email"/></h3>
              <h3>Telephone<input type="text" name="Telephone"/></h3>
              <h4><input type="submit" value="Submit"/></h4>
              <img src="https://ssl.gstatic.com/docs/templates/thumbnails/1lR-gfTmxpmKNd-kmx80_VbbVgOU3F2QkdNWd8s4j4KA_400.png"/>
              <style jsx>{`
               img{
                padding:20px;
                margin-right:70px;
                text-align:center;
                margin-left:400px;
             }
              h4{
                padding:10px;
                margin-right:700px;
                text-align:center;
                margin-right:700px;
                text-align:center;
                margin-left:300px;
                font-size:"400pt";
                background-color:blue;
                }
              h2,h1{
                color:blue;
            }
              `}</style>
              </div>
 );
export default Contact;