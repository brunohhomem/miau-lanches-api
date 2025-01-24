"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const bebidas = await prisma.bebida.createMany({
        data: [
            { descricao: 'Coca-Cola', preco: 5.0, hasAcucar: true },
            { descricao: 'Pepsi', preco: 4.5, hasAcucar: true },
            { descricao: 'Água com gás', preco: 3.0, hasAcucar: false },
            { descricao: 'Água sem gás', preco: 2.5, hasAcucar: false },
            { descricao: 'Suco de Laranja', preco: 6.0, hasAcucar: false },
            { descricao: 'Suco de Uva', preco: 6.5, hasAcucar: false },
            { descricao: 'Refrigerante de Guaraná', preco: 4.0, hasAcucar: true },
            { descricao: 'Chá Gelado', preco: 4.0, hasAcucar: true },
            { descricao: 'Energético', preco: 10.0, hasAcucar: true },
            { descricao: 'Café Expresso', preco: 3.5, hasAcucar: false },
        ],
    });
    const ingredientes = await prisma.ingrediente.createMany({
        data: [
            { descricao: 'Queijo', preco: 2.0, isAdicional: false },
            { descricao: 'Presunto', preco: 2.5, isAdicional: false },
            { descricao: 'Hambúrguer', preco: 5.0, isAdicional: false },
            { descricao: 'Tomate', preco: 1.0, isAdicional: false },
            { descricao: 'Alface', preco: 1.0, isAdicional: false },
            { descricao: 'Bacon', preco: 3.0, isAdicional: true },
            { descricao: 'Cebola Caramelizada', preco: 2.5, isAdicional: true },
            { descricao: 'Ovo', preco: 2.0, isAdicional: true },
            { descricao: 'Picles', preco: 1.5, isAdicional: true },
            { descricao: 'Molho Especial', preco: 1.5, isAdicional: true },
        ],
    });
    const allIngredients = await prisma.ingrediente.findMany();
    const lanches = await Promise.all([
        prisma.lanche.create({
            data: {
                descricao: 'Cheeseburger',
                preco: 12.0,
                ingredientes: {
                    connect: allIngredients.filter((i) => ['Queijo', 'Hambúrguer', 'Tomate', 'Alface'].includes(i.descricao)),
                },
            },
        }),
        prisma.lanche.create({
            data: {
                descricao: 'X-Bacon',
                preco: 15.0,
                ingredientes: {
                    connect: allIngredients.filter((i) => ['Queijo', 'Hambúrguer', 'Bacon', 'Molho Especial'].includes(i.descricao)),
                },
            },
        }),
        prisma.lanche.create({
            data: {
                descricao: 'Veggie Burger',
                preco: 10.0,
                ingredientes: {
                    connect: allIngredients.filter((i) => ['Queijo', 'Tomate', 'Alface', 'Molho Especial', 'Picles'].includes(i.descricao)),
                },
            },
        }),
        prisma.lanche.create({
            data: {
                descricao: 'Chicken Sandwich',
                preco: 14.0,
                ingredientes: {
                    connect: allIngredients.filter((i) => ['Queijo', 'Tomate', 'Alface', 'Molho Especial', 'Ovo'].includes(i.descricao)),
                },
            },
        }),
        prisma.lanche.create({
            data: {
                descricao: 'Double Burger',
                preco: 18.0,
                ingredientes: {
                    connect: allIngredients.filter((i) => ['Queijo', 'Hambúrguer', 'Bacon', 'Cebola Caramelizada'].includes(i.descricao)),
                },
            },
        }),
    ]);
    console.log({ bebidas, ingredientes, lanches });
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map