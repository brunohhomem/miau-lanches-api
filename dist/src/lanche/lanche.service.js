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
exports.LancheService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../db/prisma.service");
let LancheService = class LancheService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createLancheDto) {
        const { ingredientesIds, ...rest } = createLancheDto;
        return this.prismaService.lanche.create({
            data: {
                ...rest,
                ingredientes: {
                    connect: ingredientesIds?.map((id) => ({ id })) || [],
                },
            },
        });
    }
    async findAll() {
        return this.prismaService.lanche.findMany({
            include: {
                ingredientes: true,
            },
            orderBy: {
                id: 'asc',
            },
        });
    }
    async findOne(id) {
        return this.prismaService.lanche.findUnique({
            where: { id },
            include: {
                ingredientes: true,
            },
        });
    }
    async findById(id) {
        return this.prismaService.lanche.findUnique({
            where: { id },
            include: {
                ingredientes: true,
            },
        });
    }
    async findByDesc(descricao) {
        return this.prismaService.lanche.findFirst({
            where: { descricao: { contains: descricao, mode: 'insensitive' } },
            include: {
                ingredientes: true,
            },
        });
    }
    async update(id, updateLancheDto) {
        const { ingredientesIds, ...rest } = updateLancheDto;
        return this.prismaService.lanche.update({
            where: { id },
            data: {
                ...rest,
                ingredientes: {
                    set: ingredientesIds?.map((id) => ({ id })) || [],
                },
            },
        });
    }
    async remove(id) {
        return this.prismaService.lanche.delete({
            where: { id },
        });
    }
};
exports.LancheService = LancheService;
exports.LancheService = LancheService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LancheService);
//# sourceMappingURL=lanche.service.js.map