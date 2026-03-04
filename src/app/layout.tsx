import "./globals.css";
import { getUser } from "@/lib/auth";

export const metadata = {
  title: "Next.js Sequelize Demo",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  return (
    <html lang="en">
      <body>
        <nav>
          <a href="/">
            <strong>Sequelize Demo</strong>
          </a>
          <div>
            {user ? (
              <>
                <span>Hello, {user.name}</span>
                <a href="/dashboard">Dashboard</a>
                <a href="/logout">Logout</a>
              </>
            ) : (
              <>
                <a href="/login">Login</a>
                <a href="/signup">Sign Up</a>
              </>
            )}
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
