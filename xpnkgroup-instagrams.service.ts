import { Injectable, Input }          from '@angular/core';
import { Headers, Http, Response }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { XpnkMemberInstagrams }   from './xpnkMemberInstagrams';

@Injectable()
export class XpnkGroupInstagramsService {
	
	@Input( 'group.groupName' ) groupName: string;


    private groupInstagramsUrl    = 'https://xapnik.com/data/dangerladies_instagrams.json';

    constructor( private http: Http ) { }

	getGroupInstagrams(): Promise<XpnkMemberInstagrams[]> {
		
		return this.http.get( this.groupInstagramsUrl )
		  .toPromise()
		  .then( response => response.json() as XpnkMemberInstagrams[] )
		  .catch( this.handleError );
		
	}

	private handleError( error: any ): Promise<any> {
	  console.error( 'An error occurred', error );
	  return Promise.reject( error.message || error );
	}
}