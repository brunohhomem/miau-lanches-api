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
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../db/prisma.service");
let ClienteService = class ClienteService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createClienteDto) {
        return this.prismaService.cliente.create({
            data: createClienteDto,
        });
    }
    async findAll() {
        return this.prismaService.cliente.findMany({
            orderBy: {
                id: 'asc',
            },
        });
    }
    async findAllWithPedido() {
        return this.prismaService.cliente.findMany({
            include: {
                pedidos: true,
            },
            orderBy: {
                id: 'asc',
            },
        });
    }
    async findOne(id) {
        return this.prismaService.cliente.findUnique({
            where: { id },
        });
    }
    async update(id, updateClienteDto) {
        return this.prismaService.cliente.update({
            where: { id },
            data: updateClienteDto,
        });
    }
    async remove(id) {
        return this.prismaService.cliente.delete({
            where: { id },
        });
    }
};
exports.ClienteService = ClienteService;
exports.ClienteService = ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClienteService);
//# sourceMappingURL=cliente.service.js.map