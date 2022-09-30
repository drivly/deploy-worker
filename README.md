# Deploy Worker GitHub Action

### Blazing Fast Build & Deployment of Cloudflare Workers 
- Supports HTTP imports
- Supports Workers for Platforms 

You don't even need a Cloudflare account to deploy workers with this action.

```yaml
name: Deploy
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - uses: actions/checkout@v3
      - name: deploy-worker
        uses: drivly/deploy-worker@beta-1
        with:
          name: 'hello-world'
          main: './worker.js'
```

You can specify a domain name, just CNAME that domain to `workers.do` and you're good to go.

```yaml
      - name: deploy-worker
        uses: drivly/deploy-worker@beta-1
        with:
          name: 'hello-world'
          main: './worker.js'
          domain: 'nathanclevenger.com'
```

But you can deploy to your Cloudflare account if you prefer:

```yaml
name: Deploy
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - uses: actions/checkout@v3
      - name: deploy-worker
        uses: drivly/deploy-worker@beta-1
        with:
          name: 'hello-world'
          main: './worker.js'
          cloudflareAccountId: ${{ secrets.CF_ACCOUNT_ID }}
          cloudflareApiToken: ${{ secrets.CF_API_TOKEN }}
```

You can also specify a 'wrangler.toml' file to use for configuration:

```yaml
name: Deploy
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - uses: actions/checkout@v3
      - name: deploy-worker
        uses: drivly/deploy-worker@beta-1
        with:
          name: 'hello-world'
          main: './worker.js'
          config: './wrangler.toml'
          cloudflareAccountId: ${{ secrets.CF_ACCOUNT_ID }}
          cloudflareApiToken: ${{ secrets.CF_API_TOKEN }}
```

But you can also specify your configuration in YAML:
```yaml
          config: './worker.yaml'
```
`worker.yaml`:
```yaml
name: worker
main: ./some-entrypoint
account_id: ''
workers_dev: true
usage_model: unbound
routes:
  - pattern: '*'
    zone_name: ZONE_NAME
route:
  pattern: '*'
  zone_name: ZONE_NAME
keep_vars: true
vars:
  KEY: value
triggers:
  crons:
    - 1 * * * *
kv_namespaces:
  - binding: <YOUR_NAMESPACE_0>
    id: <YOUR_ID>
    preview_id: <YOUR_PREVIEW_ID>
  - binding: <YOUR_NAMESPACE_1>
    id: <YOUR_ID>
    preview_id: <YOUR_PREVIEW_ID>
durable_objects:
  bindings:
    - name: TEST_OBJECT
      class_name: ''
      script_name: ''
migrations:
  - tag: ''
    new_classes:
      - ''
    renamed_classes:
      - from: DurableObjectExample
        to: UpdatedName
    deleted_classes:
      - DeprecatedClass
    r2_buckets:
      - binding: TEST_BUCKET
        bucket_name: ''
        preview_bucket_name: ''
build:
  command: npm run build
  cwd: build_cwd
  watch_dir: build_watch_dir
rules:
  - type: Text
    globs:
      - '**/*.md'
    fallthrough: true
text_blobs:
  TEXT: ''
wasm_modules:
  MODULE: module.wasm
data_blobs:
  DATA: ''
  tsconfig: ./tsconfig.json
  minify: false
  node_compat: false
site:
  bucket: ./public
  include:
    - upload_dir
  exclude:
    - ignore_dir
env:
  compatibility_date: '2021-11-12'
  compatibility_flags:
    - formdata_parser_supports_files
  services:
    - binding: TEST_BINDING
      service: ''
      environment: ''
```

Or JSON if you prefer:

```yaml
          config: './worker.json'
```
`worker.json`:
```json
{
  "name": "worker",
  "main": "./some-entrypoint",
  "account_id": "",
  "workers_dev": true,
  "usage_model": "unbound",
  "routes": [
    {
      "pattern": "*",
      "zone_name": "ZONE_NAME"
    }
  ],
  "route": {
    "pattern": "*",
    "zone_name": "ZONE_NAME"
  },
  "keep_vars": true,
  "vars": {
    "KEY": "value"
  },
  "triggers": {
    "crons": [
      "1 * * * *"
    ]
  },
  "kv_namespaces": [
    {
      "binding": "<YOUR_NAMESPACE_0>",
      "id": "<YOUR_ID>",
      "preview_id": "<YOUR_PREVIEW_ID>"
    },
    {
      "binding": "<YOUR_NAMESPACE_1>",
      "id": "<YOUR_ID>",
      "preview_id": "<YOUR_PREVIEW_ID>"
    }
  ],
  "durable_objects": {
    "bindings": [
      {
        "name": "TEST_OBJECT",
        "class_name": "",
        "script_name": ""
      }
    ]
  },
  "migrations": [
    {
      "tag": "",
      "new_classes": [
        ""
      ],
      "renamed_classes": [
        {
          "from": "DurableObjectExample",
          "to": "UpdatedName"
        }
      ],
      "deleted_classes": [
        "DeprecatedClass"
      ],
      "r2_buckets": [
        {
          "binding": "TEST_BUCKET",
          "bucket_name": "",
          "preview_bucket_name": ""
        }
      ]
    }
  ],
  "build": {
    "command": "npm run build",
    "cwd": "build_cwd",
    "watch_dir": "build_watch_dir"
  },
  "rules": [
    {
      "type": "Text",
      "globs": [
        "**/*.md"
      ],
      "fallthrough": true
    }
  ],
  "text_blobs": {
    "TEXT": ""
  },
  "wasm_modules": {
    "MODULE": "module.wasm"
  },
  "data_blobs": {
    "DATA": "",
    "tsconfig": "./tsconfig.json",
    "minify": false,
    "node_compat": false
  },
  "site": {
    "bucket": "./public",
    "include": [
      "upload_dir"
    ],
    "exclude": [
      "ignore_dir"
    ]
  },
  "env": {
    "compatibility_date": "2021-11-12",
    "compatibility_flags": [
      "formdata_parser_supports_files"
    ],
    "services": [
      {
        "binding": "TEST_BINDING",
        "service": "",
        "environment": ""
      }
    ]
  }
}
```


