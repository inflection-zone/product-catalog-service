import {CustomerDto} from '../../domain.types/customer/customer.dto'
import {Customer} from '../models/customer'

export class CustomerMapper{

    static toDto = (customer: Customer) : CustomerDto =>{
        if(customer == null){
            return null as any;
        }

        const dto : CustomerDto = {
            customerId : customer.customerId,
            CustomerName : customer.CustomerName,
            CustomerTaxNumber : customer.CustomerTaxNumber,
            Phone : customer.Phone,
            Email : customer.Email,
            ProfileImage : customer.ProfileImage,
        };

        return dto;
    }

}