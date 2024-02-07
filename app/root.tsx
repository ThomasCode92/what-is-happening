import { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts } from '@remix-run/react';
import appStyles from "~/styles/global.css";
import tailwindStyles from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
  { rel: "stylesheet", href: appStyles }
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">
            What's happening
          </h1>
          <div id="detail">
            <Outlet />
          </div>
          <Scripts />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}
