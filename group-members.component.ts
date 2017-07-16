import { Component, OnInit, Input }        from '@angular/core';
import { GroupComponent }                  from './group.component';
import { GroupMembersService }             from './group-members.service';
import { XpnkGroupTweetsService }          from './xpnkgroup-tweets.service';
import { XpnkGroupInstagramsService }      from './xpnkgroup-instagrams.service';
import { XpnkGroupDisqusionsService }      from './xpnkgroup-disqusions.service';
import { XpnkMemberTweetsComponent }       from './xpnkmember-tweets.component';
import { XpnkMemberInstagramsComponent }   from './xpnkmember-instagrams.component';
import { XpnkMemberDisqusionsComponent }   from './xpnkmember-disqusions.component';
import { XpnkTweet }                       from './xpnkTweet';
import { XpnkMemberTweets }                from './xpnkMemberTweets';
import { XpnkInstagram }                   from './xpnkInstagram';
import { XpnkMemberInstagrams }            from './xpnkMemberInstagrams';
import { XpnkDisqusion }                   from './xpnkDisqusion';
import { XpnkMemberDisqusions }            from './xpnkMemberDisqusions';


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
                                            XpnkGroupInstagramsService,
                                            XpnkGroupDisqusionsService]
})

export class GroupMembersComponent implements OnInit {
  groupMembers:                           GroupMember[];
  groupTweets:                            XpnkMemberTweets[];
  groupInstagrams:                        XpnkMemberInstagrams[];
  groupDisqusions:                        XpnkMemberDisqusions[];
 
  constructor( 
    private groupMembersService: GroupMembersService, 
    private groupTweetsService: XpnkGroupTweetsService,
    private groupInstagramsService: XpnkGroupInstagramsService,
    private groupDisqusionsService: XpnkGroupDisqusionsService ) { }

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

  getGroupDisqusions(): void {
    this.groupDisqusionsService.getGroupDisqusions() 
      .then(groupDisqusions => this.groupDisqusions = groupDisqusions ),
      console.log("Init groupDisqusions: ", this.groupDisqusions);
  }

  ngOnInit(): void {
  	this.getGroupMembers();
    this.getGroupTweets();
    this.getGroupInstagrams();
    this.getGroupDisqusions();
  }
}
