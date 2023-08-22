module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '21a1c95709c9e90e980b661c7ee730ba'),
  },
});
