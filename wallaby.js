module.exports = () => {
  return {
    files: ['component.tsx'],
    tests: ['component.test.tsx'],
    env: {type: 'node'},
    setup: () => {
      if (!global.document) {
        require('jsdom-global')();
      }
    }
  }
};
