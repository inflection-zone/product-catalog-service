import { TableExclusion } from 'typeorm';
import {ProductMerchantDto} from '../../domain.types/product.merchant/product.merchant.dto'
import {ProductMerchant} from '../models/product.merchant'

export class ProductMerchantMapper{

    static toDto = (pm: ProductMerchant) : ProductMerchantDto =>{
        if(pm == null){
            return null as any;
        }

        const dto : ProductMerchantDto = {
            //productId : pm.productId,
            //merchantId : pm.merchantId,
            MerchantPrice : pm.MerchantPrice,
            Taxes : pm.Taxes,
            IncludeShipping : pm.IncludeShipping,
            ShippingCharges : pm.ShippingCharges
        };

        return dto;
    }

}