type Role = "admin" | "user" | "super-admin";

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
/**
 * How do we ensure that role is only one of:
 * - 'admin'
 * - 'user'
 * - 'super-admin'
 */

//here a param is more than 1 type
//use can type in a literal
//   role: Role;
// }

//this is called a decriminated union


//we have a user here and its descriminating on role
type User = {
  id: number;
  firstName: string;
  lastName: string;
} & (  //& used for intersection
  | {
      role: "admin";
      adminPass: string;
    }
  | {
      role: "user";
    }
  | {
      role: "super-admin";
      superPass: string;
    }
);

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
