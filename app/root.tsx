import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import './tailwind.css';
import Breadcrumb from './components/Breadcrumb';
import appStylesHref from '~/style/app.css?url';
import { LinksFunction } from '@remix-run/node';
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: appStylesHref },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Breadcrumb />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  // const matches = useMatches();
  return (
    <div className="bg-gray-100 max-w-screen pl-10 pr-10 pt-10">
      <header>
        <h1 className="text-5xl text-center">Remix Training Ground</h1>
        <div className="flex items-center justify-between">
          <img src="/logo.png" alt="logo" className="w-40" />
          <nav className="mb-10">
            <ul className="flex items-center gap-3">
              <NavLink
                to="/Home"
                className={({ isActive }) =>
                  isActive ? 'bold underline text-blue-500' : 'text-black'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'bold underline text-blue-500' : 'text-black'
                }
              >
                About
              </NavLink>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive ? 'bold underline text-blue-500' : 'text-black'
                }
              >
                Product
              </NavLink>
              <NavLink
                to="/people"
                className={({ isActive }) =>
                  isActive ? 'bold underline text-blue-500' : 'text-black'
                }
              >
                People
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>

      {/* <header>
        <ol>
          {matches
            .filter((match) => match.handle && match.handle.breadcrumb)
            .map((match, index) => (
              <li key={index}>{match.handle.breadcrumb(match)}</li>
            ))}
        </ol>
      </header> */}
      <Outlet />
    </div>
  );
}
