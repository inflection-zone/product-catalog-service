import { uuid } from "../miscellaneous/system.types";
import { CustomerDto } from "./customer.dto";


////////////////////////////////////////////////////////////


export interface CustomerSearchFilters{
    customerId?        : uuid   ;
    CustomerName?      : string ;
    CustomerTaxNumber? : string ;
    Phone?             : number ;
    Email?             : string ; 
    ProfileImage?      : string ;
}


////////////////////////////////////////////////////////////


export interface CustomerSearchResults{
    Items  : CustomerDto[] ;
}