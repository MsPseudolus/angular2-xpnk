import { Injectable, Input }          from '@angular/core';
import { Headers, Http, Response }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { XpnkMemberDisqusions }   from './xpnkMemberDisqusions';

@Injectable()
export class XpnkGroupDisqusionsService {
	
	@Input( 'group.groupName' ) groupName: string;



    private groupDisqusionsUrl    = 'https://xapnik.com/data/dangerladies_disqus.json';

    constructor( private http: Http ) { }

	getGroupDisqusions(): Promise<XpnkMemberDisqusions[]> {
		
		return this.http.get( this.groupDisqusionsUrl )
		  .toPromise()
		  .then( response => response.json() as XpnkMemberDisqusions[] )
		  .catch( this.handleError );
		
	}

	private handleError( error: any ): Promise<any> {
	  console.error( 'An error occurred', error );
	  return Promise.reject( error.message || error );
	}
}