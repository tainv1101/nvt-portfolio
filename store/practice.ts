import { create } from "zustand"

export type usePracticeSizeType = {
  size: { width: number, height: number },
  setSize: (size: { width: number, height: number}) => void
}

export const usePracticeSize = create<usePracticeSizeType>((set) => {
  return {
    size: { width: 0, height: 0 },
    setSize : (size: { width: number, height: number}) => set({size})
  }
} )

export type useSibarType = {
  isExpand: boolean,
  setIsExpand: () => void
}
export const useSibar = create<useSibarType>((set) => {
  return {
    isExpand: true,
    setIsExpand: () => set((state) =>({isExpand: !state.isExpand}))
  }
})