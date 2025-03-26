const basePath = './../..'
module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Generate a component',
    prompts: [
      { type: 'input', name: 'name', message: 'Enter component name?' },
      { type: 'list', name: 'app', message: 'Enter component app?', choices: ['lms', 'cms'] },
      {
        type: 'input',
        name: 'module',
        message: 'Enter component module (auth/user,...)?',
      },
    ],
  })
  plop.setGenerator('form-create', {
    description: 'Generate a full form create',
    prompts: [
      { type: 'input', name: 'name', message: 'Enter entity name?' },
      { type: 'list', name: 'app', message: 'Enter entity app?', choices: ['lms', 'cms'] },
      {
        type: 'input',
        name: 'module',
        message: 'Enter entity module (auth/user,...)?',
      },
    ],
    actions: [
      {
        type: 'add',
      },
    ],
  })
  plop.setGenerator('form-update', {
    description: 'Generate a full form update',
    prompts: [
      { type: 'input', name: 'name', message: 'Enter entity name?' },
      { type: 'list', name: 'app', message: 'Enter entity app?', choices: ['lms', 'cms'] },
      {
        type: 'input',
        name: 'module',
        message: 'Enter entity module (auth/user,...)?',
      },
    ],
    actions: [
      {
        type: 'add',
      },
    ],
  })
  plop.setGenerator('crud-page', {
    description: 'Generate a full CRUD page',
    prompts: [
      { type: 'input', name: 'name', message: 'Enter entity name?' },
      { type: 'list', name: 'app', message: 'Enter entity app?', choices: ['lms', 'cms'] },
      {
        type: 'input',
        name: 'module',
        message: 'Enter entity module (auth/user,...)?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `${basePath}/apps/{{app}}/app/routes/{{module}}/{{kebabCase name}}.tsx`,
        templateFile: 'src/templates/page.hbs',
      },
    ],
  })
}
