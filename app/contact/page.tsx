'use client';
import { useRouter } from "next/navigation";

//  export const metadata = {title: 'contact'}

export default function Contact(){
 
const router = useRouter();

const handleSendContactForm = () =>{
console.log('formulaire de contact envoyé avec succes');
// Rediriger l'utilisateur vers l'accueil 

    router.push('/');
    // Rediriger l'utilisateur vers l'accueil 
    // Rediriger l'utilisateur vers la dernier page visiter avec router.back()



 }
  return (

    <>
    <h1>Contact Page</h1>
    <button onClick={handleSendContactForm} 
    style={{
      
      color: 'red',
      padding: '0.2rem',
      cursor: 'pointer'  // Cursur pointer pour rendre le bouton interactif
    }}
    >Valider le formulaire</button>
    </> )
}
