import "../styles/app.scss"

export const metadata = {
  title: 'Todo App',
  description: 'This is basic Todo App',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
