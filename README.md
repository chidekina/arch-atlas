# Architecture Atlas

Guia interativo de arquitetura de software — do código ao sistema distribuído.

## O que é

Single-page application em HTML puro (sem build, sem dependências) com 43 seções, 31 quizzes, 5 playgrounds JS interativos e code tabs TypeScript/Python/Java.

## Conteúdo

| Módulo | Nível |
|--------|-------|
| 🗺️ Fundamentos — O que é arquitetura, Atributos de Qualidade | Iniciante |
| 📐 SOLID — SRP, OCP, LSP, ISP, DIP | Intermediário |
| ⚖️ Outros Princípios — DRY, KISS, YAGNI, Lei de Deméter, CQS | Iniciante |
| 🏭 GoF Criacionais — Factory Method, Builder, Singleton, Prototype, Abstract Factory | Intermediário |
| 🔧 GoF Estruturais — Adapter, Facade, Decorator, Proxy, Composite, Bridge | Intermediário |
| 🎭 GoF Comportamentais — Observer, Strategy, Command, Chain, State, Template + 5 | Intermediário |
| 🏛️ Padrões Arquiteturais — Clean, Hexagonal, CQRS, Event Sourcing, MVC/MVVM | Sênior |
| ⚡ System Design — Escalabilidade, CAP Theorem, Caching, Bancos de Dados | Sênior |
| 🌐 API Design — REST, GraphQL, gRPC | Sênior |
| 🎯 DDD — Entities, VOs, Aggregates, Bounded Contexts, Domain Events | Sênior |
| 🔗 Microservices — Circuit Breaker, Saga, API Gateway | Sênior |
| 🔭 Observability — Distributed Tracing, Structured Logging, SLOs | Sênior |

## Como usar

```bash
git clone https://github.com/chidekina/arch-atlas
# Abrir index.html direto no browser — sem build necessário

# Ou servir localmente:
python3 -m http.server 8080 --directory arch-atlas
```

## Stack

- HTML/CSS/JS puro — zero dependências de build
- Prism.js (CDN) — syntax highlighting
- IBM Plex Sans + Mono — tipografia
- localStorage — progresso persistido

## Features

- Trilha progressiva com badge de nível por seção
- Busca por tópico na sidebar
- Navegação por teclado (Tab + Enter)
- `prefers-reduced-motion` respeitado
- Quizzes com feedback + explicação detalhada
- Playgrounds interativos (Builder, Observer, Strategy, DRY)
