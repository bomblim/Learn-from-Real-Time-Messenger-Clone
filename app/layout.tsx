import "./globals.css";
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth'
import { Inter} from 'next/font/google'
import ToasterContext from "./context/ToasterContext";
import AuthContext from "./context/AuthContext";

const inter = Inter({ subsets: ['latin']})

export const metadata = {
  title: "Messenger Clone",
  description: "follow tutorial of Messager",
};


export default function RootLayout({
  children, session
}: {
  children: React.ReactNode,
  session: Session | null
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
