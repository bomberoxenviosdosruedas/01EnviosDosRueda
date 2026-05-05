---
title: Parallelize Data Fetching
impact: CRITICAL
impactDescription: Eliminates waterfalls and reduces total wait time.
tags: async, performance, waterfall
---

## Parallelize Data Fetching

When fetching data that doesn't depend on each other, use `Promise.all` to fetch them in parallel instead of awaiting them sequentially. This avoids waterfalls where one request has to finish before the next one starts.

**Incorrect (sequential awaits causing a waterfall):**

```typescript
async function fetchData(userId: string) {
  const user = await fetchUser(userId);
  const posts = await fetchPosts(userId); // Waterfall: waits for fetchUser to finish
  return { user, posts };
}
```

**Correct (parallel fetching with Promise.all):**

```typescript
async function fetchData(userId: string) {
  const [user, posts] = await Promise.all([
    fetchUser(userId),
    fetchPosts(userId)
  ]);
  return { user, posts };
}
```

Parallelizing these requests can cut the total loading time in half if both requests take approximately the same amount of time.

Reference: [Vercel Performance Docs](https://vercel.com/docs/concepts/functions/serverless-functions/performance)
