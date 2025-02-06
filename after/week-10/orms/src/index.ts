import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
    },
  });
  console.log(res);
}

// insertUser("admin1", "123456", "aditya", "singh");

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.user.update({
    where: { username },
    data: { firstName, lastName },
  });
  console.log(res);
}

// updateUser("admin1", {
//   firstName: "new name",
//   lastName: "singh",
// });

async function getUser(username: string) {
  const res = await prisma.user.findFirst({ where: { username } });
  console.log(res);
}

// getUser("admin1");

async function createTodo(user_id: number, title: string, description: string) {
  const res = await prisma.todo.create({
    data: {
      user_id,
      title,
      description,
    },
  });
  console.log(res);
}

// createTodo(1, "go to gym", "go to gym and do 10 pushups");

async function getTodos(user_id: number) {
  const res = await prisma.todo.findMany({ where: { user_id } });
  console.log(res);
}

// getTodos(1);

async function getTodosAndUserDetails(user_id: number) {
  const todos = await prisma.todo.findMany({
    where: {
      user_id,
    },
    select: {
      user: true,
      title: true,
      description: true,
    },
  });
  console.log(todos);
}

getTodosAndUserDetails(1);
