import { Component, OnInit } from '@angular/core';
import { EventsService, EventTypes, OidcClientNotification, OidcSecurityService, PublicConfiguration } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
    configuration: PublicConfiguration;
    isModuleSetUp$: Observable<OidcClientNotification>;
    userDataChanged$: Observable<OidcClientNotification>;
    isAuthenticated: boolean;

    constructor(public oidcSecurityService: OidcSecurityService, private readonly eventsService: EventsService) {}

    ngOnInit() {
        this.configuration = this.oidcSecurityService.configuration;
        this.isModuleSetUp$ = this.eventsService
            .registerForEvents()
            .pipe(filter((notification: OidcClientNotification) => notification.type === EventTypes.ModuleSetup));

        this.oidcSecurityService.getIsAuthorized().subscribe((auth) => {
            this.isAuthenticated = auth;
        });

        this.userDataChanged$ = this.eventsService
            .registerForEvents()
            .pipe(filter((notification: OidcClientNotification) => notification.type === EventTypes.UserDataChanged));
    }
}
