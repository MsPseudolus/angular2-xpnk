import { Component, OnInit, Input }        from '@angular/core';
import { GroupComponent }                  from './group.component';
import { GroupMembersService }             from './group-members.service';
import { XpnkGroupTweetsService }          from './xpnkgroup-tweets.service';
import { XpnkGroupInstagramsService }      from './xpnkgroup-instagrams.service';
import { XpnkMemberTweetsComponent }       from './xpnkmember-tweets.component';
import { XpnkMemberInstagramsComponent }   from './xpnkmember-instagrams.component';
import { XpnkTweet }                       from './xpnkTweet';
import { XpnkMemberTweets }                from './xpnkMemberTweets';
import { XpnkInstagram }                   from './xpnkInstagram';
import { XpnkMemberInstagrams }            from './xpnkMemberInstagrams';


export class GroupMember {
  XpnkID:                                   string;
  TweeterID:                                string;
  ProfileImg:                               string;
}

@Component({
  selector:                                'group-members',
  templateUrl:                             './group-members.component.html',
  //styleUrls:                            ['./group-members.component.css'],
  providers:                              [GroupMembersService, 
                                            XpnkGroupTweetsService,
                                            XpnkGroupInstagramsService]
})

export class GroupMembersComponent implements OnInit {
  groupMembers:                           GroupMember[];
  groupTweets:                            XpnkMemberTweets[];
  groupInstagrams:                        XpnkMemberInstagrams[];
 
  constructor( 
    private groupMembersService: GroupMembersService, 
    private groupTweetsService: XpnkGroupTweetsService,
    private groupInstagramsService: XpnkGroupInstagramsService ) { }

  getGroupMembers(): void {
    this.groupMembersService.getGroupMembers()
      .then( groupMembers => this.groupMembers = groupMembers );
    console.log( "groupmembers:  ", this.groupMembers );
  }

  getGroupTweets(): void {
    this.groupTweetsService.getGroupTweets() 
      .then(groupTweets => this.groupTweets = groupTweets ),
      console.log("Init groupTweets: ", this.groupTweets);
  }

  getGroupInstagrams(): void {
    this.groupInstagramsService.getGroupInstagrams() 
      .then(groupInstagrams => this.groupInstagrams = groupInstagrams ),
      console.log("Init groupInstagrams: ", this.groupInstagrams);
  }

  ngOnInit(): void {
  	this.getGroupMembers();
    this.getGroupTweets();
    this.getGroupInstagrams();
  }
}
