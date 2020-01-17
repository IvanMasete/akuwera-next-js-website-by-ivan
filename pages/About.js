
import Navebar from './navebar';
import Layout from './myLayout';

const About =() => (
     <div>
   <Navebar/>
    <h1>About</h1>
    <img src="/images/FB3.jpg"/>
    <h2>Our founding Members</h2>
    <p>This foundation is based on helping children especially the needy children providing for them basics like food,cloths, and housing like especially for those who do not have shelter.</p>
    <p>They can be contacted from their registerd lines and they are located at mabirizi complex.</p>
    <p>For any help to the children from any good samaritans , its welcome and God will award your abundantly.</p>
    <style jsx>{`
            h1,h2{
                color:blue;
                text-align:center;
            }
              
              `}</style>
     </div>
  );
export default About;
