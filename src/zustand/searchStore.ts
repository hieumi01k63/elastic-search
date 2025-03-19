import { create } from 'zustand'

interface searchState {
  search: string
  setSearch: (search: string) => void
}

export const useSearchStore = create<searchState>((set) => ({
  search: '',
  setSearch: (search: string) => set({ search }),
}))
