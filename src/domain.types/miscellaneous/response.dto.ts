

import { IRequestDto } from "./request.dto";
export interface IResponseDto {
    Status: string;
    Message: string;
    HttpCode: number;
    Request : IRequestDto;
    Data? : any;
    
}

