import { Link, NavLink } from '@remix-run/react';

const products = [
  { id: '1', name: 'Product 1' },
  { id: '2', name: 'Product 2' },
  { id: '3', name: 'Product 3' },
];

function productList() {
  return (
    <div>
      <h1 className="text-3xl">Product list </h1>
      <ul className="m-4 flex flex-col gap-3">
        {products.map((product) => (
          <li key={product.id}>
            <Link
              to={`/dashboard/productList/${product.id}`}
              className="hover:underline"
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
      <NavLink to="/dashboard">
        <button className="bg-violet-500 hover:bg-violet-600 text-white focus:outline-none p-2 rounded-lg ml-3">
          Go to back dashboard
        </button>
      </NavLink>
    </div>
  );
}

export default productList;
