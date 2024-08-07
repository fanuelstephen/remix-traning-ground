import { NavLink } from '@remix-run/react';

function Setting() {
  return (
    <div className="mt-10">
      <h1 className="text-3xl mb-5">User setting goes here</h1>
      <NavLink to="/dashboard">
        <button className="bg-violet-500 hover:bg-violet-600 text-white focus:outline-none p-2 rounded-lg">
          Go to back dashboard
        </button>
      </NavLink>
    </div>
  );
}

export default Setting;
