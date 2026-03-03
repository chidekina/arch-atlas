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
      <button
        id="btn-next"
        className="nbtn primary"
        disabled={!onNext || nextLocked}
        title={nextLocked ? 'Responda o(s) quiz desta seção para continuar' : undefined}
        onClick={onNext ?? undefined}
      >
        Próximo →
      </button>
    </div>
  )
}
