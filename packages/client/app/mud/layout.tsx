import { Providers } from "../providers"

export default function MudLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h1>Mud Layout</h1>
      <Providers>{children}</Providers>
    </>
  )
}
