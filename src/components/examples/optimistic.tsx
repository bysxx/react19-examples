import { useOptimistic, useState } from 'react'

function OptimisticForm({
  currentName,
  updateName
}: {
  currentName: string
  updateName: (name: string) => void
}) {
  const [optimisticName, setOptimisticName] = useOptimistic(currentName)

  const submitAction = async (formData: FormData) => {
    const newName = (formData.get('name') || '').toString()
    setOptimisticName(newName)
    await updateName(newName)
  }

  return (
    <form action={submitAction}>
      <h3>Your name is: {optimisticName}</h3>
      <div className="mt-2">
        <input className="border px-2 py-1" type="text" name="name" />
        <button className="ml-2 rounded-sm border px-2 py-1">Submit</button>
      </div>
    </form>
  )
}

export default function OptimisticExample() {
  const [name, setName] = useState('Baek')

  async function updateName(newName: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setName(newName)
  }

  return <OptimisticForm currentName={name} updateName={updateName} />
}
