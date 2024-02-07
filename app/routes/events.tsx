import { LinksFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

import styles from "~/styles/events.css";

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json([
    { id: "1", name: "Pants", description: "fun things to do", location: "Hasselt" },
    { id: "2", name: "Other event", description: "lets do this", location: "Genk" },
  ]);
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function Events() {
  const events = useLoaderData<typeof loader>();

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Description</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr>
              <th>{event.id}</th>
              <td>{event.name}</td>
              <td>{event.description}</td>
              <td>{event.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}