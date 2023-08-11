import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface CustomerDomainEntity {
    customerId: uuid;
    CustomerName: string;
    CustomerTaxNumber: string;
    Phone: number;
    Email: string;
    ProfileImage: string;
    Password: string;
}