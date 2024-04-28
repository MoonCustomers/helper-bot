import express, { Express } from "express";
import { DiscordBot } from ".";

export class ExpressApp {
    private expressApp: Express;
    public discordBot: DiscordBot;

    constructor(discordBot: DiscordBot) {
        this.expressApp = express();
        this.discordBot = discordBot;
        this.configure();
        this.registerRoutes();
    }

    private configure(): void {
        // Cấu hình ứng dụng Express và các thiết lập khác
        // this.expressApp.use(...)
        // this.expressApp.use(...)
        // this.expressApp.use(...)
    }

    private registerRoutes(): void {
        this.expressApp.get("/", (req, res) => {
            res.send("Hello world");
        })

        this.expressApp.all("*", (req, res) => {
            res.send("Invalid request");
        });
    }

    public startListening(port): void {
        this.expressApp.listen(port, () => {
            this.discordBot.logger.info(`Listening on port ${port}`);
        });
    }
}
