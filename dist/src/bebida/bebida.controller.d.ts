import { BebidaService } from './bebida.service';
import { CreateBebidaDto } from './dto/create-bebida.dto';
import { UpdateBebidaDto } from './dto/update-bebida.dto';
export declare class BebidaController {
    private readonly bebidaService;
    constructor(bebidaService: BebidaService);
    create(createBebidaDto: CreateBebidaDto): Promise<{
        id: number;
        descricao: string;
        preco: number;
        pedidoId: number | null;
        hasAcucar: boolean;
    }>;
    findAll(): Promise<{
        id: number;
        descricao: string;
        preco: number;
        pedidoId: number | null;
        hasAcucar: boolean;
    }[]>;
    findById(id: string): Promise<{
        id: number;
        descricao: string;
        preco: number;
        pedidoId: number | null;
        hasAcucar: boolean;
    }>;
    findByDesc(descricao: string): Promise<{
        id: number;
        descricao: string;
        preco: number;
        pedidoId: number | null;
        hasAcucar: boolean;
    }>;
    update(id: string, updateBebidaDto: UpdateBebidaDto): Promise<{
        id: number;
        descricao: string;
        preco: number;
        pedidoId: number | null;
        hasAcucar: boolean;
    }>;
    remove(id: string): Promise<{
        id: number;
        descricao: string;
        preco: number;
        pedidoId: number | null;
        hasAcucar: boolean;
    }>;
}
