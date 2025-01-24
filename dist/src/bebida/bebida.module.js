"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BebidaModule = void 0;
const common_1 = require("@nestjs/common");
const bebida_service_1 = require("./bebida.service");
const bebida_controller_1 = require("./bebida.controller");
const db_module_1 = require("../db/db.module");
let BebidaModule = class BebidaModule {
};
exports.BebidaModule = BebidaModule;
exports.BebidaModule = BebidaModule = __decorate([
    (0, common_1.Module)({
        imports: [db_module_1.DbModule],
        controllers: [bebida_controller_1.BebidaController],
        providers: [bebida_service_1.BebidaService],
    })
], BebidaModule);
//# sourceMappingURL=bebida.module.js.map