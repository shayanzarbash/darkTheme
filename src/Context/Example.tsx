import CartIcon from '../components/cart/CartIcon';
import { ThemeContext } from './Main';

const Example = ({ children, item }) => {

  return (
    <div>
      <ThemeContext.Provider value={item}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

export default Example;

