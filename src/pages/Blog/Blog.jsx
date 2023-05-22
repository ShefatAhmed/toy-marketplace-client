import React from 'react';

const Blog = () => {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto py-8">
                <h1 className="text-4xl text-center font-bold mb-8">Some questions and their answers</h1>

                <div className="grid grid-cols-1 mx-8 gap-16">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-bold mb-4">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <p className="text-gray-700">
                            Access and refresh tokens are crucial components of authentication systems. An access token is a short-lived credential issued after successful authentication, used to access protected resources. It contains user identity and permissions and is included in API requests. On the other hand, a refresh token is a long-lived credential obtained during authentication, enabling the acquisition of new access tokens once they expire. To store these tokens securely on the client-side, best practices dictate that access tokens be stored in a secure manner, such as in memory or a browser's local storage. Meanwhile, refresh tokens should be stored in a secure HTTP-only cookie, protecting against cross-site scripting attacks. Secure storage practices minimize the risk of unauthorized access or theft of these tokens, safeguarding sensitive user information.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4">Compare SQL and NoSQL databases?</h2>
                        <p className="text-gray-700">
                            SQL (Structured Query Language) and NoSQL (Not only SQL) databases differ in their data models, scalability approaches, query languages, ACID compliance, and use cases. SQL databases use a structured, relational data model based on tables with predefined schemas, providing strict data consistency and integrity. In contrast, NoSQL databases offer flexibility with various data models like key-value, document, columnar, and graph, allowing for unstructured and rapidly changing data. SQL databases scale vertically by adding more powerful hardware, while NoSQL databases excel at horizontal scalability by distributing data across multiple servers. SQL databases employ a standardized query language (SQL) with powerful querying capabilities and joins, whereas NoSQL databases have their own query languages tailored to their data models. SQL databases prioritize ACID compliance for transactional consistency, while NoSQL databases may opt for eventual consistency models for scalability and performance. SQL databases are often used in applications requiring complex transactions and structured data, while NoSQL databases are suitable for scenarios involving large volumes of unstructured data, real-time processing, and high scalability needs, such as social media, IoT, and big data analytics.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4">
                            What is express js?</h2>
                        <p className="text-gray-700">
                        Express.js is a minimal and flexible web application framework for Node.js. It provides a robust set of features and tools for building web applications and APIs. With a simple and intuitive interface, Express.js allows developers to create server-side applications efficiently. It simplifies tasks such as routing, handling HTTP requests and responses, managing middleware, and dealing with session management. Express.js also integrates seamlessly with various templating engines and databases, making it versatile for different application needs. Its lightweight nature and extensive community support have made Express.js a popular choice among developers for creating scalable and efficient web applications in Node.js.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4">What is Nest JS?</h2>
                        <p className="text-gray-700">
                        Nest.js is a progressive and extensible framework for building efficient, scalable, and maintainable server-side applications. It is built on top of Node.js and utilizes TypeScript as its primary language. Nest.js combines the best features of popular frameworks like Angular and Express.js to provide a structured and modular approach to application development. It offers built-in support for dependency injection, decorators, middleware, and modules, making it easy to create highly organized and testable code. Nest.js promotes a modular architecture and encourages the use of design patterns such as MVC (Model-View-Controller) to ensure code reusability and maintainability. Its focus on developer productivity and code quality has made Nest.js a popular choice for building robust backends and APIs.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4">What is MongoDB aggregate and how does it work ?</h2>
                        <p className="text-gray-700">
                        In MongoDB, the aggregate function is a powerful tool used for data aggregation and processing. It allows for the execution of complex analytical operations on collections of documents. The aggregate function works by taking a pipeline approach, where multiple stages are chained together to transform and process the data. Each stage performs a specific operation on the data, such as filtering, grouping, sorting, projecting, or calculating aggregations. The output of each stage serves as the input for the next stage in the pipeline. This enables the aggregation framework to handle a wide range of data manipulation tasks efficiently. The aggregate pipeline stages can be combined in a flexible manner to achieve desired results, allowing for the generation of reports, data summarization, data exploration, and more. MongoDB's aggregate function provides a versatile and efficient means of extracting meaningful insights from collections of documents.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;