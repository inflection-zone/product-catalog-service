import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface InventoryDomainEntity{
    
    productId: uuid;
    merchantId: uuid;
    BatchNumber: uuid;
    TotalStock: number;
    CurrentStock: number;
    Units: number;
    UnitsOfMeasure: string;

}