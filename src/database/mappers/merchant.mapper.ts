import { HostAddress } from 'typeorm';
import {MerchantDto} from '../../domain.types/merchant/merchant.dto'
import {Merchant} from '../models/merchant'
import { url } from 'inspector';

export class MerchantMapper{

    static toDto = (merchant: Merchant) : MerchantDto =>{
        if(merchant == null){
            return null as any;
        }

        const dto : MerchantDto = {
            id : merchant.id,
            name : merchant.name,
            address : merchant.address,
            averageRatings : merchant.averageRatings,
            url : merchant.url,
            logo : merchant.logo
        };

        return dto;
    }

}