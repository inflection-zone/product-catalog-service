import {CurrentClient} from './current.client'
import {CurrentUser} from './current.user'
import {RequestDto} from './request.dto'

export interface ResponseDto{

    Status         : string;
    Message        : string;
    HttpCode       : number;
    Data?          : any;
    // Trace?         : string[];
    // Client         : CurrentClient;
    // User           : CurrentUser;
    // Context        : string;
    Request?       : RequestDto;
    // ClientIPS      : string[];
    // ApiVersion     : string;
    // ServiceVersion : string; 
    
}