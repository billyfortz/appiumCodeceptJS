const fs = require("fs")
const path = require("path"); 

// Configuração dos tipos de arquivos que um App Android ou iOS podem ter. 
const appExtensions = {
  ios: ['.ipa', '.app', '.zip'],
  android: ['.apk', '.apks', '.zip'],
};

//Configuração das plataformas para serem executadas via CLI. 
const configByPlatform = name =>
({
  android,
  ios,
}[name] || 'Plataforma desconhecida');

//Configuração para buscar o App em um determinado repositório de acordo com a plataforma escolhida. 
const appPath = dir => {
  const fileName = fs.readdirSync(dir).find((name) =>
    appExtensions[process.env.profile].includes(path.extname(name)));
  return `${dir}/${fileName}`;
};

const android = {
  app: process.env.APP_PATH || appPath(`${process.cwd()}/app/Android`),
  platform: 'Android', 
  desiredCapabilities: { 
    appPackage: "com.qazandoapp",
    deviceName: "emulator-5554",
    platformVersion: process.env.PLATFORM_VERSION
  }
}

const ios = {
  app: process.env.APP_PATH || appPath(`${process.cwd()}/app/iOS`),
  platform: 'iOS', 
  desiredCapabilities: { 
    automationName: "XCUITest",
    deviceName: "iPhone 13",
    platformVersion: process.env.PLATFORM_VERSION
  }
}

exports.config = {
  output: './output',
  helpers: {
    Appium: {
      args: {
        address: 'localhost',
        port: 4723
      },
      ...configByPlatform(process.env.profile)
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    translation: "pt-BR",
    features: './features/*.feature',
    steps: [
      './step_definitions/login/LoginSteps',
      './step_definitions/aluno/AlunoSteps'
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true,
      enabled: true,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true,
      addAttachment: true,
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'automacao-appium',
  translation: 'pt-BR'
}