#!/bin/sh

## Ensure user added CSS selector to app.css
verify() {
  grep -i "chart-container" ./src/app.css >> /dev/null 2>&1
  if [ "$?" -eq 0 ]; then
    echo "done"
    exit 0
  fi
}

verify

## Wait for possible file update and try again
sleep 3
verify
