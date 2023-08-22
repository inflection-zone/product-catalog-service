import { IBrandDto } from "../../domain.types/brand/brand.domain.types";
import { Brand } from "../models/brand.model";

export class BrandMapper {
    static toDto = (brand : Brand): IBrandDto => {
        if (brand === null) {
            return null;
        }
        const dto: IBrandDto = {
            id: brand.id,
            Name: brand.Name,
            LogoUrl: brand.LogoUrl,
        };
        return dto;
    }
    static toArrayDto(record: any[]): IBrandDto[] {
        if (record === null) {
            return null;
        }
    
        const dtos: IBrandDto[] = [];
    
        record.forEach((brand) => {
            dtos.push({
                id: brand.id,
                Name: brand.Name,
                LogoUrl: brand.LogoUrl,
            });
        });
        return dtos;
        }
}
