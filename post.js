import { useRouter} from 'next/router';
import Layout from './myLayout';
const page = () => {
    const router = useRouter();
      
    return(
        <Layout>
            <h1>{router.query.title}</h1>
            <p>This is mine d</p>
            </Layout>

            
    );
};
export default page;