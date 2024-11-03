'use client'; /* Importer Use Client pour les fonction Use.. */
import Link from 'next/link'; 
import "../components/style.css";
// import  "../styles/Header.css";
import { usePathname } from 'next/navigation';

const navLink = [
   {
     href: '/',
     name: 'Home'
    },
   {
     href: '/products',
     name: 'Products'
    },
   {
     href: '/shop',
     name: 'Shop'
    },
   {
     href: '/contact',
     name: 'contact'
    },
     
]

const Header = () => {
const pathname = usePathname();
// console.log(pathname);

  return (
   
    <ul
   
   style={{
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: 'red',
        padding: '1rem',
        margin: '0px',
      }}
        
   
    >
      {navLink.map((link)=>{
         const isActive = pathname.startsWith(link.href);
        return (
          <li key={link.name}>
            <Link href={link.href}
            className={isActive ?  "text-black" : "text-white"}
            >{link.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Header
