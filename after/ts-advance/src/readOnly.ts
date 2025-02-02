const a = { name: "adi" };
a.name = "kaddu";
// the above code doesn't throw error even though we are changing value of const ,
// to prevent this we use readonly

interface Ex {
  readonly name: string;
  readonly email: string;
}

const obj: Ex = { name: "aditya", email: "aditya@email.com" };
// obj.name = "kaddu";
// thorws error

type UsersRead = {
  name: string;
  email: string;
};

const user: Readonly<UsersRead> = {
  name: "adi",
  email: "adi@gmail.com",
};
