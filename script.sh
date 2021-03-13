node index.js;
git add .
for (( counter=5000; counter>0; counter-- ))
do
git commit -m "genematorkiller commit"
node index.js;
git add .
done
git push -u origin main