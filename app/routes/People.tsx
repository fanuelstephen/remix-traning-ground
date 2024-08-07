import { ActionFunction } from '@remix-run/node';
import { json, redirect, useLoaderData } from '@remix-run/react';
import Profile from '~/components/Profile';
import { PeopleResponse, Person } from '~/components/types';

export const loader = async () => {
  try {
    const res = await fetch('http://localhost:1337/api/people?populate=*');
    if (!res.ok) {
      throw new Error('fail to fetch data');
    }
    const people: PeopleResponse = await res.json();

    return json(people.data);
  } catch (error) {
    console.error(error);
  }
};

export const action: ActionFunction = async ({ request }) => {
  console.log('The request from action:', request);
  const formData = await request.formData();
  const data = {
    Name: formData.get('Name'),
    Age: formData.get('Age'),
    Gender: formData.get('Gender'),
    BirthOfDate: formData.get('BirthOfDate'),
    Address: formData.get('Address'),
    PhoneNumber: formData.get('PhoneNumber'),
    Email: formData.get('Email'),
    Occupation: formData.get('Occupation'),
    MaritalStatus: formData.get('MaritalStatus'),
    Nationality: formData.get('Nationality'),
    EducationLevel: formData.get('EducationLevel'),
    InterestsHobbies: formData.get('InterestsHobbies'),
    Skills: formData.get('Skills'),
    LanguagesSpoken: formData.get('LanguagesSpoken'),
    Bio: formData.get('Bio'),
    // Image: formData.get('Image'),
  };

  console.log('The input data from the user:', data);

  const response = await fetch('http://localhost:1337/api/people', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ data: data }),
  });
  if (!response.ok) {
    console.log(await response.json());
  }
  return redirect('/people');
};

export default function People() {
  const people = useLoaderData<Person[]>();
  console.log('the people', JSON.stringify(people, null, 2));

  return (
    <main>
      <Profile />
      <div className="rounded-lg w-full grid gap-[1.5rem] grid-cols-3 bg-white p-[40px]">
        {people.map((person) => (
          <div key={person.id} className="shadow-xl">
            <div className="flex flex-col space-y-1.5  bg-black text-gray-50 p-6 rounded-t-lg">
              <div className="flex items-center gap-4">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-16 h-16">
                  <img
                    className="w-full object-cover bg-white"
                    // src="/asset/placeholder-user.avif"
                    src={
                      `http://localhost:1337${person.attributes.Image.data?.attributes.url}` ||
                      " '/asset/placeholder-user.avif'"
                    }
                    alt="phot"
                  />
                </span>
                <div>
                  <div className="text-xl font-semibold">
                    {person.attributes.Name}
                  </div>
                  <div className="text-sm">
                    {person.attributes.Age} years old,{' '}
                    {person.attributes.Gender}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 grid gap-4">
              <div className="grid gap-1">
                <div className="text-sm font-bold ">Date of Birth</div>
                <div>{person.attributes.BirthOfDate}</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-bold ">Address</div>
                <div>{person.attributes.Address}</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-bold ">Phone</div>
                <div>{person.attributes.PhoneNumber}</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-bold ">Email</div>
                <div>{person.attributes.Email}</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-bold ">Occupation</div>
                <div>{person.attributes.Occupation}</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-bold ">Marital Status</div>
                <div>{person.attributes.MaritalStatus}</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-bold ">Nationality</div>
                <div>{person.attributes.Nationality}</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-bold ">Education</div>
                <div>{person.attributes.Education}</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-bold ">Interests/Hobbies</div>
                <div>{person.attributes.InterestsHobbies}</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-bold ">Skills</div>
                <div>{person.attributes.Skills}</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-bold ">Languages</div>
                <div>{person.attributes.LanguagesSpoken}</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-bold ">Bio</div>
                <div>{person.attributes.Bio}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
