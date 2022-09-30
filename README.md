## Deno vendor not respecting `jsxImportSource`

To create this example, the below command has been run `deno vendor ./test.tsx`

Running `deno run -A ./test.tsx` will fail with the below error
```
error: Relative import path "preact/jsx-runtime" not prefixed with / or ./ or ../ and not in import map from "file:///...."
```

Resetting the import_map to the non-vendored one will make the program work
