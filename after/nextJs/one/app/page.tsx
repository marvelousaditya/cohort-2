import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <div>
        Practicing Next <br />
        <Link href="/signup">SignUp karldo</Link>
        <br />
        <Link href="/signin">Signin karldo</Link>
      </div>
    </div>
  );
}

// "use client";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();
//   return (
//     <div>
//       <div>
//         Practicing NextJs <br />
//         <button onClick={() => router.push("/signin")}>Signin karle</button>
//       </div>
//     </div>
//   );
// }
