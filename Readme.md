# Typescript Learning

-- whoviks

### ts installation

### TypeScript compiler (tsc):

```bash
    npm install -g typescript
```

i'm using with bun

```bash
    bun init (package.json)
    bun add typescript --dev
```

### important commands

```bash
    tsc --init (tsconfig.json)
    tsc filename (compile)
    tsc --watch filename

    // no need of file name with tsc
    // if configure as index.ts or app.ts

    bun run index.ts
    bun --watch run index.ts
```

File with .ts extension (e.g., index.ts).

Compile : tsc index.ts → index.js

Topics Covered :

TypeScript  
├── Introduction  
├── Basic Types  
├── Functions  
├── Objects & Interfaces  
├── Classes & OOP  
│ ├── Constructors  
│ ├── Access Modifiers  
│ └── Inheritance  
├── Generics  
├── Advanced Types  
│ ├── Union Types  
│ ├── Intersection Types  
│ ├── Conditional Types  
│ ├── Mapped Types  
│ └── Template Literal Types  
├── Utility Types  
│ ├── Partial<T>  
│ ├── Readonly<T>  
│ ├── Pick<T, K>  
│ └── Omit<T, K>  
├── Decorators  
├── Modules & Namespaces  
├── Async/Await  
├── TypeScript Configuration (tsconfig.json)  
├── TypeScript with React  
├── TypeScript with Node.js
