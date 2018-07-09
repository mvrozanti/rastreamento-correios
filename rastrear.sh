#!/bin/bash
codigo_de_rastreamento="$@"
cat correios.js | sed -e 's/ID_OBJETO/'$codigo_de_rastreamento'/g' > correios2.js
content="`phantomjs correios2.js`"
./correios.py "$content"
rm correios2.js
