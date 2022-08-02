module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dc9f369dc1ab01c3bb2e7e9a7b269181'),
  },
});
