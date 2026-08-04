import 'dotenv/config';
import { PrismaClient } from '../generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';

async function main() {
  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
  });
  const prisma = new PrismaClient({ adapter });

  try {
    const tasks = await prisma.task.findMany();
    console.log(`✅ Connected. Found ${tasks.length} task(s) in the database:`);
    tasks.forEach((t) =>
      console.log(`  #${t.id} [${t.completed ? '✓' : ' '}] ${t.title}`)
    );
  } catch (e) {
    console.error('❌ Connection failed:', e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
