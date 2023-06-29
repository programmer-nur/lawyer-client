import React from "react";
import useTitle from "./useTitle";

const Blog = () => {
    useTitle('blog')
  return (
    <section className="bg-gray-300 h-screen text-black">
      <div className="container flex flex-col justify-center px-4 py-6 mx-auto py-16 md:p-8">
        <h2 className="text-2xl font-semibold my-8 sm:text-4xl">Blog</h2>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Difference between SQL and NoSQL?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              <span className="text-orange-500 font-bold">SQL</span> or the
              Structured Query Language is the most common and popular
              programming language for the relational database management
              system. It is a language designed to extract, store, insert,
              delete, update and manage data for structured data and strategic
              analysis.{" "}
            </p>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              <span className="text-orange-500 font-bold"> NoSQL</span> database
              provides a mechanism for storage and retrieval of data that is
              modelled other than tabular form. It was introduced by Carl Stroz
              in the year 1998 called a Non-relational database. Now, it stands
              for Not only SQL. It is not limited to storing data in tables,
              instead, enables the big data to be stored in the structured,
              unstructured, semi-structured or polymorphic form.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What is JWT, and how does it work?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.{" "}
            </p>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              JWTs differ from other web tokens in that they contain a set of
              claims. Claims are used to transmit information between two
              parties. What these claims are depends on the use case at hand.
              For example, a claim may assert who issued the token, how long it
              is valid for, or what permissions the client has been granted.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What is the difference between javascript and NodeJS?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              <span className="text-orange-500 font-bold">Node.JS </span> is a
              programming language. We use JS mainly to write scripts on a
              website that makes web pages more dynamic in nature.We can only
              run JS on browsers.It runs mainly on the client-side. Thus, it is
              used in the development of the front end.The Javascript is nothing
              but the ECMA script’s updated version that makes use of the Chrome
              V8 engine that is written in the C++ language.{" "}
            </p>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              {" "}
              <span className="text-orange-500 font-bold">Javascript</span> It
              is a runtime environment for Javascript that lets a user run this
              programming language on the server-side as well. It runs on the
              server-side. Thus, it helps in the server-side development via the
              JS.NodeJS helps us run JS outside the browser as well. C, C++, and
              also Javascript are used for writing Node.JS.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              How does NodeJS handle multiple requests at the same time?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue. If NodeJS can process the request
              without I/O blocking then the event loop would itself process the
              request and sends the response back to the client by itself. But,
              it is possible to process multiple requests parallelly using the
              NodeJS cluster module or worker_threads module.{" "}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
