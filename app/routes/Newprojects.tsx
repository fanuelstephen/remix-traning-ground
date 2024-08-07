import type { ActionFunctionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { useActionData, Form, useNavigation } from '@remix-run/react';

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const [errors, project] = await createProject(formData);
  if (errors) {
    const values = Object.fromEntries(formData);
    return json({ errors, values });
  }
  return redirect(`/project/${project.id}`);
};

export default function NewProject() {
  const navigation = useNavigation();
  console.log('the navigario', navigation);
  const actionData = useActionData<typeof action>();
  console.log('my form Data', actionData);

  return (
    <Form
      method="post"
      className="bg-white p-10 flex justify-center items-center"
    >
      <fieldset
        disabled={navigation.state == 'submitting'}
        className="border p-6"
      >
        <div className="flex justify-between gap-5">
          <p>
            <label>
              Name:{' '}
              <input
                name="name"
                type="text"
                defaultValue={actionData ? actionData?.values.name : undefined}
                className="border w-full p-1"
              />
            </label>
          </p>

          {actionData && actionData?.errors.name ? (
            <p style={{ color: 'red' }}>{actionData.errors.name}</p>
          ) : null}

          <p>
            <label>
              Description:
              <br />
              <textarea
                name="description"
                defaultValue={
                  actionData ? actionData?.values.description : undefined
                }
                className="border w-full p-1"
              />
            </label>
          </p>
          {actionData && actionData?.error.description ? (
            <p style={{ color: 'red' }}>{actionData?.error.description}</p>
          ) : null}
        </div>
        <p>
          <button
            type="submit"
            className="bg-black py-2 px-6 text-white rounded-md"
          >
            {navigation.state == 'submitting' ? 'Creating..' : 'Create'}
          </button>
        </p>
      </fieldset>
    </Form>
  );
}
