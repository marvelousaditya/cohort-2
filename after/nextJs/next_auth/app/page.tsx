import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  return <div>{JSON.stringify(session)}</div>;
}

// "use client";
// import { useSession, SessionProvider, signOut, signIn } from "next-auth/react";

// export default function Home() {
//   return (
//     <SessionProvider>
//       <Ex />
//     </SessionProvider>
//   );
// }

// function Ex() {
//   const session = useSession();
//   return (
//     <div>
//       {session.status === "authenticated" && (
//         <button onClick={() => signOut()}>Logout</button>
//       )}
//       {session.status !== "authenticated" && (
//         <button onClick={() => signIn()}>Signin</button>
//       )}
//     </div>
//   );
// }
