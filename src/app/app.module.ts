import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
    DeliveryClient,
    DeliveryClientConfig
} from 'kentico-cloud-delivery-typescript-sdk';

import { AppComponent } from './app.component';

export function DeliveryClientFactory() {
    const previewOptions = {
        enablePreviewMode: true,
        previewApiKey: 'YOUR API KEY'
    };

    const projectId = 'YOUR PROJECT ID';

    return new DeliveryClient(
        new DeliveryClientConfig(projectId, [], previewOptions)
    );
}

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [
        {
            provide: DeliveryClient,
            useFactory: DeliveryClientFactory,
            deps: []
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
