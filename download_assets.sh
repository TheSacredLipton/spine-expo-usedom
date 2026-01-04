#!/bin/bash

BASE_URL="https://raw.githubusercontent.com/EsotericSoftware/spine-runtimes/4.2/examples"

LICENSE_URL="https://raw.githubusercontent.com/EsotericSoftware/spine-runtimes/4.2/LICENSE"

# Spineboy
echo "Downloading Spineboy..."
curl -s -o example/public/spineboy/spineboy-pro.json "$BASE_URL/spineboy/export/spineboy-pro.json"
curl -s -o example/public/spineboy/spineboy.atlas "$BASE_URL/spineboy/export/spineboy.atlas"
curl -s -o example/public/spineboy/spineboy.png "$BASE_URL/spineboy/export/spineboy.png"
curl -s -o example/public/spineboy/license.txt "$BASE_URL/spineboy/license.txt"

# Raptor
echo "Downloading Raptor..."
curl -s -o example/public/raptor/raptor-pro.json "$BASE_URL/raptor/export/raptor-pro.json"
curl -s -o example/public/raptor/raptor-pma.atlas "$BASE_URL/raptor/export/raptor-pma.atlas"
curl -s -o example/public/raptor/raptor-pma.png "$BASE_URL/raptor/export/raptor-pma.png"
curl -s -o example/public/raptor/license.txt "$BASE_URL/raptor/license.txt"

# Alien
echo "Downloading Alien..."
curl -s -o example/public/alien/alien-pro.json "$BASE_URL/alien/export/alien-pro.json"
curl -s -o example/public/alien/alien-pma.atlas "$BASE_URL/alien/export/alien-pma.atlas"
curl -s -o example/public/alien/alien-pma.png "$BASE_URL/alien/export/alien-pma.png"
curl -s -o example/public/alien/license.txt "$BASE_URL/alien/license.txt"

# Mix-and-match
echo "Downloading Mix-and-match..."
mkdir -p example/public/mix-and-match
curl -s -o example/public/mix-and-match/mix-and-match-pro.json "$BASE_URL/mix-and-match/export/mix-and-match-pro.json"
curl -s -o example/public/mix-and-match/mix-and-match-pma.atlas "$BASE_URL/mix-and-match/export/mix-and-match-pma.atlas"
curl -s -o example/public/mix-and-match/mix-and-match-pma.png "$BASE_URL/mix-and-match/export/mix-and-match-pma.png"
curl -s -o example/public/mix-and-match/license.txt "$BASE_URL/mix-and-match/license.txt"

# Coin
echo "Downloading Coin..."
mkdir -p example/public/coin
curl -s -o example/public/coin/coin-pro.json "$BASE_URL/coin/export/coin-pro.json"
curl -s -o example/public/coin/coin-pma.atlas "$BASE_URL/coin/export/coin-pma.atlas"
curl -s -o example/public/coin/coin-pma.png "$BASE_URL/coin/export/coin-pma.png"
curl -s -o example/public/coin/license.txt "$BASE_URL/coin/license.txt"

# Stretchyman
echo "Downloading Stretchyman..."
mkdir -p example/public/stretchyman
curl -s -o example/public/stretchyman/stretchyman-pro.json "$BASE_URL/stretchyman/export/stretchyman-pro.json"
curl -s -o example/public/stretchyman/stretchyman-pma.atlas "$BASE_URL/stretchyman/export/stretchyman-pma.atlas"
curl -s -o example/public/stretchyman/stretchyman-pma.png "$BASE_URL/stretchyman/export/stretchyman-pma.png"
curl -s -o example/public/stretchyman/license.txt "$BASE_URL/stretchyman/license.txt"

# Owl (from esotericsoftware.com)
echo "Downloading Owl..."
mkdir -p example/public/owl
curl -s -o example/public/owl/owl-pro.skel "https://esotericsoftware.com/files/spine-widget/assets/owl-pro.skel"
curl -s -o example/public/owl/owl-pma.atlas "https://esotericsoftware.com/files/spine-widget/assets/owl-pma.atlas"
curl -s -o example/public/owl/owl-pma.png "https://esotericsoftware.com/files/spine-widget/assets/owl-pma.png"
# Use main license as fallback for Owl since it's from widget examples
curl -s -o example/public/owl/license.txt "$LICENSE_URL"

echo "Download complete."
