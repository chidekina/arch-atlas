// src/data/helpers.ts

export function code(ts: string, py?: string, java?: string, _label?: string): string {
  const id = 'cb' + Math.random().toString(36).slice(2, 7)
  const hasPy = !!py, hasJava = !!java
  return `<div class="cb">
    <div class="cb-tabs">
      <div class="ct a" onclick="switchTab('${id}','ts',this)">TypeScript</div>
      ${hasPy ? `<div class="ct" onclick="switchTab('${id}','py',this)">Python</div>` : ''}
      ${hasJava ? `<div class="ct" onclick="switchTab('${id}','java',this)">Java</div>` : ''}
    </div>
    <div class="cp a" id="${id}-ts"><pre><code class="language-typescript">${ts}</code></pre></div>
    ${hasPy ? `<div class="cp" id="${id}-py"><pre><code class="language-python">${py}</code></pre></div>` : ''}
    ${hasJava ? `<div class="cp" id="${id}-java"><pre><code class="language-java">${java}</code></pre></div>` : ''}
  </div>`
}

export function quiz(q: string, opts: string[], correct: number, exp: string): string {
  const id = 'q' + Math.random().toString(36).slice(2, 7)
  const keys = ['A', 'B', 'C', 'D']
  const optsHtml = opts
    .map((o, i) => `<div class="qo" id="${id}-${i}" onclick="answerQuiz('${id}',${i},${correct})"><div class="ok">${keys[i]}</div>${o}</div>`)
    .join('')
  return `<div class="quiz"><div class="quiz-hd"><div class="quiz-badge">Quiz</div></div>
    <div class="quiz-q">${q}</div>
    <div class="quiz-opts" id="${id}-opts">${optsHtml}</div>
    <div class="quiz-exp" id="${id}-exp">${exp}</div>
  </div>`
}

export function playground(initCode: string, hint?: string): string {
  const id = 'pg' + Math.random().toString(36).slice(2, 7)
  return `<div class="pg">
    <div class="pg-hd">
      <div class="pg-title">Playground — JavaScript</div>
      <button class="run-btn" onclick="runPg('${id}')">▶ Executar</button>
    </div>
    <textarea class="pg-ed" id="${id}-ed">${initCode}</textarea>
    <div class="pg-out" id="${id}-out">${hint || '// Clique em Executar para ver o resultado'}</div>
  </div>`
}

export function callout(icon: string, text: string, type?: string): string {
  return `<div class="callout callout-${type || ''}"><div class="callout-ic">${icon}</div><div class="callout-body"><p>${text}</p></div></div>`
}

export function diag(text: string): string {
  return `<div class="diag">${text}</div>`
}

export function badgood(bad: string, good: string): string {
  return `<div class="card-row">
    <div class="card card-bad"><div class="card-hd">✗ Ruim</div><p>${bad}</p></div>
    <div class="card card-good"><div class="card-hd">✓ Bom</div><p>${good}</p></div>
  </div>`
}
