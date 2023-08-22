import {InventoryDto} from '../../domain.types/inventory/inventory.dto'
import {Inventory} from '../models/inventory'

export class InventoryMapper{

    static toDto = (inventory: Inventory) : InventoryDto =>{
        if(inventory == null){
            return null as any;
        }

        const dto : InventoryDto = {
           // productId : inventory.id,
            merchantId : inventory.id,
            BatchNumber : inventory.BatchNumber,
            TotalStock : inventory.TotalStock,
            CurrentStock : inventory.CurrentStock,
            Units : inventory.Units,
            UnitsOfMeasure : inventory.UnitsOfMeasure
        };

        return dto;
    }

}