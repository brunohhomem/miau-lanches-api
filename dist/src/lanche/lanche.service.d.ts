import { CreateLancheDto } from './dto/create-lanche.dto';
import { UpdateLancheDto } from './dto/update-lanche.dto';
import { PrismaService } from 'src/db/prisma.service';
export declare class LancheService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
    findOne(id: number): Promise<{
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
    findById(id: number): Promise<{
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
    update(id: number, updateLancheDto: UpdateLancheDto): Promise<{
        id: number;
        descricao: string;
        preco: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        descricao: string;
        preco: number;
    }>;
}
