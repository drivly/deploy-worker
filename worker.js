import { json, apis } from 'https://pkg.do/apis.do'

export default {
    fetch: req => json({ hello: 'https://workers.do/api', apis })
}
