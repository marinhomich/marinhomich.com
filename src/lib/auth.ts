import { getServerSession } from "next-auth";

export function getSession(){
  return getServerSession() as Promise<{
    user: {
      id: string;
    };
  } | null>
}