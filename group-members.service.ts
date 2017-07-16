import { Injectable, Input }          from '@angular/core';
import { Headers, Http, Response }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { GroupMember }                from './group-members.component';
import { GroupComponent }             from './group.component';
//import { GROUPMEMBERS }               from './mock-group-members';

@Injectable()
export class GroupMembersService {
	
	@Input( 'group.groupName' ) groupName: string;



    private groupMembersUrl    = 'https://xapnik.com/data/dangerladies_users.json';

    constructor( private http: Http ) { }

	getGroupMembers(): Promise<GroupMember[]> {
		//return Promise.resolve( GROUPMEMBERS );
		
		return this.http.get( this.groupMembersUrl )
		  .toPromise()
		  .then( response => response.json() as GroupMember[] )
		  .catch( this.handleError );
		
	}

	private handleError( error: any ): Promise<any> {
	  console.error( 'An error occurred', error );
	  return Promise.reject( error.message || error );
	}
}