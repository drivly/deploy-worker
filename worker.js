import { json } from 'https://pkg.do/itty-router-extras'

export default {
    fetch: req => json({ hello: 'https://workers.do/api' })
}
