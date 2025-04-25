import { BoardType } from '@/types/board';

const STORAGE_KEY = 'kanban-board'

export function loadBoard(): BoardType | null {
  const json = window.localStorage.getItem(STORAGE_KEY)
  if (!json) return null
  try {
    return JSON.parse(json) as BoardType
  } catch {
    console.error('Failed to parse board from localStorage')
    return null
  }
}

export function saveBoard(board: BoardType): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(board))
  } catch {
    console.error('Failed to save board to localStorage')
  }
}
