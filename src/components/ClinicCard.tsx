'use client'
import { Clinic } from "@/types/clinic.types"
import { useRouter } from "next/navigation"


export default function ClinicCard({ clinic }: { clinic: Clinic }) {

    //const router = useRouter();
    //const handleClick = () => {router.push(`/clinic/${clinic.id}`)}

  return (
    <div className="bg-white shadow p-4 rounded-lg hover:shadow-lg">
      <h2 className="text-xl font-semiboldm text-gray-900">{clinic.nome}</h2>
      <p className="text-gray-600">{clinic.especialidade}</p>
      <p className="text-gray-500">{clinic.localizacao}</p>
    </div>
  )
}
