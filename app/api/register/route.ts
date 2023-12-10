import prisma from "@/prisma/client";
import { NextRequest } from "next/server";

import { z } from "zod";

const schmea = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schmea.safeParse(body);

  if (!validation.success) {
    return new Response(JSON.stringify(validation.error.errors), {
      status: 400,
    });
  }

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (user) {
    return new Response("User already exists", { status: 400 });
  }

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: body.password,
    },
  });

  return new Response(JSON.stringify(newUser), { status: 201 });
}
