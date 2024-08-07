// types.ts
export interface PersonAttributes {
  Name: string;
  Age: number;
  Gender: string;
  BirthOfDate: string;
  Address: string;
  PhoneNumber: string;
  Email: string;
  Occupation: string;
  MaritalStatus: string;
  Nationality: string;
  EducationLevel: string;
  InterestsHobbies: string;
  Skills: string;
  LanguagesSpoken: string;
  Bio: string;
  Image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

export interface Person {
  id: number;
  attributes: PersonAttributes;
}

export interface PeopleResponse {
  data: Person[];
}
