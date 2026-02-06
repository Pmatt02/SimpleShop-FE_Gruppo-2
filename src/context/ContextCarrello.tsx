import { createContext, useState } from 'react'
import type { Product } from '../types'
import type { ReactNode } from 'react'

export interface ContextTypeCarrello {
  products: Product[]
  aggiungiProdotto: (item: Product) => void
  rimuoviProdotto: (id: number) => void
  svuotaCarrello: () => void
  totaleImporto: () => number
}

export const ContextCarrello = createContext<ContextTypeCarrello>(
  {} as ContextTypeCarrello
)
export type ProdottoNelCarrello = Product & { quantity: number }
export const ProviderCarrello = ({ children }: { children: ReactNode }) => {
  const [products, aggiornaCarrello] = useState<ProdottoNelCarrello[]>([])

  const aggiungiProdotto = (prodotto: Product) => {
    aggiornaCarrello((valoreAttuale: ProdottoNelCarrello[]) => {
      const trovato = valoreAttuale.find((p) => p.id === prodotto.id)

      if (trovato) {
        return valoreAttuale.map((p) =>
          p.id === prodotto.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      } else {
        return [...valoreAttuale, { ...prodotto, quantity: 1 }]
      }
    })
  }

  const rimuoviProdotto = (id: number) => {
    aggiornaCarrello((valoreAttuale) =>
      valoreAttuale.filter((prodotto) => prodotto.id !== id)
    )
  }

  const svuotaCarrello = () => {
    aggiornaCarrello([])
  }

  const totaleImporto = () => {
    return products.reduce((total, prodotto) => total + prodotto.price, 0)
  }

  return (
    <ContextCarrello.Provider
      value={{
        products,
        aggiungiProdotto,
        rimuoviProdotto,
        svuotaCarrello,
        totaleImporto,
      }}
    >
      {children}
    </ContextCarrello.Provider>
  )
}
