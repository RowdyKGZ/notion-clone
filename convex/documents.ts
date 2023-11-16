import { mutationGeneric } from "convex/server";
import { v } from "convex/values";

import { mutation, query } from "./_generated/server";
import { Id, Doc } from "./_generated/dataModel";

export const create = mutation({
  args: { title: v.string(), parentDocument: v.optional(v.id("documents")) },
  handler: async (ctx, arg) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not Authenticated");
    }

    const userId = identity.subject;

    const document = await ctx.db.insert("documents", {
      title: arg.title,
      parentDocument: arg.parentDocument,
      userId,
      isArchived: false,
      isPublish: false,
    });

    return document;
  },
});

export const get = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not Authenticated");
    }

    const document = await ctx.db.query("documents").collect();

    return document;
  },
});
