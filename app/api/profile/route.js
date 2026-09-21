export async function GET(request) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return Response.json(data);
}

export async function POST(request) {
  const body = await request.json();

  const { name, age, occupation } = body;

  try {
    if (!name || !age || !occupation) {
      return Response.json({ created: false });
    }
    return Response.json({ name, age, occupation, created: true });
  } catch (error) {
    console.log(error + "failed to create the profile");
    return Response.json({ created: false });
  }
}
