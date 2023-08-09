import {CustomerDto} from '../../domain.types/customer/customer.dto'
import {Customer} from '../models/customer'

export class CustomerMapper{

    static toDto = (customer: Customer) : CustomerDto =>{
        if(customer == null){
            return null as any;
        }

        const dto : CustomerDto = {
            id : customer.id,
            customerName : customer.customerName,
            customerTaxNumber : customer.customerTaxNumber,
            phone : customer.phone,
            email : customer.email,
            profileImage : customer.profileImage
        };

        return dto;
    }

}