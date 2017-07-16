import { Component } from '@angular/core';
import { GroupMembersService } from './group-members.service';
import { XpnkGroupTweetsService } from './xpnkgroup-tweets.service';
import { XpnkGroupInstagramsService } from './xpnkgroup-instagrams.service';
import { XpnkGroupDisqusionsService } from './xpnkgroup-disqusions.service';

@Component({
  selector:                           'app-root',
  templateUrl:                        './app.component.html',
  styleUrls:                          ['./app.component.css'],
  providers:                          [GroupMembersService, 
  										XpnkGroupTweetsService,
  										XpnkGroupInstagramsService,
  										XpnkGroupDisqusionsService]
})
export class AppComponent {
  title                               = 'xapnik';
  logoUrl                             = './assets/img/Logo-01-1725x1725.gif';

  constructor( private groupMembersService: GroupMembersService, 
  				private xpnkGroupTweetsService: XpnkGroupTweetsService,
  				private xpnkGroupInstagramsService: XpnkGroupInstagramsService,
  				private xpnkGroupDisqusionsService: XpnkGroupDisqusionsService ) { }
}

