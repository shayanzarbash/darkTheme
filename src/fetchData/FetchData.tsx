
import axios from "axios";
import { Person } from '../components/cart/CartIcon';

const fetchPosts = async (): Promise<Person[]> => {
    const { data } = await axios.get('https:/jsonplaceholder.typicode.com/users')
    return data
}

export default fetchPosts;