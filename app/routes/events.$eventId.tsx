import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

const events = [
  { id: "1", name: "Pants" },
  { id: "2", name: "Jacket" },
]

export const loader = async ({
  params,
}: LoaderFunctionArgs) => {
  return json(
    { ...events.find(event => event.id === params.eventId) }
  );
};

export default function Event() {
  const event = useLoaderData<typeof loader>();
  return (
    <div id="event" className="events__single">
      <Link to="/events">Close event details</Link>
      <div key={event.id}>
        This event is {event.name}
      </div>
    </div>
  );
}