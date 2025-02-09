```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
function About() {
  // This will cause an error if you navigate directly to /about
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    throw new Error('User data not found');
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome, {user.name}</p>
    </div>
  );
}

export default About;
```