# Accessing Environment Variables in Dynamic Route Segments - Next.js 15

This repository demonstrates a common error encountered when working with environment variables in Next.js 15, specifically within dynamic route segments.  The issue arises when attempting to access environment variables directly within a page component if that variable is not defined. This usually leads to an error at runtime. 

## Problem

In the provided `about.js` file, accessing `process.env.MY_CUSTOM_VARIABLE` results in an error if `MY_CUSTOM_VARIABLE` is not defined in your environment. Next.js 15's build process might not correctly handle or provide these variables in the context where they are accessed.

## Solution

To resolve this, ensure that environment variables are properly defined and made accessible within the Next.js application.  Use the `.env.local` file for local development and utilize the appropriate Next.js environment variable access methods. For example, use the `next/config` module to load environment variables during the build phase.