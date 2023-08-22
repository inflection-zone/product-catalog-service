import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface CustomerDto{
    customerId : uuid;
    CustomerName      : string ;
    CustomerTaxNumber : string ;
    Phone             : number ;
    Email             : string ;
    ProfileImage      : string ;
}