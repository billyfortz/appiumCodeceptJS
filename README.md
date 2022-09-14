# Projeto de automação de testes com CodeceptJS e Appium

## Descrição:

Este projeto foi desenvolvido durante o curso "Automação de Testes Mobile com CodeceptJS e Appium" da Qazando. Ao longo do curso tomei a liberdade de realizar algumas melhorias, especialmente no arquivo do Codecept conf, além disso, apliquei também no projeto a arquitetura Page Actions. Optei também por deixar as Features em português e de utilizar o Allure report como relatório.  

## Page Actions:

O Page Actions utiliza o padrão Page Objects (PO), porém, as classes que realizam as interações com os elementos ficam numa pasta separada, chamada de "page_actions". A vantagem é que essas operações ficam mais isoladas e não se misturam com os elementos mapeados nos arquivos do PO. Dentro desses arquivos Actions, chamamos apenas os PO para apontar qual elemento queremos interagir. 

## Codecept.conf:

Neste arquivo de configuração, inserir alguma configurações que já deixam configurado o ambiente do Android e também do iOS. Qualquer alteração na versão, emulador/simulador pode ser feita nesta classe mesmo. Deixei alguns comentários no código indicando a função de determinados trechos.  

## Instalação das dependências:

```
npm install
```

## Para executar o projeto:

android:
````
npm run android -- --verbose 
````

iOS:
````
npm run ios -- --verbose 
````

## Para gerar o relatório:

Instalação do Allure report:
````
npm install allure-commandline --save-dev
````

Ao executar um teste, automaticamente será gerado os relatórios na pasta output. Para abrir esses relatórios com o Allure report execute esse comando:

````
allure serve output     
````

O comando abaixo é responsável por limpar os relatórios antigos: 

````
npm run clean  
````
