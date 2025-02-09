# Next.js 15 Client-Side Data Error on Direct Navigation

This repository demonstrates a common error in Next.js 15 applications where client-side data is accessed on pages that are directly navigated to. The problem arises because the server-side rendering (SSR) attempts to access client-side data, leading to an error.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate directly to `/about` in your browser. You should see an error.
5. Navigate to `/` and then click on the link to `/about`. You will see the page render correctly.

## Solution

The solution involves using conditional rendering or data fetching mechanisms to handle client-side data access during both server-side rendering and client-side hydration. Check out the solution branch for a possible implementation using Next.js's `getStaticProps` or `getServerSideProps`.

## Technologies Used

* Next.js 15
* React
* JavaScript