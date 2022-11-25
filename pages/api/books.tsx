import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type Data = {
  name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method == "POST") {
    return res.send({ name: "this is post" });
  } else if (req.method == "GET") {
    const resData = await get();
    return res.json(resData);
  } else {
    return res.send({ name: "this is not post and get, its something" });
  }
};

export default handler;

// const get = async (req: NextApiRequest) => {
const get = async () => {
  const filePath = path.join(process.cwd(), "data", "books.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileData);
  return data;
};
