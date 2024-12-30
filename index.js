```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  console.log(router.query);
  // Access environment variables correctly, example using next/config
  // import getConfig from 'next/config';
  // const { publicRuntimeConfig } = getConfig();
  // const myVar = publicRuntimeConfig.MY_CUSTOM_VARIABLE;
  // console.log(myVar);
}
```