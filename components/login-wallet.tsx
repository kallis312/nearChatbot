import { useWalletSelector } from "./contexts/WalletSelectorContext"

export default function LoginWallet() {
  const { modal } = useWalletSelector()

  const onLoginWallet = () => {
    modal.show()
  }
  return (
    <div className="flex justify-end pr-12 pb-4">
      <button onClick={onLoginWallet} className="py-2 rounded-md border px-8 ">Login</button>
    </div>
  )
}