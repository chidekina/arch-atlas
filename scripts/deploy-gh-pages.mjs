#!/usr/bin/env node
// Deploys docs/ to gh-pages branch on GitHub Pages
import { execSync } from 'child_process'
import { mkdtempSync, rmSync, cpSync } from 'fs'
import { tmpdir } from 'os'
import { join } from 'path'

const REMOTE = execSync('git remote get-url origin').toString().trim()
const dir = mkdtempSync(join(tmpdir(), 'arch-atlas-deploy-'))

try {
  execSync(`git init -b gh-pages "${dir}"`, { stdio: 'inherit' })
  cpSync('docs', dir, { recursive: true })
  execSync('git add .', { cwd: dir, stdio: 'inherit' })
  execSync(`git commit -m "deploy: $(date -u '+%Y-%m-%d %H:%M UTC')" --no-verify`, { cwd: dir, stdio: 'inherit', shell: true })
  execSync(`git remote add origin "${REMOTE}"`, { cwd: dir, stdio: 'inherit' })
  execSync('git push origin gh-pages --force', { cwd: dir, stdio: 'inherit' })
  console.log('\n✅ Deployed to https://chidekina.github.io/arch-atlas/')
} finally {
  rmSync(dir, { recursive: true, force: true })
}
