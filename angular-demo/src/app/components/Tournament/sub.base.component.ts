import { HttpClient } from '@angular/common/http';
import { BaseComponent } from '../base.component';

/** 
	Base class of all Game Edit and Create Components.  
**/
export class SubBaseComponent extends BaseComponent {

  constructor (http: HttpClient) { super(http); }
  
  ngOnInit() {
  	super.ngOnInit();
  	
	this.initMatchupList();
  }
}
