import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      This is the index page
      <div><Link to="/events">Go to events</Link></div>
    </div>
  )
}