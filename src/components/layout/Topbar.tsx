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
    <div id="topbar" className="flex items-center px-6 gap-3">
      <button
        className="md:hidden bg-transparent border-none text-[var(--t1)] cursor-pointer p-1 text-lg leading-none"
        onClick={onToggleSidebar}
        aria-label="Abrir menu"
      >
        <Menu size={18} />
      </button>
      <div className="bcrumb">
        <button
          type="button"
          className="cursor-pointer transition-colors text-[var(--t2)] hover:text-[var(--gold)] bg-transparent border-none p-0"
          onClick={onHome}
          aria-label="Voltar para a tela inicial"
        >
          Architecture Atlas
        </button>
        <span className="sep">›</span>
        <span>{currentTitle}</span>
      </div>
      <div className="lvl-ind">
        {[1, 2, 3].map(i => (
          <div key={i} className={`lvl-dot${i <= currentLevel ? ' a' : ''}`} title={i === 1 ? 'Iniciante' : i === 2 ? 'Intermediário' : 'Sênior'} />
        ))}
      </div>
    </div>
  )
}
