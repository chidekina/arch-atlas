// src/hooks/useNavigation.ts
import { useState, useCallback, useMemo } from 'react'
import { MODULES } from '@/data/modules'
import type { Module, Section } from '@/data/types'

interface NavEntry { mid: string; sid: string }

function buildAllSections(): NavEntry[] {
  return MODULES.flatMap(m => m.sections.map(s => ({ mid: m.id, sid: s.id })))
}

export function useNavigation() {
  const [currentModule, setCurrentModule] = useState<string | null>(null)
  const [currentSection, setCurrentSection] = useState<string | null>(null)

  const allSections = useMemo(buildAllSections, [])

  const navigate = useCallback((modId: string, sectionId: string) => {
    setCurrentModule(modId)
    setCurrentSection(sectionId)
  }, [])

  const showHome = useCallback(() => {
    setCurrentModule(null)
    setCurrentSection(null)
  }, [])

  const currentMod: Module | null = MODULES.find(m => m.id === currentModule) ?? null
  const currentSec: Section | null = currentMod?.sections.find(s => s.id === currentSection) ?? null

  const idx = allSections.findIndex(x => x.mid === currentModule && x.sid === currentSection)
  const prevSection = allSections[idx - 1] ?? null
  const nextSection = allSections[idx + 1] ?? null

  const levelMap: Record<string, number> = { i: 1, m: 2, s: 3 }
  const currentLevel = levelMap[currentSec?.level ?? 'i'] ?? 1

  return {
    currentModule,
    currentSection,
    currentMod,
    currentSec,
    currentLevel,
    prevSection,
    nextSection,
    navigate,
    showHome,
  }
}
