# Deploy Worker GitHub Action

### Blazing Fast Build & Deployment of Cloudflare Workers 
- Supports HTTP imports
- Supports Workers for Platforms 

```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - uses: actions/checkout@v3
      - name: deploy-worker
        uses: drivly/deploy-worker
        with:
          main: './worker.js'
          apiToken: ${{ secrets.CF_API_TOKEN }}
          accountId: ${{ secrets.CF_ACCOUNT_ID }}
```
