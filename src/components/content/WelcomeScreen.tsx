// src/components/content/WelcomeScreen.tsx
import { MODULES } from '@/data/modules'

interface WelcomeScreenProps {
  onNavigate: (modId: string, sectionId: string) => void
}

export function WelcomeScreen({ onNavigate }: WelcomeScreenProps) {
  return (
    <div id="content" className="flex-1 overflow-y-auto w-full">
      <div className="welcome-label">Bem-vindo ao</div>
      <h1 className="welcome-title">Architecture Atlas</h1>
      <p className="lead">
        Guia interativo de arquitetura de software — Design Patterns GoF, SOLID,
        Clean Architecture, DDD, Microservices e System Design.
      </p>
      <button
        className="start-btn"
        onClick={() => onNavigate(MODULES[0].id, MODULES[0].sections[0].id)}
      >
        Começar →
      </button>
      <div className="divider" />
      <div className="hgrid">
        {MODULES.map(m => (
          <div
            key={m.id}
            className="hcard"
            onClick={() => onNavigate(m.id, m.sections[0].id)}
          >
            <div className="hcard-ic">{m.emoji}</div>
            <div className="hcard-title">{m.title}</div>
            <div className="hcard-desc">{m.sections.length} seções</div>
          </div>
        ))}
      </div>
    </div>
  )
}
