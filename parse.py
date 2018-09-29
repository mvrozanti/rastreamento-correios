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

history = bs.find(lambda tag: tag.name == 'table').find_all(lambda tag: tag.name == 'tr')

if None not in [newest_status,history]: 
    print(newest_status.text.replace('\n\n\n','\n').replace('\n\n','\n'))
    [print(h.text.replace('\n\n\n','\n').replace('\n\n','\n')) for h in history] # 
else: print('Site dos correios mudou, favor reportar este problema.')

