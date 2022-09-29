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
        uses: drivly/deploy-worker
        with:
          name: 'hello-world'
          main: './worker.js'
          cloudflareAccountId: ${{ secrets.CF_ACCOUNT_ID }}
          cloudflareApiToken: ${{ secrets.CF_API_TOKEN }}
```
