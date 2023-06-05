import { OktaAuth } from '@okta/okta-auth-js'

export const oktaAuth = new OktaAuth({
  clientId: '0oa9f3s9ljwdWESGI5d7',
  issuer: 'https://dev-63903901.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
})