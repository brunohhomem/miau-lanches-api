import { LancheService } from './lanche.service';
import { CreateLancheDto } from './dto/create-lanche.dto';
import { UpdateLancheDto } from './dto/update-lanche.dto';
export declare class LancheController {
    private readonly lancheService;
    constructor(lancheService: LancheService);
    create(createLancheDto: CreateLancheDto): Promise<{
        id: number;
        descricao: string;
        preco: number;
    }>;
    findAll(): Promise<({
        ingredientes: {
            id: number;
            descricao: string;
            preco: number;
            isAdicional: boolean;
            pedidoId: number | null;
        }[];
    } & {
        id: number;
        descricao: string;
        preco: number;
    })[]>;
    findById(id: string): Promise<{
        ingredientes: {
            id: number;
            descricao: string;
            preco: number;
            isAdicional: boolean;
            pedidoId: number | null;
        }[];
    } & {
        id: number;
        descricao: string;
        preco: number;
    }>;
    findByDesc(descricao: string): Promise<{
        ingredientes: {
            id: number;
            descricao: string;
            preco: number;
            isAdicional: boolean;
            pedidoId: number | null;
        }[];
    } & {
        id: number;
        descricao: string;
        preco: number;
    }>;
    update(id: string, updateLancheDto: UpdateLancheDto): Promise<{
        id: number;
        descricao: string;
        preco: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        descricao: string;
        preco: number;
    }>;
}
