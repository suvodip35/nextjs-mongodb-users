import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export async function GET(request) {
  await dbConnect();

  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(request) {
  await dbConnect();

  try {
    const body = await request.json();

    const user = await User.create(body);

    return new Response(JSON.stringify(user), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
