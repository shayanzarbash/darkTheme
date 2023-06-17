import { NextPage, GetStaticProps } from 'next';
import data from '../../data/data.json';
import { Product } from '../../types/info';
import ProductsGrid from '../../src/components/products/ProductsGrid';

type Props = {
  products: Product[]
}

const Products: NextPage<Props> = ({ products }: Props) => {

  return (
    <div>
      <ProductsGrid  {...{ products }} />
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