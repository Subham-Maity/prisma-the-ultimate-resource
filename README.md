# Prisma: A Next-Generation ORM for Node.js and TypeScript 🚀

## Introduction 📖

If you work with databases and use Node.js or TypeScript, you might have come across Prisma. But what is Prisma and what makes it different from other ORM tools? In this article, we will explore how Prisma works, what problems it solves, why we use it, and how it compares to its competitors. We will also look at the reasons behind the development of this technology and the advantages it offers to you.

### The Components of Prisma 🛠️

Prisma is an open source ORM tool that consists of three main components:

- **Prisma Client**: A type-safe and auto-generated query builder for Node.js & TypeScript
- **Prisma Migrate**: A migration system that generates SQL files from your schema changes
- **Prisma Studio**: A GUI that lets you view and edit data in your database

Prisma Client is the core component of Prisma that allows you to interact with your database in a simple and intuitive way. Prisma Client adapts to your schema, which means it knows the structure and relations of your data models. You can define your data models in a readable language called Prisma Schema, or you can infer them from an existing database.

Prisma Migrate is a tool that helps you manage database migrations. Database migrations are changes to your database schema that need to be applied consistently across different environments (such as development, testing, and production). Prisma Migrate creates SQL migration files from your Prisma Schema, which you can modify and execute.

Prisma Studio is a graphical user interface that allows you to explore and manipulate data in your Prisma projects. You can navigate through tables, filter, paginate, follow relations, and edit your data safely.

Prisma supports various databases, such as PostgreSQL, MySQL, SQLite, SQL Server, MongoDB, and CockroachDB.

### The Problems that Prisma Solves 🙌

Prisma addresses some common problems that developers encounter when working with databases:

- **Complexity**: Writing raw SQL queries can be tedious and error-prone, especially for complex operations involving joins, aggregations, transactions, etc. Prisma Client provides a fluent and expressive API that hides the complexity of SQL and lets you focus on your business logic.
- **Type-safety**: Using raw SQL queries or traditional ORMs can lead to runtime errors due to mismatched types or missing fields. Prisma Client leverages TypeScript to provide compile-time type-checking and auto-completion for your queries, reducing the risk of bugs and improving developer productivity.
- **Migrations**: Managing database migrations can be challenging and time-consuming, especially when working in a team or deploying to different environments. Prisma Migrate simplifies the migration process by creating SQL files from your schema changes, which you can review and execute with confidence.
- **Data exploration**: Viewing and editing data in your database can be cumbersome and risky, especially if you don't have a good tool for it. Prisma Studio offers a user-friendly interface that lets you inspect and manipulate data in your Prisma projects with ease.

### The Benefits of Using Prisma 🏆

We use Prisma because it offers a number of benefits over other ORM tools:

- **Developer experience**: Prisma provides a delightful developer experience thanks to its intuitive schema language, type-safe query builder, auto-completion, helpful error messages, etc. It also integrates well with popular frameworks such as Express, Next.js, NestJS, etc.
- **Performance**: Prisma generates optimized SQL queries that run fast on your database. It also supports features such as batching, caching, streaming, etc. that improve the performance of your application.
- **Flexibility**: Prisma gives you full control over your database schema and migrations. You can customize the generated SQL files or write raw SQL queries if needed. You can also use Prisma Client alongside other ORMs or query builders if you want.
- **Scalability**: Prisma enables you to scale your application easily by supporting various databases and deployment options. You can switch between different databases or migrate to a new one without changing much code. You can also deploy your application to any platform that supports Node.js.



### The Features that Make Prisma Unique 🚀

Prisma has some unique features that make it stand out from other ORM tools in the market. Here are some of them:


- **Prisma Schema**: Prisma Schema is a declarative language that lets you define your data models in a clear and concise way. It also supports advanced features such as relations, validations, enums, default values, etc. Prisma Schema is easy to read and write, and it serves as the single source of truth for your database schema and Prisma Client API.
- **Prisma Client**: Prisma Client is a query builder that is auto-generated and type-safe. It offers a fluent and expressive API that lets you write complex queries with ease. It also provides features such as nested writes, transactions, aggregations, raw database access, etc. Prisma Client is fully compatible with TypeScript and provides strong type-safety guarantees for your queries.
- **Prisma Migrate**: Prisma Migrate is a migration system that generates SQL files from your Prisma Schema changes. It allows you to review and customize the generated SQL files before executing them. It also keeps track of the migration history and ensures that your database schema is always in sync with your Prisma Schema.
- **Prisma Studio**: Prisma Studio is a GUI that lets you view and edit data in your database. It supports features such as filtering, sorting, pagination, relations, etc. It also allows you to run custom queries and see the results in a table or JSON format. Prisma Studio is a handy tool for data exploration and manipulation.

### The Reasons Behind the Development of Prisma 🙌

Prisma was developed by developers who were dissatisfied with the existing ORM tools and wanted to create a better solution for working with databases. They had the following goals in mind:

- **Simplify database access**: They wanted to make database access easier and more enjoyable for developers by providing a simple and intuitive API that abstracts away the complexity of SQL.
- **Improve developer productivity**: They wanted to improve developer productivity by providing features such as auto-completion, type-safety, helpful error messages, etc. that reduce the risk of bugs and save time.
- **Enable modern development workflows**: They wanted to enable modern development workflows by supporting various databases and deployment options, as well as integrating well with popular frameworks and tools.

**********

## Installation 🚀


- Create a new project directory and initialize it with npm:

```
npm init -y
```
- Install the Prisma CLI globally:

```
npm install -g prisma
```
- The type
```
npm i --save-dev prisma typescript ts-node @types/node nodemon
```
> - npm i --save-dev means that the package will be installed as a dev dependency. This means that it will only be installed when you run npm install in development mode (npm install --dev or npm install --only=dev). This is useful for packages that are only needed during development, such as testing frameworks or build tools.
> - prisma is used to install the Prisma CLI globally.
> - typescript is used for TypeScript support.
> - ts-node is used for TypeScript execution and REPL for Node.js.
> - @types/node is used for TypeScript definitions for Node.js.
> - nodemon is used for automatic restarts of the server when file changes in the directory are detected.

- Create a file called tsconfig.json in the root directory of your project and add the following code to it:

```
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  }
}
```
> TypeScript default configuration (tsconfig.json)
- Now hit `npx prisma init --datasource-provider mongodb` to initialize Prisma in your project. This will create a new directory called prisma with the following files:
```
prisma
├── schema.prisma
└── .env
```
> - `npx prisma init --datasource-provider mongodb` this will initialize Prisma in your project and mongodb as the database provider.
> - schema.prisma is the main configuration file for Prisma. It contains the database connection string and other settings.
> - .env is a file that contains environment variables for your project. It is used by Prisma to store sensitive information such as database credentials.

- If you want to format prisma schema file then you can use this command `npx prisma format`
- GO to your .env file and add your database connection string in it.

in my case, it is
```
DATABASE_URL="mongodb+srv://subham:subham@cluster0.w2xlwnd.mongodb.net/?retryWrites=true&w=majority"
```
![image](https://www.prisma.io/docs/static/b5ef4062c4686c772571b3079ba1331c/93a6a/mongodb.png)


```
mongodb://USERNAME:PASSWORD@HOST/DATABASE
```

The following components make up the _base URL_ of your database:

| Name     | Placeholder | Description                                                                                                                                                                                                                                                                                                                                                |
| :------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User     | `USERNAME`  | Name of your database user, e.g. `janedoe`                                                                                                                                                                                                                                                                                                                 |
| Password | `PASSWORD`  | Password for your database user                                                                                                                                                                                                                                                                                                                            |
| Host     | `HOST`      | The host where a [`mongod`](https://docs.mongodb.com/manual/reference/program/mongod/#mongodb-binary-bin.mongod) instance is running. If you are running a sharded cluster this will a [`mongos`](https://docs.mongodb.com/manual/reference/program/mongos/#mongodb-binary-bin.mongos) instance. This can be a hostname, IP address or UNIX domain socket. |
| Port     | `PORT`      | Port on which your database server is running, e.g. `1234`. If none is provided the default `27017` is used.                                                                                                                                                                                                                                               |
| Database | `DATABASE`  | Name of the database to use. If none is specified but the `authSource` option is set then the `authSource` database name is used. If neither the database in the connection string nor the `authSource` option is specified then it defaults to `admin`                                                                                                    |



> You must [percentage-encode special characters](/reference/database-reference/connection-urls#special-characters).



#### Arguments

A connection URL can also take arguments. The following example sets three arguments:

> - An `ssl` connection
> - A `connectTimeoutMS`
> - And the `maxPoolSize`

```
mongodb://USERNAME:PASSWORD@HOST/DATABASE?ssl=true&connectTimeoutMS=5000&maxPoolSize=50
```

Refer to the [MongoDB connection string documentation](https://docs.mongodb.com/manual/reference/connection-string/#connection-string-options) for a complete list of connection string arguments. There are no Prisma-specific arguments.

## Prisma Schema Migrations 🚀

- Open your schema.prisma file and add the following code to it:

```
model User {
 id String @id @default(auto()) @map("_id") @db.ObjectId
 name String
}
```
> Defining the schema alone does not apply changes to the database. To apply the changes, we need to inform Prisma that we have finished making changes to the schema and want to migrate these changes to the database. This can be done by running a specific command.
```
npx prisma db push
```

******
_______


> **Note**: This only for mongodb database provider.
> If you are using other databases such as PostgreSQL, MySQL, SQLite, Microsoft SQL Server, and CockroachDB

### Prisma Client
`schema.prisma`
```
model User {
 id Int @id @default(autoincrement())
 name String
}

```
`migration command`
```
npx prisma migrate dev --name init --preview-feature
```
#### PostgreSQL
`schema.prisma`
```
model User {
 id Int @id @default(autoincrement())
 name String
}

```
`migration command`
```
npx prisma migrate dev --name init --preview-feature
```

#### MySQL
`schema.prisma`
```
model User {
 id Int @id @default(autoincrement())
 name String
}

```
`migration command`
```
npx prisma migrate dev --name init --preview-feature
```

#### SQLite
`schema.prisma`
```
model User {
 id Int @id @default(autoincrement())
 name String
}

```
`migration command`
```
npx prisma migrate dev --name init --preview-feature
```

#### Microsoft SQL Server
`schema.prisma`
```
model User {
 id Int @id @default(autoincrement())
 name String
}

```
`migration command`
```
npx prisma migrate dev --name init --preview-feature
```

#### CockroachDB
`schema.prisma`
```
model User {
 id Int @id @default(autoincrement())
 name String
}

```
`migration command`
```
npx prisma migrate dev --name init --preview-feature
```


_________

******


## Prisma Client 🚀

- When we create a new Prisma Client, it is generated in the `node_modules` folder at `prisma/client`. This client updates automatically whenever we make changes to our database, such as adding a new model. The client provides us with code for interacting with our database, including creating, reading, updating, and deleting data. To use the client, we need to install the `@prisma/client` library by running 
```
npm i @prisma/client
```

- To manually regenerate your Prisma Client, you can run `npx prisma generate`. This command generates the client based on the specified provider and stores it in the designated location. Once generated, you can start using the Prisma Client to interact with your database."

`Bash`
````
npx prisma generate
Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma

✔ Generated Prisma Client (4.14.0 | library) to .\node_modules\@prisma\client in 77ms
You can now start using Prisma Client in your code. Reference: https://pris.ly/d/client
```
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
```
PS F:\mains\prisma-tutorial> 
````

- Now create a new file called `script.ts` and add the following code that provided by prisma 

```ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
```

> This allows us to access our Prisma Client.We can use the `prisma.user` method to interact with the `User` table we created. 
For example, we can use the `findFirst` method to find the first user based on specified criteria `prisma.user.findFirst({ where: { name: 'Alice' } })`

- Now just copy this following code and paste it in `script.ts` file

```ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    }
)
```

> Paste the provided code into `script.ts`. This code creates an async function called `main` and catches any errors. At the end, it disconnects from the Prisma database. This is not required but is good practice. Inside `main`, we can write our Prisma code. Using async/await makes it easier to work with Prisma since most of its operations are asynchronous."

