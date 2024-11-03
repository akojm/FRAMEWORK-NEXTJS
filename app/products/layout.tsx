/*   LE LAYOUT LE STATE EST PRÉSERVÉ -  TEMPLATE N'EST PAS PRÉSERVÉ  */
'use client';
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const [info, setInfo] = useState('')
  return (
    <>
    {children}
    <input
    style={{
        border: '1px solid black', 
        padding: '0.5rem',
        margin: '0.5rem'
    }}
    value={info} onChange={(e) => setInfo(e.target.value)}/>
    </>
 
  )
}
