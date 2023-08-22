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
            merchantId : merchant.merchantId,
            MerchantName : merchant.MerchantName,
            Email : merchant.Email,
            Address : merchant.Address,
            AverageRatings : merchant.AverageRatings,
            Url : merchant.Url,
            Logo : merchant.Logo
        };

        return dto;
    }

}