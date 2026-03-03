// src/hooks/useProgress.ts
import { useState, useCallback } from 'react'
import { MODULES } from '@/data/modules'

const STORAGE_KEY = 'arch-atlas-done'

function loadCompleted(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return new Set(JSON.parse(raw || '[]'))
  } catch {
    return new Set()
  }
}

function totalSections(): number {
  return MODULES.reduce((n, m) => n + m.sections.length, 0)
}

export function useProgress() {
  const [completed, setCompleted] = useState<Set<string>>(loadCompleted)

  const toggle = useCallback((key: string) => {
    setCompleted(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]))
      return next
    })
  }, [])

  const markDone = useCallback((key: string) => {
    setCompleted(prev => {
      if (prev.has(key)) return prev
      const next = new Set(prev)
      next.add(key)
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]))
      return next
    })
  }, [])

  const progressPct = Math.round((completed.size / totalSections()) * 100)

  return { completed, toggle, markDone, progressPct }
}
