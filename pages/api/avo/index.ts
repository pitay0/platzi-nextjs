import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'
import enablePublicAccess from '@cors'

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  try {
    
    //las api siempre sin "api" en minuscula
    await enablePublicAccess(req, res)

    const db = new DB()
    const allEntries = await db.getAll()
    const length = allEntries.length

    //fue necesario bajar la version de node
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.end(JSON.stringify({ length, data: allEntries }))
  } catch (e) {
    console.error(e)
    res.statusCode = 500
    res.end(
      JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
    )
  }
}

export default allAvos
