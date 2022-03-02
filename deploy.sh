#!/usr/bin/env sh


set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy2'
git push -f git@github.com:esha-man/messenger_vue.git master:gh-pages

cd -