import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="user-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <p style={{ marginTop: "1rem" }}>
        You are logged in. This page is only visible to authenticated users.
      </p>
    </div>
  );
}
