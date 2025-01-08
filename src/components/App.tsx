import ActionExample from './examples/action'
import OptimisticExample from './examples/optimistic'
import { SuspenseExample } from './examples/suspense'

function App() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="grid grid-cols-3 gap-4 px-5">
          <div className="p-4 shadow">
            <h2 className="mb-4 text-3xl">Action</h2>
            <ActionExample />
          </div>

          <div className="p-4 shadow">
            <h2 className="mb-4 text-3xl">Optimistic</h2>
            <OptimisticExample />
          </div>

          <div className="p-4 shadow">
            <h2 className="mb-4 text-3xl">Suspense with &quot;use&quot;</h2>
            <SuspenseExample />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
