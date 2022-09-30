## Deno vendor not respecting `jsxImportSource`

To create this example, the below command has been run `deno vendor ./test.tsx`

Running `deno run -A ./test.tsx` will fail.

Resetting the import_map to the non-vendored one will make the program work
