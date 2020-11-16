import { DataService } from './../../../../HttpServices/src/app/Services/Data-Service';
import { FollowersServiceService } from './Services/followers-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FollowersComponent } from './followers/followers.component';
import { AppErrorHandler } from './Utilities/AppErrorHandler';

@NgModule({
  declarations: [
    AppComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
      ],
  providers: [      
      FollowersServiceService,      
      {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
