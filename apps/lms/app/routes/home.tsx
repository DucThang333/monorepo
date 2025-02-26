import { NavLink } from "react-router";

export function meta() {
  return [
    { title: "home page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Home() {
  return <div className="bg-red-900 text-white p-4">
    Home page
    <NavLink to="/student"
    >
      {({ isPending }) => {
        console.log('isPending: ', isPending);
        return <span>
          {isPending ? "Loading..." : "Student"}
        </span>
      }}
    </NavLink>
  </div>;
}
