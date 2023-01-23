const createUser = (input) => ({
  id: Date.now(),
  ...input,
});

module.exports = createUser;
