import { Injectable, Input }          from '@angular/core';
import { Headers, Http, Response }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { XpnkMemberTweets }   from './xpnkMemberTweets';

@Injectable()
export class XpnkGroupTweetsService {
	
	@Input( 'group.groupName' ) groupName: string;



    private groupTweetsUrl    = 'https://xapnik.com/data/dangerladies_tweets.json';

    constructor( private http: Http ) { }

	getGroupTweets(): Promise<XpnkMemberTweets[]> {
		
		return this.http.get( this.groupTweetsUrl )
		  .toPromise()
		  .then( response => response.json() as XpnkMemberTweets[] )
		  .catch( this.handleError );
		
	}

	private handleError( error: any ): Promise<any> {
	  console.error( 'An error occurred', error );
	  return Promise.reject( error.message || error );
	}
}