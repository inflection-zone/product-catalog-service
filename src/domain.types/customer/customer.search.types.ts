import { uuid } from "../miscellaneous/system.types";
import { CustomerDto } from "./customer.dto";


////////////////////////////////////////////////////////////


export interface CustomerSearchFilters{
    customerId?        : uuid   ;
    customerName?      : string ;
    customerTaxNumber? : string ;
    phone?             : number ;
    email?             : string ; 
    profileImage?      : string ;
}


////////////////////////////////////////////////////////////


export interface CustomerSearchResults{
    Items  : CustomerDto[] ;
}