"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

const RegisterPage = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const router = useRouter();

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }
    
    try {
        const reg = await fetch('api/auth/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {email,
                    password
                }
            ),
        })
        const data = await reg.json();
        if(!reg.ok){
            throw new Error(data.error || "Registration failed");
        }
        console.log(data);
        router.push("/login");

    } catch (error) {
        console.error(error);  
        
    }
}
  return (
    <div>
      RegisterPage
    </div>
  )
}

export default RegisterPage
