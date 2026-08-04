import 'dotenv/config';
import { PrismaClient } from '../generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding database...');

  // Clear existing data
  await prisma.task.deleteMany();

  // Seed tasks
  const tasks = await prisma.task.createManyAndReturn({
    data: [
      {
        title: 'Set up Prisma Postgres',
        description: 'Connect NestJS to cloud PostgreSQL using Prisma 7',
        completed: true,
      },
      {
        title: 'Build REST API endpoints',
        description: 'Implement GET and POST for /task',
        completed: true,
      },
      {
        title: 'Add full CRUD operations',
        description: 'Add GET :id, PATCH :id, DELETE :id endpoints',
        completed: false,
      },
      {
        title: 'Add authentication',
        description: 'Implement JWT auth with NestJS guards',
        completed: false,
      },
    ],
  });

  console.log(`✅ Seeded ${tasks.length} tasks:`);
  tasks.forEach((t) => console.log(`  - [${t.completed ? '✓' : ' '}] ${t.title}`));
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
