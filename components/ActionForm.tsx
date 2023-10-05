import { experimental_useFormStatus } from "react-dom"

type ActionFormType = {
  actionHandler: ((formData: FormData) => void),
  type: string,
}

const ActionForm = ({ actionHandler, type }: ActionFormType) => {
  const { pending } = experimental_useFormStatus()

  return (
    <div className="p-4 border grid grid-cols-1">
      <h4 className="mb-4 font-medium underline">{type} Expense</h4>

      <form action={actionHandler} className="grid gap-3">
        <div className="flex flex-row gap-3">
          <label htmlFor="date" className="text-sm py-1 w-16">Date</label>
          <input type="date" id="date" name="date" className="border text-sm w-60" />
        </div>
        <div className="flex flex-row gap-3">
          <label htmlFor="amount" className="text-sm py-1 w-16">Amount</label>
          <input type="number" id="amount" name="amount" className="border text-sm w-60" />
        </div>
        <div className="flex flex-row gap-3">
          <label htmlFor="type" className="text-sm py-1 w-16">Type</label>
          <div>
            <div className="flex flex-row gap-3">
              <input type="radio" name="type" id="type" value="expenses" />
              <span className="text-sm py-1">Expenses</span>
            </div>
            <div className="flex flex-row gap-3">
              <input type="radio" name="type" id="type" value="income" />
              <span className="text-sm py-1">Income</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <label htmlFor="desc" className="text-sm py-1 w-16">Desc</label>
          <textarea id="desc" name="desc" className="border text-sm w-60"></textarea>
        </div>
        <div className="flex flex-row gap-3">
          <div className="py-1 w-16"></div>
          <button className="
            text-sm px-2 
            uppercase 
            font-bold 
            text-gray-700
            border 
            hover:bg-slate-100" aria-disabled={pending} disabled={pending}>
            {!pending ? 'Save' : 'Saving...'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ActionForm