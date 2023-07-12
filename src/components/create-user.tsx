'use client'
import { createUser } from "@/lib/actions";

export default function CreateUserButton(){
  return <button
  onClick={() => createUser()}
  >Criar</button>
}