node index.js;
git add .
for (( counter=15; counter>0; counter-- ))
do
git commit -m "genematorkiller commit (counter)"
node index.js;
git add .
done
git push -u origin main