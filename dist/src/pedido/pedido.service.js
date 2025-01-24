"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../db/prisma.service");
let PedidoService = class PedidoService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async calcularPedido({ lanches, adicionais, bebidas, }) {
        const lanchesTotal = await this.prismaService.lanche.findMany({
            where: { id: { in: lanches } },
            select: { preco: true },
        });
        const adicionaisTotal = await this.prismaService.ingrediente.findMany({
            where: { id: { in: adicionais } },
            select: { preco: true },
        });
        const bebidasTotal = await this.prismaService.bebida.findMany({
            where: { id: { in: bebidas } },
            select: { preco: true },
        });
        const total = lanchesTotal.reduce((sum, item) => sum + item.preco, 0) +
            adicionaisTotal.reduce((sum, item) => sum + item.preco, 0) +
            bebidasTotal.reduce((sum, item) => sum + item.preco, 0);
        return { total };
    }
    async create(createPedidoDto) {
        const { lanches, bebidas, adicionais, cliente, observacoes, preco, descricao, } = createPedidoDto;
        const newCliente = await this.prismaService.cliente.create({
            data: cliente,
        });
        const clienteId = newCliente.id;
        return this.prismaService.pedido.create({
            data: {
                descricao,
                preco,
                observacoes,
                cliente: { connect: { id: clienteId } },
                lanches: {
                    connect: lanches?.map((id) => ({ id })) || [],
                },
                bebidas: {
                    connect: bebidas?.map((id) => ({ id })) || [],
                },
                adicionais: {
                    connect: adicionais?.map((id) => ({ id })) || [],
                },
            },
        });
    }
    async findAll() {
        return this.prismaService.pedido.findMany({
            include: {
                lanches: true,
                bebidas: true,
                adicionais: true,
                cliente: true,
            },
            orderBy: {
                id: 'asc',
            },
        });
    }
    async findOne(id) {
        return this.prismaService.pedido.findUnique({
            where: { id },
            include: {
                lanches: true,
                bebidas: true,
                adicionais: true,
                cliente: true,
            },
        });
    }
    async remove(id) {
        return this.prismaService.pedido.delete({
            where: { id },
        });
    }
};
exports.PedidoService = PedidoService;
exports.PedidoService = PedidoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PedidoService);
//# sourceMappingURL=pedido.service.js.map