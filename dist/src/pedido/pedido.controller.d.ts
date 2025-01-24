import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { CalculateTotalDto } from './dto/calculate-total.dto';
export declare class PedidoController {
    private readonly pedidoService;
    constructor(pedidoService: PedidoService);
    create(createPedidoDto: CreatePedidoDto): Promise<{
        data: Date;
        id: number;
        descricao: string;
        preco: number;
        observacoes: string;
        clienteId: number;
    }>;
    calculateTotalPedido(body: CalculateTotalDto): Promise<{
        total: number;
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
    findOne(id: string): Promise<{
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
    remove(id: string): Promise<{
        data: Date;
        id: number;
        descricao: string;
        preco: number;
        observacoes: string;
        clienteId: number;
    }>;
}
