// src/components/content/SectionContent.tsx
import { useEffect, useRef, useState } from 'react'
import type { Section } from '@/data/types'
import { NavButtons } from './NavButtons'

declare global {
  interface Window {
    answerQuiz: (qId: string, idx: number, correct: number) => void
    switchTab: (cbId: string, lang: string, btn: HTMLElement) => void
    runPg: (pgId: string) => void
    Prism: { highlightAll: () => void }
  }
}

interface SectionContentProps {
  section: Section
  onPrev: (() => void) | null
  onNext: (() => void) | null
  onAllAnswered?: () => void
}

export function SectionContent({ section, onPrev, onNext, onAllAnswered }: SectionContentProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [answeredCount, setAnsweredCount] = useState(0)
  const [totalQuizzes, setTotalQuizzes] = useState(0)

  // Bridge: expose handlers globally so inline onclick attrs in HTML content work
  useEffect(() => {
    window.answerQuiz = (qId, idx, correct) => {
      const opts = document.getElementById(`${qId}-opts`)
      if (!opts) return
      opts.querySelectorAll('.qo').forEach((o, i) => {
        o.classList.add('disabled')
        if (i === correct) o.classList.add('correct')
        else if (i === idx && idx !== correct) o.classList.add('wrong')
      })
      ;(opts as HTMLElement).dataset.answered = '1'
      document.getElementById(`${qId}-exp`)?.classList.add('v')

      setAnsweredCount(
        document.querySelectorAll('#section-content .quiz-opts[data-answered="1"]').length
      )
    }

    window.switchTab = (cbId, lang, btn) => {
      document.querySelectorAll(`[id^="${cbId}-"]`).forEach(p => p.classList.remove('a'))
      document.getElementById(`${cbId}-${lang}`)?.classList.add('a')
      btn.parentElement?.querySelectorAll('.ct').forEach(t => t.classList.remove('a'))
      btn.classList.add('a')
    }

    window.runPg = (pgId) => {
      const ed = document.getElementById(`${pgId}-ed`) as HTMLTextAreaElement | null
      const out = document.getElementById(`${pgId}-out`)
      if (!ed || !out) return
      out.classList.remove('err')
      try {
        const logs: string[] = []
        const origLog = console.log
        // eslint-disable-next-line no-console
        console.log = (...args: unknown[]) => { logs.push(args.map(String).join(' ')); origLog(...args) }
        // eslint-disable-next-line no-new-func
        new Function(ed.value)()
        // eslint-disable-next-line no-console
        console.log = origLog
        out.textContent = logs.join('\n') || '// Sem output'
      } catch (e) {
        out.textContent = String(e)
        out.classList.add('err')
      }
    }
  }, [])

  // Re-run Prism and count quizzes when section changes
  useEffect(() => {
    setAnsweredCount(0)
    containerRef.current?.scrollTo(0, 0)
    if (contentRef.current) {
      contentRef.current.innerHTML = section.content
    }
    if (window.Prism) window.Prism.highlightAll()
    const quizzes = contentRef.current?.querySelectorAll('.quiz-opts') ?? []
    setTotalQuizzes(quizzes.length)
  }, [section.id])

  useEffect(() => {
    if (totalQuizzes > 0 && answeredCount >= totalQuizzes) {
      onAllAnswered?.()
    }
  }, [answeredCount, totalQuizzes, onAllAnswered])

  const nextLocked = totalQuizzes > 0 && answeredCount < totalQuizzes

  return (
    <div
      id="section-content"
      ref={containerRef}
      className="flex-1 overflow-y-auto px-9 py-7 w-full section-fade"
      style={{ paddingBottom: 'max(80px, env(safe-area-inset-bottom, 0px))' }}
    >
      <div ref={contentRef} />
      <NavButtons onPrev={onPrev} onNext={onNext} nextLocked={nextLocked} />
    </div>
  )
}
