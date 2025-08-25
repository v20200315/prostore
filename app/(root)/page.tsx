import ProductList from '@/components/shared/product/product-list';
import { getLatestProduct } from '@/lib/actions/product.actions';

const Homepage = async () => {
  const lastestProducts = await getLatestProduct();
  return (
    <>
      <ProductList data={lastestProducts} title="Newest Arrivals" limit={4} />
    </>
  );
};

export default Homepage;
