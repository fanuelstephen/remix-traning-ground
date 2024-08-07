import { json, NavLink, useLoaderData } from '@remix-run/react';
import { MdStar } from 'react-icons/md';

export const loader = async () => {
  try {
    const response = await fetch(
      'http://localhost:1337/api/restaurants?populate=*'
    );
    if (!response.ok) {
      throw new Error('fail to fetch data');
    }
    const restaurants = await response.json();

    return json(restaurants.data);
  } catch (error) {
    console.error(error);
  }
};

export default function Home() {
  const restaurants = useLoaderData();
  console.log('restraurant data in home', restaurants);
  return (
    <div>
      <nav className="flex gap-6">
        <NavLink to="/note" className="underline text-blue-600 mt-4">
          Go to note
        </NavLink>

        <NavLink to="/dashboard" className="underline text-blue-600 mt-4">
          Go to dashboard
        </NavLink>
      </nav>
      <section className="bg-cover bg-center h-[150px] flex flex-col justify-center items-center text-black p-4 md:p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          The Gourmet Grill
        </h1>
        <p className="text-lg md:text-xl max-w-3xl text-center mb-8">
          Experience the finest dining in the heart of the city. Our
          award-winning restaurant offers a delectable menu of expertly crafted
          dishes made with the freshest local ingredients.
        </p>
      </section>
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-8">
        {restaurants.map((restaurant) => (
          <div
            className="bg-background rounded-lg shadow-lg overflow-hidden"
            key={restaurant.id}
          >
            <img
              src={`http://localhost:1337${restaurant.attributes.Image.data[0].attributes.url}`}
              alt={restaurant.attributes.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">
                {restaurant.attributes.Name}
              </h3>
              <p className="text-muted-foreground mb-2">
                {restaurant.attributes.Location}
              </p>
              <div className="flex items-center mb-2">
                <MdStar className="w-5 h-5 fill-primary" />
                <MdStar className="w-5 h-5 fill-primary" />
                <MdStar className="w-5 h-5 fill-primary" />
                <MdStar className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <MdStar className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <span className="ml-2 text-muted-foreground">
                  {restaurant.attributes.Rating}
                </span>
              </div>
              <p className="text-muted-foreground">
                {restaurant.attributes.PriceRange}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
