const yaml = require("js-yaml"); 
const fs = require("fs")
const Helper = require("@codeceptjs/helper")

class YmlHelper extends Helper {
    async readYmlWithName(nomeDoArquivo) {
        const fileContents = await fs.readFileSync(
            `./config/${nomeDoArquivo}.yml`,
            {encoding: 'utf8'}
        );
        return yaml.load(fileContents); 
    }

    async readYml() {
        return this.readYmlWithName("dados"); 
    }
}

module.exports = {
    YmlHelper
};