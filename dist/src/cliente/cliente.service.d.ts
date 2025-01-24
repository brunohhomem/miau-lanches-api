import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/db/prisma.service';
export declare class ClienteService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createClienteDto: CreateClienteDto): Promise<{
        id: number;
        nome: string;
        endereco: string;
        telefone: string;
    }>;
    findAll(): Promise<{
        id: number;
        nome: string;
        endereco: string;
        telefone: string;
    }[]>;
    findAllWithPedido(): Promise<({
        pedidos: {
            data: Date;
            id: number;
            descricao: string;
            preco: number;
            observacoes: string;
            clienteId: number;
        }[];
    } & {
        id: number;
        nome: string;
        endereco: string;
        telefone: string;
    })[]>;
    findOne(id: number): Promise<{
        id: number;
        nome: string;
        endereco: string;
        telefone: string;
    }>;
    update(id: number, updateClienteDto: UpdateClienteDto): Promise<{
        id: number;
        nome: string;
        endereco: string;
        telefone: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        nome: string;
        endereco: string;
        telefone: string;
    }>;
}
