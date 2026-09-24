import { headers } from "next/headers";
// export async function GET(request) {
//   const url = new URL(request.url);

//   const { searchParams } = url;

//   const apiUrl = new URL("https://jsonplaceholder.typicode.com/todos");

//   searchParams.forEach((value, key) => {
//     apiUrl.searchParams.append(key, value);
//   });

//   const res = await fetch(apiUrl);
//   const data = await res.json();
//   console.log(searchParams);

//   return Response.json(data);
// }

//learning headers

// export async function GET(request) {
//   // approach 1 -- getting and setting data in headers
//   const reqHeaders = new Headers(request.headers);

//   reqHeaders.set("username", "Tonmoy");
//   const username = reqHeaders.get("username");

//   const auth = reqHeaders.get("Authorization");
//   console.log(auth);
//   console.log(username);
//   return new Response("hello world");
// }

export async function GET(request) {
  const reqHeaders = await headers();

  console.log(reqHeaders.get("Authorization"));
  console.log(reqHeaders.get("user-agent"));
  return new Response("<h1>hello</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
