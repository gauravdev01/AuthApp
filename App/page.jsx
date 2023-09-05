import UserInfo from "@/components/UserInfo";
import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <div className="grid place-items-center h-screen -mt-24">
        <UserInfo />
      </div>
    );
  } else {
    return (
      <main>
        <LoginForm />
      </main>
    );
  }
}
