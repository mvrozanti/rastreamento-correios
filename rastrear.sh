#!/bin/bash
codigo_de_rastreamento="$@"
call_dir="`pwd`"
SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
script_dir="$( cd -P "$( dirname "$SOURCE" )" && pwd )"

cd "$script_dir"
cat correios.js | sed -e 's/ID_OBJETO/'$codigo_de_rastreamento'/g' > correios2.js
content="`phantomjs correios2.js`"
./parse.py "$content"
rm correios2.js
cd "$call_dir"
