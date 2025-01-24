import { IngredienteService } from './ingrediente.service';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
export declare class IngredienteController {
    private readonly ingredienteService;
    constructor(ingredienteService: IngredienteService);
    create(createIngredienteDto: CreateIngredienteDto): Promise<{
        id: number;
        descricao: string;
        preco: number;
        isAdicional: boolean;
        pedidoId: number | null;
    }>;
    findAll(): Promise<{
        id: number;
        descricao: string;
        preco: number;
        isAdicional: boolean;
        pedidoId: number | null;
    }[]>;
    findAllAdicionais(): Promise<{
        id: number;
        descricao: string;
        preco: number;
        isAdicional: boolean;
        pedidoId: number | null;
    }[]>;
    findById(id: string): Promise<{
        id: number;
        descricao: string;
        preco: number;
        isAdicional: boolean;
        pedidoId: number | null;
    }>;
    findByDesc(descricao: string): Promise<{
        id: number;
        descricao: string;
        preco: number;
        isAdicional: boolean;
        pedidoId: number | null;
    }>;
    update(id: string, updateIngredienteDto: UpdateIngredienteDto): Promise<{
        id: number;
        descricao: string;
        preco: number;
        isAdicional: boolean;
        pedidoId: number | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        descricao: string;
        preco: number;
        isAdicional: boolean;
        pedidoId: number | null;
    }>;
}
