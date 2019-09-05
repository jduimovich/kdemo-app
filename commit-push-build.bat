
rem generate-deploy
 
echo "This commit added by demo-script at: " >> README.md
git add .
git commit -m " automatic commit for demo"

git push origin master

run-webhook


