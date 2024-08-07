import { Form } from '@remix-run/react';

export default function Profile() {
  return (
    <Form
      method="post"
      action="/People"
      className="rounded-lg border shadow-xl w-full max-w-4xl mx-auto mb-20 "
    >
      <div className="flex flex-col p-6">
        <h3 className="text-2xl font-semibold">Personal Information</h3>
        <p className="text-sm">
          Please fill out the form below to update your personal details.
        </p>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* grid one */}
        <div className="grid gap-4 h-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label htmlFor="age" className="text-sm font-medium">
                Name
              </label>

              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                id="Name"
                name="Name"
                placeholder="Enter your Name"
                type="text"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="age" className="text-sm font-medium">
                Age
              </label>

              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                id="Age"
                name="Age"
                placeholder="Enter your age"
                type="number"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label htmlFor="gender" className="text-sm font-medium">
                Gender
              </label>
              <select
                id="Gender"
                name="Gender"
                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="none">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="bod" className="text-sm font-medium">
                Birth of Date
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                id="BirthOfDate"
                name="BirthOfDate"
                type="date"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="address" className="text-sm font-medium">
              Address
            </label>
            <textarea
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              id="Address"
              name="Address"
              placeholder="Enter your address"
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone number
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                id="PhoneNumber"
                name="PhoneNumber"
                placeholder="Enter your phone number"
                type="tel"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                id="Email"
                name="Email"
                placeholder="Enter your email address"
                type="email"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <label htmlFor="occupation" className="text-sm font-medium">
              Occupation
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              id="Occupation"
              name="Occupation"
              placeholder="Enter your occupation"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="marital-status" className="text-sm font-medium">
              Marital Status
            </label>
            <select
              id="MaritalStatus"
              name="MaritalStatus "
              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="none">Select marital status </option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="nationality" className="text-sm font-medium">
              Nationality
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              id="Nationality"
              name="Nationality"
              placeholder="Enter your nationality"
            />
          </div>
        </div>

        {/* grdi 2 */}
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="education" className="text-sm font-medium">
              Education Level
            </label>
            <select
              id="EducationLevel"
              name="EducationLevel"
              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="none"> Select education level </option>
              <option value="high_school">High School</option>
              <option value="bachelors">Bachelors</option>
              <option value="masters">Masters</option>
              <option value="doctorate">Doctorate</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="interests" className="text-sm font-medium">
              Interests/Hobbies
            </label>
            <textarea
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              id="InterestsHobbies"
              name="InterestsHobbies"
              placeholder="Enter your interests and hobbies"
            ></textarea>
          </div>
          <div className="grid gap-2">
            <label htmlFor="skills" className="text-sm font-medium">
              Skills
            </label>
            <textarea
              name="Skills"
              id="Skills"
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Enter your skills"
            ></textarea>
          </div>
          <div className="grid gap-2">
            <label htmlFor="languages" className="text-sm font-medium">
              Languages Spoken
            </label>
            <textarea
              id="LanguagesSpoken"
              name="LanguagesSpoken"
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm "
              placeholder="Enter the languages you speak"
            ></textarea>
          </div>
          <div className="grid gap-2">
            <label htmlFor="bio" className="text-sm font-medium">
              Bio/Description
            </label>
            <textarea
              name="Bio"
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm "
              id="Bio"
              placeholder="Enter a brief bio or description"
            ></textarea>
          </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="flex justify-end items-end p-6 ">
        <button
          className="rounded-md text-sm font-medium bg-gray-950 text-white py-3 px-6"
          type="submit"
        >
          Submit
        </button>
      </div>
    </Form>
  );
}
