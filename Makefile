# apps/landing — Astro static site producing an eShasan route bundle.

SLUG ?= $(notdir $(realpath ../..))
APP  := $(notdir $(CURDIR))

.PHONY: dev build bundle verify clean

dev:
	@SEGMENT=$$([ "$(APP)" = "landing" ] && echo "root" || echo "$(APP)"); \
	PORT=$$(node -e "const c=require('crypto');const h=c.createHash('sha256').update('$(SLUG)/'+'$$SEGMENT').digest('hex');console.log(5200+(parseInt(h.slice(0,8),16)%300))"); \
	echo "→ $(SLUG)/$(APP) (segment=$$SEGMENT) on port $$PORT"; \
	ASTRO_DEV_PORT=$$PORT pnpm exec astro dev --host 0.0.0.0 --port $$PORT

build:
	pnpm exec astro build

bundle: build
	BUNDLE_SLUG=$(SLUG) node scripts/make-bundle.mjs

verify:
	BUNDLE_SLUG=$(SLUG) node scripts/make-bundle.mjs --verify-only

clean:
	rm -rf dist .astro bundle node_modules
