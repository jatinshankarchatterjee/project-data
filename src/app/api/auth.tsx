import { getAuth, clerkClient } from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const client = await clerkClient();

  const user = await client.users.getUser(userId);

  console.log(user);

  // use the user object to decide what data to return

  return res.status(200).json({});
}
