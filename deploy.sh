set -e

npm run build

cd dist/draggable-tree

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ChristYoung/draggable-tree.git main:gh-pages

cd -
