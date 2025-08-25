'use server';
import { prisma } from '@/db/prisma';
import { convertToPlainObject } from '../utils';
import { LATEST_PRODUCTS_LIMIT } from '../constants';

// Get latest products
export async function getLatestProduct() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: 'desc' },
  });
  const serializedData = data.map((p) => ({
    ...p,
    price: p.price.toString(),
    rating: p.rating.toString(),
  }));
  return convertToPlainObject(serializedData);
}

// Get single product by it's slug
export async function getProductBySlug(slug: string) {
  const data = await prisma.product.findFirst({
    where: { slug: slug },
  });
  return data;
}
