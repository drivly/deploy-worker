// import { json } from 'https://pkg.do/apis.do@0.1.4'

export default {
    fetch: req => new Response(JSON.stringify({ hello: req.cf.city }, null, 2))
}

