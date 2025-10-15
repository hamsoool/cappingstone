import { NextResponse } from "next/server";


export async function GET() {
    return NextResponse.json({message: "Hello from Api!"});
}



export async function POST(req: Request) {

    const data = await req.json()
    const {} = data;

    return NextResponse.json({message: "Hello from Api!"});
}