import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const data = await request.json()

  const calculo = parseFloat(
    (
      (((data.km / data["km/L"]) * data.precoGasolina) / 2) *
      data.dias
    ).toString()
  ).toFixed(2)

  return NextResponse.json({ resultado: calculo })
}
