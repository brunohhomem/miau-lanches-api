"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const db_module_1 = require("./db/db.module");
const bebida_module_1 = require("./bebida/bebida.module");
const cliente_module_1 = require("./cliente/cliente.module");
const ingrediente_module_1 = require("./ingrediente/ingrediente.module");
const lanche_module_1 = require("./lanche/lanche.module");
const pedido_module_1 = require("./pedido/pedido.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            db_module_1.DbModule,
            cliente_module_1.ClienteModule,
            bebida_module_1.BebidaModule,
            ingrediente_module_1.IngredienteModule,
            lanche_module_1.LancheModule,
            pedido_module_1.PedidoModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map