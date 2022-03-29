module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['build', 'feat', 'fix', 'refactor', 'test']],
    'subject-min-length': [2, 'always', 15],
  },
};
