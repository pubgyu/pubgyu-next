import '@/styles/globals.scss'
import {getServerSession} from "next-auth";
import {authOptions} from "@/api/auth/[...nextauth]";
import Nav from "@/components/nav";

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);
  
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <Nav session={session} />
          {children}
        </div>
      </body>
    </html>
  )
}
