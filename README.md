# React Router v6 Nested Route Issue with Wildcard (*) Parent Route

This repository demonstrates a bug in React Router v6 where nested routes fail to render correctly when a parent route uses a wildcard (*) in its path.  The wildcard path captures all remaining URL segments, preventing child routes from being matched.

The `bug.js` file shows the problematic code.  The `bugSolution.js` file provides a corrected version.

## Bug Description

When using nested routes, if a parent route has a wildcard (*) in its path, child routes will not render as expected.  This is because the wildcard captures all subsequent parts of the URL, preventing the child route matching.

## Solution

The solution involves restructuring the routes to avoid using wildcards in parent routes that contain nested routes.  Consider using exact matching or alternative route structures.