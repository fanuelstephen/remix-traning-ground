import { json, useLoaderData } from '@remix-run/react';

export const loader = async () => {
  try {
    const response = await fetch(
      'http://localhost:1337/api/products?populate=*'
    );
    if (!response.ok) {
      throw new Error('fail to fetch data');
    }
    const products = await response.json();

    return json(products.data);
  } catch (error) {
    console.error('error', error);
    throw error;
  }
};

export default function Product() {
  const products = useLoaderData();

  return (
    <div>
      <section className="bg-cover bg-center h-[300px] flex flex-col justify-center items-center text-black p-4 md:p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover the Key Features
        </h1>
        <p className="text-lg md:text-xl max-w-3xl text-center mb-8">
          Our product offers a comprehensive set of features to streamline your
          workflow and boost your productivity.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border bg-card text-card-foreground w-full max-w-sm rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            data-v0-t="card"
          >
            <img
              src={`http://localhost:1337${product.attributes.Images.data.attributes.url}`}
              alt={product.attributes.Name}
              width="500"
              height="400"
              className="w-full h-56 object-cover"
            />
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <div
                  className="inline-flex w-fit items-center whitespace-nowrap border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-primary text-primary-foreground px-2 py-1 rounded-md text-sm font-medium"
                  data-v0-t="badge"
                >
                  {product.attributes.Category}
                </div>
                <div className="text-lg font-bold">
                  ${product.attributes.Price}
                </div>
              </div>
              <h3 className="text-xl font-semibold">
                {product.attributes.Name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {product.attributes.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
