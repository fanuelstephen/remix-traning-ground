import type { MetaFunction } from '@remix-run/node';
import NewNote from '~/components/NewNote';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="rounded-md">
      <NewNote />
    </div>
  );
}
