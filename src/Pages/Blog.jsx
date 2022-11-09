import React from 'react';

const Blog = () => {
    return (
        <section className="bg-gray-800 text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 mb-8 dark:text-gray-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
            <div className="space-y-4">
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Difference between SQL and NoSQL?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><span className='text-orange-500 font-bold'>SQL</span> or the Structured Query Language is the most common and popular programming language for the relational database management system. It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis.  </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><span className='text-orange-500 font-bold'> NoSQL</span> database provides a mechanism for storage and retrieval of data that is modelled other than tabular form. It was introduced by Carl Stroz in the year 1998 called a Non-relational database. Now, it stands for Not only SQL. It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form.   </p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is JWT, and how does it work?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. </p>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                </details>
            </div>
        </div>
    </section>
    );
};

export default Blog;