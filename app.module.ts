import { BrowserModule }             		from '@angular/platform-browser';
import { NgModule }                  		from '@angular/core';
import { HttpModule }                		from '@angular/http';

import { AppComponent }              		from './app.component';
import { GroupComponent }            		from './group.component';
import { GroupMembersComponent }     		from './group-members.component';
import { GroupMembersService }       		from './group-members.service';
import { XpnkGroupTweetsService }    		from './xpnkgroup-tweets.service';
import { XpnkGroupInstagramsService }		from './xpnkgroup-instagrams.service';
import { XpnkGroupDisqusionsService }		from './xpnkgroup-disqusions.service';
import { XpnkMemberTweetsComponent } 		from './xpnkmember-tweets.component';
import { XpnkMemberInstagramsComponent } 	from './xpnkmember-instagrams.component';
import { XpnkMemberDisqusionsComponent } 	from './xpnkmember-disqusions.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    GroupMembersComponent,
    XpnkMemberTweetsComponent,
    XpnkMemberInstagramsComponent,
    XpnkMemberDisqusionsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ GroupMembersService, 
  	XpnkGroupTweetsService,
  	XpnkGroupInstagramsService,
  	XpnkGroupDisqusionsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
