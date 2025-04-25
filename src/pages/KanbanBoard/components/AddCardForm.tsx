import React, { useState } from 'react'
import { Input } from '@heroui/react'

type AddCardFormProps = {
  onAdd: (title: string) => void
}

export default function AddCardForm({ onAdd }: AddCardFormProps) {
  const [title, setTitle] = useState('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const trimmed = title.trim()
      if (!trimmed) return
      onAdd(trimmed)
      setTitle('')
    }
  }

  return (
    <Input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="New task (press Enter to add)"
      isRequired
      fullWidth
      onKeyDown={handleKeyDown}
    />
  )
}
