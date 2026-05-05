# React Best Practices

Version 1.0.0
Vercel May 2026

## Abstract

Comprehensive performance optimization guide for React and Next.js applications, optimized for agents and LLMs.

## 1. Eliminating Waterfalls

### 1.1 Parallelize Data Fetching

**Impact:** CRITICAL - Eliminates waterfalls and reduces total wait time.
**Tags:** async, performance, waterfall

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

## 2. Bundle Size Optimization

## 3. Server-Side Performance

## 4. Client-Side Data Fetching

## 5. Re-render Optimization

## 6. Rendering Performance

## 7. JavaScript Performance

## 8. Advanced Patterns
