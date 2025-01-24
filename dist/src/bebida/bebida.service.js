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
exports.BebidaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../db/prisma.service");
let BebidaService = class BebidaService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createBebidaDto) {
        return this.prismaService.bebida.create({
            data: createBebidaDto,
        });
    }
    async findAll() {
        return this.prismaService.bebida.findMany({
            orderBy: {
                id: 'asc',
            },
        });
    }
    async findById(id) {
        return this.prismaService.bebida.findUnique({
            where: { id },
        });
    }
    async findByDesc(descricao) {
        return this.prismaService.bebida.findFirst({
            where: { descricao: { contains: descricao, mode: 'insensitive' } },
        });
    }
    async update(id, updateBebidaDto) {
        return this.prismaService.bebida.update({
            where: { id },
            data: updateBebidaDto,
        });
    }
    async remove(id) {
        return this.prismaService.bebida.delete({
            where: { id },
        });
    }
};
exports.BebidaService = BebidaService;
exports.BebidaService = BebidaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BebidaService);
//# sourceMappingURL=bebida.service.js.map