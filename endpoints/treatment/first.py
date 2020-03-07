import urllib
from bs4 import BeautifulSoup
import sys
import json

def treat(data):
    print(data, file=sys.stderr)
    site = data['site']
    query = data['query']
    openSite = urllib.request.urlopen(site)
    soup = BeautifulSoup(openSite, 'html.parser')
    return str(soup.find_all(query))
