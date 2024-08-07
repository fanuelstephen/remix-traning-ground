import NewNote from '~/components/NewNote';
import { NavLink } from '@remix-run/react';

function Note() {
  return (
    <div className="rounded-md mt-10">
      <NewNote />
      <div className="flex justify-center items-center flex-col">
        <NavLink to="/home">
          <button className="bg-violet-500 hover:bg-violet-600 text-white focus:outline-none p-2 rounded-lg">
            Go to back home
          </button>
        </NavLink>
      </div>
    </div>
  );
}
export function action() {}

export default Note;
