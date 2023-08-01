import { useState, useEffect } from 'react'
import Example from '../src/Context/Example';
import CardIcon from '../src/components/cart/CartIcon';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';




export const About = () => {

  const queryClient = new QueryClient();




  // init state as Array and Type Array
  // const [person, setPerson] = useState([]);

  // const [cond, setCond] = useState<boolean>(true);

  // const [error, setError] = useState<string>('');



  // // if inside useEffect hook 
  // useEffect(() => {
  //   if (cond) {
  //     getPosts();
  //   }
  // }, []);

  // if (cond) return <h2>Loding</h2>

  return (
    <div>

      <QueryClientProvider client={queryClient}>
        <CardIcon />
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </div>
  )
}

export default About;


