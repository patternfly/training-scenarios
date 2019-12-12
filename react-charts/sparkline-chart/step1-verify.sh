#!/bin/sh

## Ensure user added CSS selector to app.css
verify() {
  grep -ie "chart-container" -ie "chart-label-container" ./src/app.css >> /dev/null 2>&1
  if [ "$?" -eq 0 ]; then
    echo "done"
    exit 0
  fi
}

verify

## Wait for possible file update and try again
sleep 3
verify
