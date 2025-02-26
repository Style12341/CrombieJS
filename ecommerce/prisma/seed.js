import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Insertar categorías
  await prisma.category.createMany({
    data: [
      { name: "Teclados" },
      { name: "Laptops" },
      { name: "Mouse" },
    ],
  });

  // Obtener los datos de las categorías para usar sus UUIDs
  const teclados = await prisma.category.findFirst({ where: { name: "Teclados" } });
  const laptops = await prisma.category.findFirst({ where: { name: "Laptops" } });
  const mouse = await prisma.category.findFirst({ where: { name: "Mouse" } });

  // Insertar usuarios
  await prisma.user.createMany({
    data: [
      {
        name: "Juan Pérez",
        email: "juan@example.com",
        password: "hashedpassword123",
      },
      {
        name: "María López",
        email: "maria@example.com",
        password: "securepassword456",
      },
      {
        name: "Carlos Fernández",
        email: "carlos@example.com",
        password: "strongpass789",
      },
      {
        name: "Ana Gómez",
        email: "ana@example.com",
        password: "password123",
      },
      {
        name: "Pedro Sánchez",
        email: "pedro@example.com",
        password: "safeandsecure2024",
      },
      {
        name: "Lucía Ramírez",
        email: "lucia@example.com",
        password: "mypass456",
      },
      {
        name: "Diego Torres",
        email: "diego@example.com",
        password: "topsecret789",
      },
    ],
  });

  // Insertar productos con el id de la categoría correspondiente
  await prisma.product.createMany({
    data: [
      {
        name: "Laptop Gamer",
        description: "Potente laptop con RTX 3080",
        price: 2500,
        categoryId: laptops.id,
      },
      {
        name: "Mouse Inalámbrico",
        description: "Ergonómico y con gran autonomía",
        price: 50,
        categoryId: mouse.id,
      },
      {
        name: "Auriculares Bluetooth",
        description: "Sonido envolvente y cancelación de ruido",
        price: 120,
        categoryId: teclados.id, // Asignado arbitrariamente
      },
      {
        name: "Teclado Mecánico RGB",
        description: "Switches silenciosos y luces RGB personalizables",
        price: 200,
        categoryId: teclados.id,
      },
      {
        name: "Monitor 4K 32''",
        description: "Resolución ultra HD con 144Hz de refresco",
        price: 800,
        categoryId: laptops.id, // Asignado arbitrarily
      },
      {
        name: "Silla Gamer Ergonómica",
        description: "Comodidad para largas horas de juego o trabajo",
        price: 350,
        categoryId: laptops.id, // Asignado arbitrarily
      },
      {
        name: "Smartwatch Deportivo",
        description: "Monitoreo de salud y notificaciones en tiempo real",
        price: 180,
        categoryId: laptops.id, // Asignado arbitrarily
      },
      {
        name: "Micrófono Profesional USB",
        description: "Ideal para streaming y podcasting",
        price: 140,
        categoryId: mouse.id, // Asignado arbitrarily
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());