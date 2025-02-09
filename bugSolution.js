```javascript
// pages/about.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function About() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      // Simulate fetching user data from localStorage or an API
      const storedUser = localStorage.getItem('user');
      const user = storedUser ? JSON.parse(storedUser) : null; // Handle null case
      setUser(user);
    };

    if (router.isReady) {
      fetchUserData();
    }
  }, [router.isReady]);

  if (!user) {
    return <p>Loading...</p>; // Or display an error message
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