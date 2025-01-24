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
exports.LancheController = void 0;
const common_1 = require("@nestjs/common");
const lanche_service_1 = require("./lanche.service");
let LancheController = class LancheController {
    constructor(lancheService) {
        this.lancheService = lancheService;
    }
    create(createLancheDto) {
        return this.lancheService.create(createLancheDto);
    }
    findAll() {
        return this.lancheService.findAll();
    }
    findById(id) {
        return this.lancheService.findById(+id);
    }
    async findByDesc(descricao) {
        return this.lancheService.findByDesc(descricao);
    }
    update(id, updateLancheDto) {
        return this.lancheService.update(+id, updateLancheDto);
    }
    remove(id) {
        return this.lancheService.remove(+id);
    }
};
exports.LancheController = LancheController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LancheController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LancheController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LancheController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)('descricao/:descricao'),
    __param(0, (0, common_1.Param)('descricao')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LancheController.prototype, "findByDesc", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LancheController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LancheController.prototype, "remove", null);
exports.LancheController = LancheController = __decorate([
    (0, common_1.Controller)('lanches'),
    __metadata("design:paramtypes", [lanche_service_1.LancheService])
], LancheController);
//# sourceMappingURL=lanche.controller.js.map