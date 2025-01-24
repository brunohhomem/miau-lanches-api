import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { PrismaService } from 'src/db/prisma.service';
export declare class IngredienteService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
    findById(id: number): Promise<{
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
    update(id: number, updateIngredienteDto: UpdateIngredienteDto): Promise<{
        id: number;
        descricao: string;
        preco: number;
        isAdicional: boolean;
        pedidoId: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        descricao: string;
        preco: number;
        isAdicional: boolean;
        pedidoId: number | null;
    }>;
}
