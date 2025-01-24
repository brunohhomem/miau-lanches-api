import { CreatePedidoDto } from './dto/create-pedido.dto';
import { PrismaService } from 'src/db/prisma.service';
export declare class PedidoService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    calcularPedido({ lanches, adicionais, bebidas, }: {
        lanches: number[];
        adicionais: number[];
        bebidas: number[];
    }): Promise<{
        total: number;
    }>;
    create(createPedidoDto: CreatePedidoDto): Promise<{
        data: Date;
        id: number;
        descricao: string;
        preco: number;
        observacoes: string;
        clienteId: number;
    }>;
    findAll(): Promise<({
        lanches: {
            id: number;
            descricao: string;
            preco: number;
        }[];
        cliente: {
            id: number;
            nome: string;
            endereco: string;
            telefone: string;
        };
        bebidas: {
            id: number;
            descricao: string;
            preco: number;
            pedidoId: number | null;
            hasAcucar: boolean;
        }[];
        adicionais: {
            id: number;
            descricao: string;
            preco: number;
            isAdicional: boolean;
            pedidoId: number | null;
        }[];
    } & {
        data: Date;
        id: number;
        descricao: string;
        preco: number;
        observacoes: string;
        clienteId: number;
    })[]>;
    findOne(id: number): Promise<{
        lanches: {
            id: number;
            descricao: string;
            preco: number;
        }[];
        cliente: {
            id: number;
            nome: string;
            endereco: string;
            telefone: string;
        };
        bebidas: {
            id: number;
            descricao: string;
            preco: number;
            pedidoId: number | null;
            hasAcucar: boolean;
        }[];
        adicionais: {
            id: number;
            descricao: string;
            preco: number;
            isAdicional: boolean;
            pedidoId: number | null;
        }[];
    } & {
        data: Date;
        id: number;
        descricao: string;
        preco: number;
        observacoes: string;
        clienteId: number;
    }>;
    remove(id: number): Promise<{
        data: Date;
        id: number;
        descricao: string;
        preco: number;
        observacoes: string;
        clienteId: number;
    }>;
}
