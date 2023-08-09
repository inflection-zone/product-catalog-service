import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface CustomerDomainEntity{
    id : uuid;
    customerName      : string ;
    customerTaxNumber : string ;
    phone             : number ;
    email             : string ;
    profileImage      : string ;

}