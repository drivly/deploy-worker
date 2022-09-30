// import { json, apis } from 'https://pkg.do/apis.do'
import { json } from 'https://pkg.do/itty-router-helpers'

export default {
    fetch: req => json({ hello: 'https://workers.do/api' })
}
