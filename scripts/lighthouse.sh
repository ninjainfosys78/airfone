#!/usr/bin/env bash
# Lighthouse (mobile) on one page per template against the production build.
# Usage: pnpm build && pnpm exec astro preview --port 4362 & ; scripts/lighthouse.sh [base-url]
set -euo pipefail
BASE="${1:-http://localhost:4362}"
OUT="${TMPDIR:-/tmp}/airfone-lighthouse"
mkdir -p "$OUT"
fail=0
for p in / /products/ai-call-agent /products/website-chatbot /solutions/banks /demo /resellers /blog /privacy; do
  f="$OUT/$(echo "$p" | tr / _).json"
  npx -y lighthouse@12 "$BASE$p" --quiet --chrome-flags="--headless=new" \
    --only-categories=performance,accessibility,best-practices,seo --output=json --output-path="$f" >/dev/null 2>&1
  python3 - "$f" "$p" <<'PY' || fail=1
import json, sys
d = json.load(open(sys.argv[1])); c = d['categories']; a = d['audits']
s = {k: round(v['score'] * 100) for k, v in c.items()}
print(sys.argv[2], s, 'LCP', a['largest-contentful-paint']['displayValue'], 'CLS', a['cumulative-layout-shift']['displayValue'])
ok = s['performance'] >= 90 and s['accessibility'] == 100 and s['seo'] == 100 and s['best-practices'] == 100
sys.exit(0 if ok else 1)
PY
done
exit $fail
