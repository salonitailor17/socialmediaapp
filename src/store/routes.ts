export const BASE_URL = 'https://socialspaceapi.vercel.app/api/';

const apiRoutes = Object.freeze({
  login: 'users/login',
  registration: 'users/register',

  post: 'posts/user',
  postCreate: 'posts',
});

export default apiRoutes;
