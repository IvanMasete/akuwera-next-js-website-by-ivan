import Layout from './myLayout';
import Link from 'next/link';
import Navebar from './navebar';

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'HOME' },
    { id: 'learn-nextjs', title: 'About' },
    { id: 'deploy-nextjs', title: 'GALLERY' }
  ];
  
}

export default function Blog() {
  return (
   
   <div>
      <ul>
      <Navebar>

 

        {getPosts().map(post => (
          <li key={post.id}>
            <Link href="/p/[id]" as={`/p/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
      
            
        ))}
        </Navebar>
        <img src="/images/FB8.jpg"/>
        <h1>Give a Helping Hand</h1>
        <h3></h3>
        <h2>Our Mission</h2>
        <img src="/images/FB9.jpg"/>
        <img src="/images/FB10.jpg"/>
        <img src="/images/FB11.jpg"/>
        <h4>Find Us On Social:</h4>
        
   </ul> 
   <style jsx>{`
            h1{
                color:white;
                background-color:black;
                text-align:center;
                margin-right:120px;
            }
            h2{
              color:blue;
              text-align:center;
          }  }
          h4{
            color:blue;
            text-align:center;
        }
              
              `}</style>
              </div>
   
   
     


   
  );
        }
