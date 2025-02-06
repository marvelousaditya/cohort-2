"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                username,
                password,
                firstName,
                lastName,
            },
        });
        console.log(res);
    });
}
function updateUser(username_1, _a) {
    return __awaiter(this, arguments, void 0, function* (username, { firstName, lastName }) {
        const res = yield prisma.user.update({
            where: { username },
            data: { firstName, lastName },
        });
        console.log(res);
    });
}
// updateUser("admin1", {
//   firstName: "new name",
//   lastName: "singh",
// });
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({ where: { username } });
        console.log(res);
    });
}
// getUser("admin1");
function createTodo(user_id, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.create({
            data: {
                user_id,
                title,
                description,
            },
        });
        console.log(res);
    });
}
// createTodo(1, "go to gym", "go to gym and do 10 pushups");
function getTodos(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.findMany({ where: { user_id } });
        console.log(res);
    });
}
// getTodos(1);
function getTodosAndUserDetails(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield prisma.todo.findMany({
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
    });
}
getTodosAndUserDetails(1);
