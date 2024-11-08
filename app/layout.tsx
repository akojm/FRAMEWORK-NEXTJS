/*    metadata = réferencement  */
import Header from "./components/Header";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
       <Header></Header>
        <main>
          {children}
        </main>
        <footer
        style={{
          backgroundColor: 'green',
          padding: '1rem',
          margin: '0px'
        }}
        >
 <h1>Footer</h1>
        </footer>

        </body>
    </html>
  )
}
