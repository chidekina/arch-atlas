// src/components/layout/Sidebar.tsx
import { useState } from 'react'
import { MODULES } from '@/data/modules'

const BADGE_CLASS: Record<string, string> = { i: 'b-i', m: 'b-m', s: 'b-s' }
const BADGE_LABEL: Record<string, string> = { i: 'Init', m: 'Mid', s: 'Sênior' }

interface SidebarProps {
  currentModule: string | null
  currentSection: string | null
  completed: Set<string>
  progressPct: number
  onNavigate: (modId: string, sectionId: string) => void
  onToggle: (key: string) => void
  onHome: () => void
}

export function Sidebar({
  currentModule,
  currentSection,
  completed,
  progressPct,
  onNavigate,
  onToggle,
  onHome,
}: SidebarProps) {
  const [query, setQuery] = useState('')

  const filtered = query.trim()
    ? MODULES.flatMap(m =>
        m.sections
          .filter(
            s =>
              s.title.toLowerCase().includes(query.toLowerCase()) ||
              m.title.toLowerCase().includes(query.toLowerCase())
          )
          .map(s => ({ mod: m, sec: s }))
      )
    : null

  return (
    <>
      <div
        style={{ padding: '18px 16px 14px', borderBottom: '1px solid var(--brd)', cursor: 'pointer' }}
        onClick={onHome}
        title="Voltar para o início"
      >
        <div className="logo">◈ Architecture</div>
        <div className="ltitle">Atlas</div>
        <div className="lsub">Guia de Arquitetura de Software</div>
      </div>

      <div className="prog-wrap">
        <div className="prog-lbl">
          <span>Progresso</span>
          <span>{progressPct}%</span>
        </div>
        <div className="prog-bar">
          <div className="prog-fill" style={{ width: `${progressPct}%` }} />
        </div>
      </div>

      <div className="srch-wrap">
        <input
          className="srch"
          type="text"
          placeholder="🔍  Buscar tópico..."
          autoComplete="off"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <div
        style={{ flex: 1, overflowY: 'auto', padding: '6px 0' }}
        role="navigation"
        aria-label="Módulos do curso"
      >
        {filtered ? (
          filtered.length === 0 ? (
            <div className="srch-empty">Nenhum tópico encontrado para "{query}"</div>
          ) : (
          filtered.map(({ mod, sec }) => (
            <div
              key={`${mod.id}/${sec.id}`}
              className="ni"
              onClick={() => { setQuery(''); onNavigate(mod.id, sec.id) }}
            >
              <div className="ni-ic">{mod.emoji}</div>
              <div className="ni-lb">{sec.title}</div>
            </div>
          ))
          )
        ) : (
          MODULES.map(mod => (
            <div key={mod.id}>
              <div className="ng-hd">{mod.emoji} {mod.title}</div>
              {mod.sections.map(sec => {
                const key = `${mod.id}/${sec.id}`
                const done = completed.has(key)
                const active = currentModule === mod.id && currentSection === sec.id
                return (
                  <div
                    key={key}
                    className={`ni${active ? ' active' : ''}`}
                    tabIndex={0}
                    onClick={() => onNavigate(mod.id, sec.id)}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        onNavigate(mod.id, sec.id)
                      }
                    }}
                  >
                    <div className="ni-ic">{mod.emoji}</div>
                    <div className="ni-lb">{sec.title}</div>
                    <div className={`nbadge ${BADGE_CLASS[sec.level] || 'b-i'}`}>
                      {BADGE_LABEL[sec.level] || 'Init'}
                    </div>
                    <div
                      className={`nck${done ? ' done' : ''}`}
                      title={done ? 'Desmarcar como concluído' : 'Marcar como concluído'}
                      onClick={e => { e.stopPropagation(); onToggle(key) }}
                    >
                      {done ? '✓' : ''}
                    </div>
                  </div>
                )
              })}
            </div>
          ))
        )}
      </div>
    </>
  )
}
