'use client'
import { useEffect, useState } from "react"
import { Clinic } from "@/types/clinic.types"
import ClinicCard from "@/components/ClinicCard"

export default function HomePage() {
  const [clinics, setClinics] = useState<Clinic[]>([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("/clinics.json")
      .then((response) => response.json())
      .then((data) => setClinics(data))
      .catch((error) => console.error("Erro ao carregar clínicas", error))
  }, [])

  const filteredClinics = clinics.filter((clinic) =>
    clinic.nome.toLowerCase().includes(search.toLowerCase()) ||
    clinic.especialidade.toLowerCase().includes(search.toLowerCase()) ||
    clinic.localizacao.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Clínicas em Angola</h1>
      <h2 className="text-center mb-6 text-gray-700">Pesquisar por nome, especialidade ou localização</h2>

      <input
        type="text"
        placeholder="Pesquisar por nome, especialidade ou localização"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/2 mx-auto block p-3 mb-6 border rounded"
      />

      {filteredClinics.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredClinics.map((clinic) => (
            <ClinicCard key={clinic.id} clinic={clinic} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Nenhuma clínica encontrada.</p>
      )}
    </main>
  )
}
