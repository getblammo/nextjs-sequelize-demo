import { getUser } from "@/lib/auth";

export default async function Home() {
  const user = await getUser();

  return (
    <div className="container">
      <h1>Welcome to Sequelize Demo</h1>
      <p>A simple Next.js app with Sequelize ORM and PostgreSQL.</p>
      {user ? (
        <div className="user-info">
          <p>Signed in as <strong>{user.name}</strong> ({user.email})</p>
          <p><a href="/dashboard">Go to Dashboard</a></p>
        </div>
      ) : (
        <p style={{ marginTop: "1rem" }}>
          <a href="/signup">Create an account</a> or <a href="/login">sign in</a> to get started.
        </p>
      )}
    </div>
  );
}
