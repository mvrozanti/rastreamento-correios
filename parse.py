#!/usr/bin/env python3
from bs4 import BeautifulSoup
from lxml import etree
import argparse
import urllib3
import sys
import code

content = ''.join(sys.argv[1])
bs = BeautifulSoup(content,'lxml')

newest_status = bs.find(lambda tag: tag.name == 'div' \
        and tag.has_attr('class') \
        and tag.get('class')[0] == 'highlightSRO')

try:
    history = bs.find(lambda tag: tag.name == 'table').find_all(lambda tag: tag.name == 'tr')
except Exception as e:
    obj_not_found = False
    for s in bs.strings:
        if 'o possui dados sobre o objeto info' in s:
            print('O sistema dos correios não possui dados sobre o objeto informado. ')
            obj_not_found = True
            sys.exit(1)
    if not obj_not_found: print(e)
if None not in [newest_status,history]:
    print(newest_status.text.replace('\n\n\n','\n').replace('\n\n','\n'))
    [print(h.text.replace('\n\n\n','\n').replace('\n\n','\n')) for h in history] #
else: print('Site dos correios mudou, favor reportar este problema.')

