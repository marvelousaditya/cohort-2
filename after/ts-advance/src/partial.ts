interface UserP {
  id: number;
  name: string;
  age: string;
  email: string;
  password: string;
}

type UpdateProps = Pick<UserP, "name" | "age" | "email">;

type UpdatePropsOptional = Partial<UpdateProps>;

function updateUser(updatedProps: UpdatePropsOptional) {
  // hit the database tp update the user
}
updateUser({});
