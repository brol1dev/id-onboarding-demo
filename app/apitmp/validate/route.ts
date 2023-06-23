import { NextResponse } from "next/server";

import { ValidateResponse } from "@/app/types";

export async function POST(request: Request) {
  const { body } = request;
  console.log("POST body: ", body);
  const response: ValidateResponse = {
    valid: true,
  };
  return NextResponse.json(response);
}
