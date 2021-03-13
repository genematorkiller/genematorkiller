const path = require('path');
const util = require('util');
const fs = require('fs');
// git push -u origin main


const filePathName = path.resolve('./genematorkiller.txt')
const writeFile = util.promisify(fs.writeFile)
const readFile = util.promisify(fs.readFile)


async function writeFn(path) {

   let contentArr = []
   

   try {
     contentArr = JSON.parse(await readFile(path, 'utf8'))
   } catch (err) {
     console.error(err)
   }

   let newContent = [...contentArr, '.']

   writeFile(path, JSON.stringify(newContent))
}

writeFn(filePathName)
