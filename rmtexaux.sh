#!/usr/bin/bash

# aux tex files to delete
files="*.aux *.bbl *.blg *.bst *.dvi *.idx *.lof *.log *.toc *.bak *.out *.lot *.brf *.blx.bib *.synctex.gz *.cut *.loa *.lol *.tdo *.snm *.nav *.vrb"
for f in $files; do
  if [ -f $f ];	then
    rm $f
    echo "deleted" $f
  fi
done
