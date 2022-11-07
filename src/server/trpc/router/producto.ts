import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const productoRouter = router({
  createProduct: publicProcedure
    .input(
      z.object({
        nombre: z.string(),
        slug: z.string(),
        descripcion: z.string(),
        inventario: z.number(),
        precio: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.producto.create({
          data: {
            nombre: input.nombre,
            slug: input.slug,
            descripcion: input.descripcion,
            inventario: input.inventario,
            precio: input.precio,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
      try {
        return await ctx.prisma.producto.findMany({
          select: {
            nombre: true,
            slug: true,
            descripcion: true,
            inventario: true,
            precio: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        });
      } catch (error) {
        console.log("error", error);
      }
    }),
});
