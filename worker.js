import { json, apis } from 'https://pkg.do/apis.do@0.1.4'

export default {
    fetch: req => json({ hello: 'world', apis })
}
