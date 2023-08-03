import { BrandDto } from "../domain types/brand/brand.domain.types";
import { Brand } from "../entity/brand.model";

export class BrandMapper {
    static toDto = (brand : Brand): BrandDto => {
        if (brand === null) {
            return null;
        }
        const dto: BrandDto = {
            id: brand.id,
            name: brand.name,
            logoUrl: brand.logoUrl,
        };
        return dto;
    }
}
