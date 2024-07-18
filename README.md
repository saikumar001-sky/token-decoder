# JWT-Token-Decoder
Token Decoder is a versatile npm package designed to decode JSON Web Tokens (JWT). This package is compatible with any JavaScript framework, making it an essential tool for developers looking to effortlessly decode and inspect JWTs.
## Installation

Use the package manager NPM to install package

```bash
npm i jwt-decoder-lib
```

## Import
Import the DecodeJWT function from token-decoder:

```javascript
import { DecodeJWT } from "token-decoder"
```
## Using the Function
Just call DecodeJWT() with the JWT token as the argument:
```javascript
const decodedToken = DecodeJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
console.log(decodedToken);
```
```javascript
RESULT: [
  {
  header: { alg: "HS256", typ: "JWT" },
  payload: { sub: "1234567890", name: "John Doe", iat: 1516239022 }
}
]

```

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
## 🚀 About Me
I'm a Frontend Developer...
🚀[GitHub Repository](https://github.com/saikumar001-sky/token-decoder)