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
        <h>THIS IS WHERE YOU CAN GET MORE INFORMATION</h>
        <p>actually this is all about what the foundation is all about</p>
   </ul> 
   
   
     


   
  );
        }
