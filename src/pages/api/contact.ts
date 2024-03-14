import type { APIContext } from 'astro'
import { db, Contact } from 'astro:db'

/*

!TODO : Falta implementar la restriccion de spam por IP
!TODO : Falta mostrar feedback al usuario si el mensaje fue enviado correctamente
!TODO : Falta actualizar el esquema de la base de datos para que la columna ip sea unica. Estaba lanzando un error -> estaba buscando una forma de borrar la base de datos y volver a crearla pero no encontre la forma de hacerlo
https://db.services.astro.build/db/push failed: 400 Bad Request
{"success":false,"error":{"code":"SQL_QUERY_FAILED","details":"SQL_INPUT_ERROR: SQL input error: table \"Contact\" already exists (at offset 13)"}}
/db/push fetch failed: 400 Bad Request
*/

export async function POST({ params, request, clientAddress }: APIContext) {
	const ip = request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for')

	const { email, message } = await request.json()
	console.log(email, message)
	console.log(clientAddress)

	//check email and message
	if (!email || !message) {
		return new Response(
			JSON.stringify({
				error: 'Email and message are required'
			}),
			{ status: 400 }
		)
	}

	//save to database ip address to check for spam
	// db.select().from(Contact).where({ ip })

	if (typeof email === 'string' && typeof message === 'string') {
		await db.insert(Contact).values({
			email,
			message
		})
	}

	return new Response(
		JSON.stringify({
			message: 'Contact form submitted'
		})
	)
}
