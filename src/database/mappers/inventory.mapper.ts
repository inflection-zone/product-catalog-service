import {InventoryDto} from '../../domain.types/inventory/inventory.dto'
import {Inventory} from '../models/inventory'

export class InventoryMapper{

    static toDto = (inventory: Inventory) : InventoryDto =>{
        if(inventory == null){
            return null as any;
        }

        const dto : InventoryDto = {
            productId : inventory.id,
            merchantId : inventory.id,
            batchNumber : inventory.batchNumber,
            totalStock : inventory.totalStock,
            currentStock : inventory.currentStock,
            units : inventory.units,
            unitsOfMeasure : inventory.unitsOfMeasure
        };

        return dto;
    }

}