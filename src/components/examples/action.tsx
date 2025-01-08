import { useActionState } from 'react'

export default function ActionExample() {
  const [message, submit, isPending] = useActionState<string, FormData>(
    (previous, data) => {
      return [previous, data.get('message')].join('-')
    },
    'hello world!'
  )

  return (
    <form action={submit}>
      <h3>{message}</h3>
      <div className="mt-2">
        <input className="border px-2 py-1" type="text" name="message" />
        <button className="ml-2 rounded-sm border px-2 py-1">Submit</button>
      </div>
      {isPending && <p>Loading...</p>}
    </form>
  )
}
