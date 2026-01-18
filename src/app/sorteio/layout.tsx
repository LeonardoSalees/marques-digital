import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "SORTEIO: Projeto Impulso Digital | Marques Digital",
  description: "Concorra a uma de 03 estruturas digitais de elite totalmente gratuitas. Inscreva-se agora!",
  openGraph: {
    title: "SORTEIO: Projeto Impulso Digital",
    description: "03 Vagas Gratuitas para Empresas e Autônomos.",
    images: ["/og-image.png"],
  },
}

export default function SorteioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}