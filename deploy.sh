rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:nicole618/simple-ui.git &&
git push -f -u origin master &&
cd -
echo https://nicole618.github.io/simple-ui/index.html 