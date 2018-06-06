#!/bin/bash

codigo_de_rastreamento="$1"
# getopts

cat correios.js | sed -e 's/ID_OBJETO/$codigo_de_rastreamento/g' > correios2.js; phantomjs correios2.js | grep \<strong\>; rm correios2.js
