import { CreateBebidaDto } from './dto/create-bebida.dto';
import { UpdateBebidaDto } from './dto/update-bebida.dto';
import { PrismaService } from 'src/db/prisma.service';
export declare class BebidaService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
    findById(id: number): Promise<{
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
    update(id: number, updateBebidaDto: UpdateBebidaDto): Promise<{
        id: number;
        descricao: string;
        preco: number;
        pedidoId: number | null;
        hasAcucar: boolean;
    }>;
    remove(id: number): Promise<{
        id: number;
        descricao: string;
        preco: number;
        pedidoId: number | null;
        hasAcucar: boolean;
    }>;
}
