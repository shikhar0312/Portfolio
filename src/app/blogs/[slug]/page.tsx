import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostContent from "@/components/blogs/BlogPostContent";

// Sample blog content - In production, this would come from a CMS or MDX files
const blogContent: Record<string, { title: string; content: string; date: string; tags: string[]; readTime: string }> = {
    "building-scalable-apis-nodejs": {
        title: "Building Scalable REST APIs with Node.js",
        date: "2024-01-15",
        readTime: "8 min read",
        tags: ["Backend", "Node.js", "API Design"],
        content: `
# Building Scalable REST APIs with Node.js

Building production-ready REST APIs requires careful consideration of architecture, security, and performance. This guide covers the essential patterns and practices for creating APIs that can scale.

## Project Structure

A well-organized project structure is the foundation of maintainable code:

\`\`\`
src/
├── controllers/    # Request handlers
├── routes/        # API route definitions
├── services/      # Business logic
├── models/        # Data models
├── middleware/    # Custom middleware
├── utils/         # Helper functions
└── config/        # Configuration
\`\`\`

## Key Principles

### 1. Separation of Concerns

Keep your controllers thin by moving business logic to services. Controllers should only handle request/response flow.

### 2. Error Handling

Implement a centralized error handling middleware to catch and format all errors consistently.

### 3. Input Validation

Always validate incoming data using libraries like Joi or Zod before processing.

### 4. Rate Limiting

Protect your API from abuse with rate limiting using packages like express-rate-limit.

### 5. Caching

Implement caching strategies using Redis to reduce database load and improve response times.

## Conclusion

Building scalable APIs is an iterative process. Start with solid foundations and continuously optimize based on real-world usage patterns.
    `,
    },
    "system-design-fundamentals": {
        title: "System Design Fundamentals for Backend Engineers",
        date: "2024-01-10",
        readTime: "12 min read",
        tags: ["Systems", "Architecture", "Backend"],
        content: `
# System Design Fundamentals for Backend Engineers

Understanding system design is crucial for building applications that can handle growth and maintain reliability.

## Core Concepts

### Load Balancing

Distribute traffic across multiple servers to ensure no single server becomes a bottleneck.

### Caching

Store frequently accessed data in memory to reduce latency and database load.

### Database Sharding

Horizontally partition data across multiple database instances to handle larger datasets.

### Message Queues

Decouple components using asynchronous communication for better fault tolerance.

## Design Patterns

- **Microservices**: Break down monoliths into smaller, independently deployable services
- **Event-Driven Architecture**: React to events rather than direct API calls
- **CQRS**: Separate read and write operations for optimized performance

## Best Practices

1. Design for failure - assume components will fail
2. Make services stateless where possible
3. Implement health checks and monitoring
4. Document your architecture decisions

## Conclusion

System design is about making trade-offs. Understanding these fundamentals helps you make informed decisions for your specific use case.
    `,
    },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogContent[slug];

    if (!post) {
        return { title: "Post Not Found" };
    }

    return {
        title: `${post.title} | Shikhar Singh`,
        description: post.content.substring(0, 160),
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogContent[slug];

    if (!post) {
        notFound();
    }

    return <BlogPostContent post={post} />;
}
