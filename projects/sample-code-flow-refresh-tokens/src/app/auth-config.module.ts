import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

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
          account_guid: 'DG7O1D45',
        },
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
