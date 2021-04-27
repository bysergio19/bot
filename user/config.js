/**
 * ###############################################################################################
 *  ____                                        _     _____              _             _
 * |  _ \  (_)  ___    ___    ___    _ __    __| |   |_   _| (_)   ___  | | __   ___  | |_   ___
 * | | | | | | / __|  / __|  / _ \  | '__|  / _` |     | |   | |  / __| | |/ /  / _ \ | __| / __|
 * | |_| | | | \__ \ | (__  | (_) | | |    | (_| |     | |   | | | (__  |   <  |  __/ | |_  \__ \
 * |____/  |_| |___/  \___|  \___/  |_|     \__,_|     |_|   |_|  \___| |_|\_\  \___|  \__| |___/
 *
 * ---------------------
 *      Quick Start
 * ---------------------
 *
 * 	> For detailed instructions, visit the GitHub repository and read the documentation:
 * 	https://github.com/eartharoid/DiscordTickets/wiki
 *
 * 	> IMPORTANT: Also edit the TOKEN in 'user/.env'
 *
 * ---------------------
 *       Support
 * ---------------------
 *
 * 	> Information: https://github.com/eartharoid/DiscordTickets/#readme
 * 	> Discord Support Server: https://go.eartharoid.me/discord
 * 	> Wiki: https://github.com/eartharoid/DiscordTickets/wiki
 *
 * ###############################################################################################
 */

module.exports = {
	prefix: '-',
	name: 'GalaxyNodes',
	presences: [

		{
			activity: 'tickets',
			type: 'WATCHING'
		}
	],
	append_presence: ' | %shelp',
	colour: '#009999',
	err_colour: 'RED',
	cooldown: 3,
	guild: '836236250327023636', // ID of your guild (REQUIRED)
	staff_role: '836650416288170015', // ID of your Support Team role (REQUIRED)

	tickets: {
		category: '804761107986120775', // ID of your tickets category (REQUIRED)
		send_img: true,
		ping: 'here',
		text: `Welcome, {{ tag }}!
		A staff member will be here as soon as possible.
		Please, describe your issue with \`-topic <topic>\`.`,
		pin: true,
		max: 3,
		default_topic: {
			command: 'No topic given',
			panel: 'Created via panel'
		}
	},

	commands: {
		close: {
			confirmation: true,
			send_transcripts: true
		},
		delete: {
			confirmation: true
		},
		new: {
			enabled: true
		},
		closeall: {
			enabled: true,
		},
	},

	transcripts: {
		text: {
			enabled: true,
			keep_for: 90,
		},
		web: {
			enabled: false,
			server: 'https://store.aqualand.ml',
		},
		channel: '836257505079984198' // ID of your archives channel
	},

	panel: {
		title: 'Support',
		description: 'Do you need help? Create a ticket and we will help you!',
		reaction: '🎫'
	},

	storage: {
		type: 'postgres'
	},

	logs: {
		files: {
			enabled: true,
			keep_for: 7
		},
		discord: {
			enabled: true,
			channel: '836257505079984198' // ID of your log channel
		}
	},

	debug: true,
	updater: true
};
