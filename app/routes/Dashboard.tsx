import { NavLink } from '@remix-run/react';

function Dashboard() {
  return (
    <div className="flex justify-center flex-col mt-10">
      <h1 className="text-3xl">Dashboard page goes here</h1>
      <nav className="mt-4 flex gap-4">
        <NavLink to="profile" className="hover:underline">
          Profile
        </NavLink>
        <NavLink to="setting" className="hover:underline">
          Setting
        </NavLink>
        <NavLink to="productList" className="hover:underline">
          Product List
        </NavLink>
        <NavLink to="user" className="hover:underline">
          User
        </NavLink>
      </nav>
    </div>
  );
}

export default Dashboard;
