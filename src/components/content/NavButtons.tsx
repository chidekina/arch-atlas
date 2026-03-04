// src/components/content/NavButtons.tsx
interface NavButtonsProps {
  onPrev: (() => void) | null
  onNext: (() => void) | null
  nextLocked: boolean
}

export function NavButtons({ onPrev, onNext, nextLocked }: NavButtonsProps) {
  return (
    <div className="nav-btns">
      <button className="nbtn" disabled={!onPrev} onClick={onPrev ?? undefined}>
        ← Anterior
      </button>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
        {nextLocked && (
          <span className="next-hint">Responda o quiz para continuar</span>
        )}
        <button
          id="btn-next"
          className="nbtn primary"
          disabled={!onNext || nextLocked}
          onClick={onNext ?? undefined}
        >
          Próximo →
        </button>
      </div>
    </div>
  )
}
