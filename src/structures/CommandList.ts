import axios from "axios";
import { DiscordBot } from ".";
import { TextChannel } from "discord.js";

interface HeaderSection {
    header: string;
    description: string[];
    lastUpdated: number;
}

interface MarkdownData {
    headers?: HeaderSection[];
    footer?: string;
    // Các trường khác bạn muốn xử lí
}

export class CommandList {
	private client: DiscordBot;
	constructor(client: DiscordBot) {
		this.client = client;
	}

	public init() {
		setInterval(this.update, 1 * 60 * 60 * 60 * 1000);
	}

	private update() {
		const link = "https://gist.githubusercontent.com/MoonVN571/63d1b896584bb0be764937462c09e545/raw/ad351209d7d72c4036a6b3752fcc743d2d8299af/BOOKING_COMMANDS.md";
		axios.get(link).then(async res => {
			const fileContents = res.data;
			const json = this.markdownStringToJson(fileContents);
			json.headers.map(async section => {
				console.log(section.header.toLowerCase());
				const channel = this.client.channels.cache.find((channel: TextChannel) => channel.name === section.header.toLowerCase());
				if (!channel || !channel.isTextBased()) return;
				await channel.messages.fetch();
				const msg = "**" + section.header.toUpperCase() + "**"
                    + "\n```md"
                    + "\n"
                    + "\n" + section.description.join("\n")
                    + "```";
				+ "\n\nĐã cập nhật <t:" + parseInt(String(section.lastUpdated / 1000)) + ":R>";
				if (channel.messages.cache.size === 0) {
					channel.send(msg);
				} else {
					const message = channel.messages.cache.at(0);
					if (message.content.split("Đã cập nhật")[0] !== msg.split("Đã cập nhật")[0]) message.edit(msg);
				}
			});
		}).catch(this.client.logger.error);
	}

	private markdownStringToJson(markdown: string): MarkdownData {
		const lines = markdown.trim().split("\n");
		const jsonData: MarkdownData = {};
		let currentSection: keyof MarkdownData | undefined;
		let currentHeader: HeaderSection | undefined;

		for (const line of lines) {
			if (line.startsWith("# ")) {
				// Kết thúc phần Header trước đó, bắt đầu một phần Header mới
				if (currentHeader) {
					if (!jsonData.headers) {
						jsonData.headers = [];
					}
					jsonData.headers.push(currentHeader);
				}
				// Tạo một phần Header mới
				currentHeader = {
					header: line.substring(2).trim(),
					description: [],
					lastUpdated: Date.now(),
				};
				currentSection = undefined;
			} else if (line.startsWith("## ")) {
				// Đây là phần Footer
				currentSection = "footer";
				jsonData.footer = line.substring(3).trim();
			} else if (line.startsWith("### ")) {
				// Đây là phần Description của Header
				if (currentHeader) {
					currentHeader.description = [line.substring(4).trim()];
				}
				currentSection = undefined;
			} else {
				// Xử lý các dòng trong phần khác của Markdown nếu cần
				if (currentSection === "footer") {
					// Xử lý phần Footer
					if (!jsonData.footer) {
						jsonData.footer = line.trim();
					} else {
						jsonData.footer += `\n${line.trim()}`;
					}
				} else if (currentHeader) {
					// Nếu không phải phần Footer và có một phần Header hiện tại, là phần Description của Header
					if (!line.trim().startsWith("Quay trở") && line.trim() !== "```")
						currentHeader.description.push(`${line.trim()}`);
				}
			}
		}

		// Thêm phần Header cuối cùng vào dữ liệu JSON nếu có
		if (currentHeader) {
			if (!jsonData.headers) {
				jsonData.headers = [];
			}
			currentHeader.lastUpdated = Date.now();
			jsonData.headers.push(currentHeader);
		}

		return jsonData;
	}

}