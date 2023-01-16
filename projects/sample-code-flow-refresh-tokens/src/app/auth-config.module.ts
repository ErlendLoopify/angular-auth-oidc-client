import { NgModule } from '@angular/core';
import { AuthModule, LogLevel, OidcSecurityService } from 'angular-auth-oidc-client';

// export const getAccountGuid = (oidcSecurityService: OidcSecurityService) => {
//   oidcSecurityService.getAuthenticationResult().subscribe((payload) => {
//     //How can I get this value in the auth-config.module.ts?
//     console.log('current_account_guid in auth config', payload.current_account_guid);
//   });

//   return 'K9RPENAW'
// };

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority: 'https://auth.loopify.com',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'loopify-web-app',
        scope: 'openid profile email User offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        // ignoreNonceAfterRefresh: false,
        disableIdTokenValidation: true,
        autoUserInfo: false,
        // triggerRefreshWhenIdTokenExpired: false,
        logLevel: LogLevel.Debug,
        customParamsRefreshTokenRequest: {
          account_guid: ''
        },
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
