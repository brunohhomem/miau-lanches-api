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
exports.IngredienteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../db/prisma.service");
let IngredienteService = class IngredienteService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createIngredienteDto) {
        return this.prismaService.ingrediente.create({
            data: createIngredienteDto,
        });
    }
    async findAll() {
        return this.prismaService.ingrediente.findMany({
            orderBy: {
                id: 'asc',
            },
        });
    }
    async findAllAdicionais() {
        return this.prismaService.ingrediente.findMany({
            where: { isAdicional: true },
            orderBy: {
                id: 'asc',
            },
        });
    }
    async findById(id) {
        return this.prismaService.ingrediente.findUnique({
            where: { id },
        });
    }
    async findByDesc(descricao) {
        return this.prismaService.ingrediente.findFirst({
            where: { descricao: { contains: descricao, mode: 'insensitive' } },
        });
    }
    async update(id, updateIngredienteDto) {
        return this.prismaService.ingrediente.update({
            where: { id },
            data: updateIngredienteDto,
        });
    }
    async remove(id) {
        return this.prismaService.ingrediente.delete({
            where: { id },
        });
    }
};
exports.IngredienteService = IngredienteService;
exports.IngredienteService = IngredienteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], IngredienteService);
//# sourceMappingURL=ingrediente.service.js.map