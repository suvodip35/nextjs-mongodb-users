import dbConnect from '../../../../lib/mongodb';
import User from '../../../../models/User';
import { Types } from 'mongoose';

export async function GET(request, { params }) {
  await dbConnect();

  try {
    const { id } = params;

    if (!Types.ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ error: 'Invalid user ID' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const user = await User.findById(id);

    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(user), {
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

export async function PUT(request, { params }) {
  await dbConnect();

  try {
    const { id } = params;
    const body = await request.json();

    if (!Types.ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ error: 'Invalid user ID' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const user = await User.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(user), {
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

export async function DELETE(request, { params }) {
  await dbConnect();

  try {
    const { id } = params;

    if (!Types.ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ error: 'Invalid user ID' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: 'User deleted successfully' }), {
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
