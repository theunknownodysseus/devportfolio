import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromError(result.error);
        return res.status(400).json({ 
          error: validationError.toString() 
        });
      }

      const message = await storage.createContactMessage(result.data);
      
      return res.status(201).json({ 
        success: true,
        message: "Message received successfully",
        id: message.id,
        createdAt: message.createdAt?.toISOString() || new Date().toISOString()
      });
    } catch (error) {
      console.error("Error saving contact message:", error);
      return res.status(500).json({ 
        error: "Failed to save message. Please try again." 
      });
    }
  });

  app.get("/api/contact", async (_req, res) => {
    try {
      const messages = await storage.getContactMessages();
      const serializedMessages = messages.map(msg => ({
        ...msg,
        createdAt: msg.createdAt?.toISOString() || null
      }));
      return res.json(serializedMessages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      return res.status(500).json({ 
        error: "Failed to fetch messages." 
      });
    }
  });

  return httpServer;
}
