// src/data/types.ts
export type Level = 'i' | 'm' | 's'

export interface Section {
  id: string
  title: string
  level: Level
  content: string
}

export interface Module {
  id: string
  title: string
  emoji: string
  color: string
  level: Level
  sections: Section[]
}
