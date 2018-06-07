#!/bin/bash
codigo_de_rastreamento="$@"

# getopts

cat correios.js | sed -e 's/ID_OBJETO/'$codigo_de_rastreamento'/g' > correios2.js
phantomjs correios2.js | sed -e 's/<br>/\r/g' | re '\d{2}/\d{2}/\d{4} (.*)' | head -n1
rm correios2.js
