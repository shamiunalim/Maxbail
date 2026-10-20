# Maxiel-Xy

This repository is a **starter scaffold**, not a complete WhatsApp protocol client.

To make a real Baileys fork, import the complete source from a verified commit of
https://github.com/WhiskeySockets/Baileys, preserve its license and copyright notices,
retain the upstream tests and dependencies, then document Maxiel-Xy changes.

## Current status
- Package metadata and TypeScript build scaffold
- Minimal metadata utility and tests
- Does **not** yet include WhatsApp socket, authentication, encryption, or protocol code

## Development
Requires Node.js 20+.

```sh
npm install
npm run build
npm test
```

## Next steps for a genuine fork
1. Review upstream license and current supported version.
2. Fork the upstream repository on GitHub or clone a verified commit.
3. Keep all upstream license and attribution notices.
4. Port source and dependencies as a whole; do not publish this scaffold as a complete Baileys replacement.
5. Add regression tests for pairing, messaging, media, reconnect, and native-flow before claiming compatibility.

Use only accounts and devices you are authorized to operate.
