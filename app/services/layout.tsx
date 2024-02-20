import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function ServicesLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
     <Link
     href={'/services/jobs'}
     >
        Jobs
     </Link>
     <Link
     href={'/services/people'}
     >
        people
     </Link>
        {children}
      </section>
    )
  }


  