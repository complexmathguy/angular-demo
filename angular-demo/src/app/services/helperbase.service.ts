/** 
	Base class of all Components.  
	For convenience, contains all enums and entity lists 
**/
export class HelperBaseService {

    public ormUrl: string;

    constructor() {
        this.ormUrl = 'http://localhosthttp://ec2-34-239-24-145.compute-1.amazonaws.com:4000';
    }
}