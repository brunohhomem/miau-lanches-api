import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
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
    findOne(id: string): Promise<{
        id: number;
        nome: string;
        endereco: string;
        telefone: string;
    }>;
    update(id: string, updateClienteDto: UpdateClienteDto): Promise<{
        id: number;
        nome: string;
        endereco: string;
        telefone: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        nome: string;
        endereco: string;
        telefone: string;
    }>;
}
