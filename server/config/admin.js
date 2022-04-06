module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '951137ec12668abe8f02301f9e02e22b'),
  },
});
