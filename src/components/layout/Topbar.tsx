// src/components/layout/Topbar.tsx
import { Menu } from 'lucide-react'

interface TopbarProps {
  currentTitle: string
  currentLevel: number
  onToggleSidebar: () => void
  onHome: () => void
}

export function Topbar({ currentTitle, currentLevel, onToggleSidebar, onHome }: TopbarProps) {
  return (
    <div
      style={{ height: '44px', minHeight: '44px', borderBottom: '1px solid var(--brd)' }}
      className="flex items-center px-6 gap-3"
    >
      <button
        className="md:hidden bg-transparent border-none text-[var(--t1)] cursor-pointer p-1 text-lg leading-none"
        onClick={onToggleSidebar}
        aria-label="Abrir menu"
      >
        <Menu size={18} />
      </button>
      <div className="text-xs flex items-center gap-1.5" style={{ color: 'var(--tm)' }}>
        <span
          className="cursor-pointer transition-colors"
          style={{ color: 'var(--t2)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--t2)')}
          onClick={onHome}
        >
          Architecture Atlas
        </span>
        <span style={{ color: 'var(--brd2)' }}>›</span>
        <span style={{ color: 'var(--t2)' }}>{currentTitle}</span>
      </div>
      <div className="ml-auto flex items-center gap-1">
        {[1, 2, 3].map(i => (
          <div
            key={i}
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: i <= currentLevel ? 'var(--gold)' : 'var(--brd2)',
            }}
            title={i === 1 ? 'Iniciante' : i === 2 ? 'Intermediário' : 'Sênior'}
          />
        ))}
      </div>
    </div>
  )
}
