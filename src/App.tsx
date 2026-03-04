// src/App.tsx
import { useState } from 'react'
import { useProgress } from '@/hooks/useProgress'
import { useNavigation } from '@/hooks/useNavigation'
import { Sidebar } from '@/components/layout/Sidebar'
import { Topbar } from '@/components/layout/Topbar'
import { SectionContent } from '@/components/content/SectionContent'
import { WelcomeScreen } from '@/components/content/WelcomeScreen'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { completed, toggle, markDone, progressPct } = useProgress()
  const {
    currentModule,
    currentSection,
    currentSec,
    currentLevel,
    prevSection,
    nextSection,
    navigate,
    showHome,
  } = useNavigation()

  const handleMarkDone = () => {
    if (!currentModule || !currentSection) return
    markDone(`${currentModule}/${currentSection}`)
  }

  const handleNavigate = (modId: string, secId: string) => {
    navigate(modId, secId)
    setSidebarOpen(false)
  }

  const handleHome = () => {
    showHome()
    setSidebarOpen(false)
  }

  return (
    <div
      className="flex overflow-hidden w-full"
      style={{
        height: '100vh',
        background: 'var(--bg)',
        color: 'var(--t1)',
        fontFamily: 'var(--fs)',
      }}
    >
      {/* Overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: 'rgba(0,0,0,0.5)' }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav
        id="sb"
        className={`flex flex-col overflow-hidden z-50 transition-transform duration-200 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed top-0 left-0 h-full md:relative md:translate-x-0`}
        style={{
          width: '272px',
          minWidth: '272px',
          background: 'var(--bgs)',
          borderRight: '1px solid var(--brd)',
        }}
      >
        <Sidebar
          currentModule={currentModule}
          currentSection={currentSection}
          completed={completed}
          progressPct={progressPct}
          onNavigate={handleNavigate}
          onToggle={toggle}
          onHome={handleHome}
        />
      </nav>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <Topbar
          currentTitle={currentSec?.title ?? null}
          currentLevel={currentLevel}
          onToggleSidebar={() => setSidebarOpen(o => !o)}
          onHome={handleHome}
        />
        {currentSec ? (
          <SectionContent
            key={currentSec.id}
            section={currentSec}
            onPrev={prevSection ? () => navigate(prevSection.mid, prevSection.sid) : null}
            onNext={nextSection ? () => navigate(nextSection.mid, nextSection.sid) : null}
            onAllAnswered={handleMarkDone}
          />
        ) : (
          <WelcomeScreen onNavigate={navigate} completed={completed} />
        )}
      </main>
    </div>
  )
}
