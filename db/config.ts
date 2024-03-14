import { NOW, column, defineDb, defineTable } from 'astro:db'

const Contact = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),

		// A string of text.
		email: column.text(),
		// A whole integer value.
		message: column.text({
			multiline: true
		}),
		// Date/time values queried as JavaScript Date objects.
		date: column.date({ default: NOW })
	}
})

export default defineDb({
	tables: { Contact }
})
