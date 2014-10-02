#!/bin/sh

BIN=bin/badge-render

echo Test simple generation...
$BIN examples/one_browser_pass.json 1.html
if [ ! -f "1.html" ]; then
  echo Did not generate 1.html, failed.
  exit 1
fi

if [ ! -f "1.html.png" ]; then
  echo Did not generate 1.html.png, failed.
  exit 1
fi

echo Test png file name...
$BIN examples/one_browser_pass.json 1.html --png 2.png
if [ ! -f "2.png" ]; then
  echo Did not generate 2.png, failed.
  exit 1
fi

echo 'Done!'
