import { apis, json } from 'https://pkg.do/apis.do'

export default {
    fetch: () => new Response(JSON.stringify({apis}))
}