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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BebidaController = void 0;
const common_1 = require("@nestjs/common");
const bebida_service_1 = require("./bebida.service");
let BebidaController = class BebidaController {
    constructor(bebidaService) {
        this.bebidaService = bebidaService;
    }
    create(createBebidaDto) {
        return this.bebidaService.create(createBebidaDto);
    }
    findAll() {
        return this.bebidaService.findAll();
    }
    findById(id) {
        return this.bebidaService.findById(+id);
    }
    async findByDesc(descricao) {
        return this.bebidaService.findByDesc(descricao);
    }
    update(id, updateBebidaDto) {
        return this.bebidaService.update(+id, updateBebidaDto);
    }
    remove(id) {
        return this.bebidaService.remove(+id);
    }
};
exports.BebidaController = BebidaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BebidaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BebidaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BebidaController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)('descricao/:descricao'),
    __param(0, (0, common_1.Param)('descricao')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BebidaController.prototype, "findByDesc", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BebidaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BebidaController.prototype, "remove", null);
exports.BebidaController = BebidaController = __decorate([
    (0, common_1.Controller)('bebidas'),
    __metadata("design:paramtypes", [bebida_service_1.BebidaService])
], BebidaController);
//# sourceMappingURL=bebida.controller.js.map