import { NextPage, GetStaticProps } from 'next';
import data from '../../data/data.json';
import { Product } from '../../types/info';
import ProductsGrid from '../../src/components/products/ProductsGrid';

const Products: NextPage<Product> = ({ products }: Product) => {
  return (
    <div>
      <ProductsGrid products={products} />
    </div>
  )
}

export default Products;

export const getStaticProps: GetStaticProps = async () => {
  const products = data.products;
  return {
    props: { products }
  }
}