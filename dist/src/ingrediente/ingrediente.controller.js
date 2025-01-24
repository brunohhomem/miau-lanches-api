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
exports.IngredienteController = void 0;
const common_1 = require("@nestjs/common");
const ingrediente_service_1 = require("./ingrediente.service");
let IngredienteController = class IngredienteController {
    constructor(ingredienteService) {
        this.ingredienteService = ingredienteService;
    }
    create(createIngredienteDto) {
        return this.ingredienteService.create(createIngredienteDto);
    }
    findAll() {
        return this.ingredienteService.findAll();
    }
    findAllAdicionais() {
        return this.ingredienteService.findAllAdicionais();
    }
    findById(id) {
        return this.ingredienteService.findById(+id);
    }
    async findByDesc(descricao) {
        return this.ingredienteService.findByDesc(descricao);
    }
    update(id, updateIngredienteDto) {
        return this.ingredienteService.update(+id, updateIngredienteDto);
    }
    remove(id) {
        return this.ingredienteService.remove(+id);
    }
};
exports.IngredienteController = IngredienteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], IngredienteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IngredienteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/adicionais'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IngredienteController.prototype, "findAllAdicionais", null);
__decorate([
    (0, common_1.Get)('id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IngredienteController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)('descricao/:descricao'),
    __param(0, (0, common_1.Param)('descricao')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IngredienteController.prototype, "findByDesc", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], IngredienteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IngredienteController.prototype, "remove", null);
exports.IngredienteController = IngredienteController = __decorate([
    (0, common_1.Controller)('ingredientes'),
    __metadata("design:paramtypes", [ingrediente_service_1.IngredienteService])
], IngredienteController);
//# sourceMappingURL=ingrediente.controller.js.map