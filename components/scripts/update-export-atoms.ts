import fs from 'fs'

function setNewAtoms() {
  const atomsFolder = './stories/atoms/'

  fs.readdirSync(atomsFolder).forEach(file => {
    let fileData = fs.readFileSync(`${atomsFolder}/index.ts`).toString('utf8')
  
    if (file != 'index.ts') {
      if (!fileData.includes(file)) {  
        fileData += `export * from './${file}/${file}'\n`
      }

      fs.writeFileSync(`${atomsFolder}/index.ts`, fileData)
    }
  })

}

setNewAtoms()