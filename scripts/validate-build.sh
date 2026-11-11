#!/usr/bin/env bash

set -u

run_step() {
  local description="$1"
  shift

  printf 'Running %s...\n' "$description"
  if ! "$@"; then
    printf 'Error: %s failed.\n' "$description" >&2
    exit 1
  fi
}

run_step "dependency installation" npm ci
run_step "lint" npm run lint
run_step "production build" npm run build

if [[ ! -d build ]]; then
  printf 'Error: build directory was not created.\n' >&2
  exit 1
fi

if [[ ! -f build/index.html ]]; then
  printf 'Error: build/index.html was not created.\n' >&2
  exit 1
fi

printf 'Build validation passed.\n'
