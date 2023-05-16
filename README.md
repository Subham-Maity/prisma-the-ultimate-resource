# Prisma: A Next-Generation ORM for Node.js and TypeScript 🚀

## TOC 📋

- ###  [Introduction 📖](#introduction-)
- ### [🤖 Setup Prisma](#-setup-prisma)

|             | **Part 1 🚀**                                                          | **Part 2 🚀**                                                 | **Part 3 🚀**                                                                | **Part 4 🚀**                                                                            |
|-------------|------------------------------------------------------------------------|---------------------------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| **Steps**👇 | [**🔗 Installation**](#installation-)                                  | [**🔗 Prisma Schema Migrations**](#prisma-schema-migrations-) | [**🔗 Prisma Client**](#prisma-client-)                                      | [**🔗 Send queries to your Database**](#send-queries-to-your-database-)                  |
| Step 1      | [**⚡ Create a new project**](#-create-a-new-project)                   | [**⚡ Prisma Migrate**](#-prisma-migrate)                      | [**⚡ Prisma Client**](#-prisma-client)                                       | [**⚡ Create a new user in the database**](#-create-a-new-user-in-the-database)           |
| Step 2      | [**⚡ Install Prisma**](#-install-prisma)                               |                                                               | [**⚡ Prisma Generate**](#-prisma-generate)                                   | [**⚡ Nodemon Setup**](#-nodemon-setup)                                                   |
| Step 3      | [**⚡ Install Prisma & TypeScript**](#-install-prisma--typescript)      |                                                               | [**⚡ Prisma Client in TypeScript**](#-prisma-client-in-typescript)           | [**⚡ Run your code and data in the database**](#-run-your-code-and-data-in-the-database) |
| Step 4      | [**⚡ tsconfig.json**](#-tsconfigjson)                                  |                                                               | [**⚡ Error Handling and Disconnecting**](#-error-handling-and-disconnecting) | [**⚡ Another data in the database**](#-another-data-in-the-database)                     |   
| Step 5      | [**⚡ Initialize prisma**](#-initialize-prisma)                         |                                                               |                                                                              | [**⚡ Data source and generator**](#-data-source-and-generator)                           |
| Step 6      | [**⚡ Prisma Format**](#-prisma-format)                                 |                                                               |                                                                              |                                                                                          |
| Step 7      | [**⚡ Structure of a connection URL**](#-structure-of-a-connection-url) |                                                               |                                                                              |                                                                                          |


- [📁 Models](#-models)
************
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

Prisma supports various databases, such as PostgresSQL, MySQL, SQLite, SQL Server, MongoDB, and CockroachDB.

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
## 🤖 Setup Prisma

## TOC 📋

|             | **Part 1 🚀**                                                          | **Part 2 🚀**                                                 | **Part 3 🚀**                                                                | **Part 4 🚀**                                                                            |
|-------------|------------------------------------------------------------------------|---------------------------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| **Steps**👇 | [**🔗 Installation**](#installation-)                                  | [**🔗 Prisma Schema Migrations**](#prisma-schema-migrations-) | [**🔗 Prisma Client**](#prisma-client-)                                      | [**🔗 Send queries to your Database**](#send-queries-to-your-database-)                  |
| Step 1      | [**⚡ Create a new project**](#-create-a-new-project)                   | [**⚡ Prisma Migrate**](#-prisma-migrate)                      | [**⚡ Prisma Client**](#-prisma-client)                                       | [**⚡ Create a new user in the database**](#-create-a-new-user-in-the-database)           |
| Step 2      | [**⚡ Install Prisma**](#-install-prisma)                               |                                                               | [**⚡ Prisma Generate**](#-prisma-generate)                                   | [**⚡ Nodemon Setup**](#-nodemon-setup)                                                   |
| Step 3      | [**⚡ Install Prisma & TypeScript**](#-install-prisma--typescript)      |                                                               | [**⚡ Prisma Client in TypeScript**](#-prisma-client-in-typescript)           | [**⚡ Run your code and data in the database**](#-run-your-code-and-data-in-the-database) |
| Step 4      | [**⚡ tsconfig.json**](#-tsconfigjson)                                  |                                                               | [**⚡ Error Handling and Disconnecting**](#-error-handling-and-disconnecting) | [**⚡ Another data in the database**](#-another-data-in-the-database)                     |   
| Step 5      | [**⚡ Initialize prisma**](#-initialize-prisma)                         |                                                               |                                                                              | [**⚡ Data source and generator**](#-data-source-and-generator)                           |
| Step 6      | [**⚡ Prisma Format**](#-prisma-format)                                 |                                                               |                                                                              |                                                                                          |
| Step 7      | [**⚡ Structure of a connection URL**](#-structure-of-a-connection-url) |                                                               |                                                                              |                                                                                          |





## Installation 🚀

### ⚡ Create a new project

- Create a new project directory and initialize it with npm:

```
npm init -y
```
### ⚡ Install Prisma

- Install the Prisma CLI globally:

```
npm install -g prisma
```
### ⚡ Install Prisma & TypeScript

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

### ⚡ tsconfig.json

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

### ⚡ Initialize prisma

- Now hit `npx prisma init --datasource-provider mongodb` to initialize Prisma in your project. This will create a new directory called prisma with the following files:
```
prisma
├── schema.prisma
└── .env
```
> - `npx prisma init --datasource-provider mongodb` this will initialize Prisma in your project and mongodb as the database provider.
> - schema.prisma is the main configuration file for Prisma. It contains the database connection string and other settings.
> - .env is a file that contains environment variables for your project. It is used by Prisma to store sensitive information such as database credentials.

### ⚡ Prisma Format

- If you want to format prisma schema file, then you can use this command `npx prisma format`
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
|:---------|:------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| User     | `USERNAME`  | Name of your database user, e.g. `janedoe`                                                                                                                                                                                                                                                                                                                 |
| Password | `PASSWORD`  | Password for your database user                                                                                                                                                                                                                                                                                                                            |
| Host     | `HOST`      | The host where a [`mongod`](https://docs.mongodb.com/manual/reference/program/mongod/#mongodb-binary-bin.mongod) instance is running. If you are running a sharded cluster this will a [`mongos`](https://docs.mongodb.com/manual/reference/program/mongos/#mongodb-binary-bin.mongos) instance. This can be a hostname, IP address or UNIX domain socket. |
| Port     | `PORT`      | Port on which your database server is running, e.g. `1234`. If none is provided the default `27017` is used.                                                                                                                                                                                                                                               |
| Database | `DATABASE`  | Name of the database to use. If none is specified but the `authSource` option is set then the `authSource` database name is used. If neither the database in the connection string nor the `authSource` option is specified then it defaults to `admin`                                                                                                    |


### ⚡ Structure of a connection URL



> You must [percentage-encode special characters](https://www.prisma.io/docs/reference/database-reference/connection-urls).



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


### ⚡ Prisma Migrate



- Open your schema.prisma file and add the following code to it:

```
model User {
 id String @id @default(auto()) @map("_id") @db.ObjectId
 name String
}
```
> Defining the schema alone does not apply changes to the database. To apply the changes, we need to inform Prisma that we have finished making changes to the schema and wanting to migrate these changes to the database. This can be done by running a specific command.
```
npx prisma db push
```

******
_______


> **Note**: This is only for mongodb database provider.
> If you are using other databases such as PostgresSQL, MySQL, SQLite, Microsoft SQL Server, and CockroachDB

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
#### PostgresSQL
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

### ⚡ Prisma Client


- When we create a new Prisma Client, it is generated in the `node_modules` folder at `prisma/client`. This client updates automatically whenever we make changes to our database, such as adding a new model. The client provides us with code for interacting with our database, including creating, reading, updating, and deleting data. To use the client, we need to install the `@prisma/client` library by running 
```
npm i @prisma/client
```


### ⚡ Prisma Generate



- To manually regenerate your Prisma Client, you can run `npx prisma generate`. This command generates the client based on the specified provider and stores it in the designated location. Once generated, you can start using the Prisma Client to interact with your database."

`Bash`
```
npx prisma generate
Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma

✔ Generated Prisma Client (4.14.0 | library) to .\node_modules\@prisma\client in 77ms
You can now start using Prisma Client in your code. Reference: https://pris.ly/d/client
``
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
``
PS F:\mains\prisma-tutorial> 
```

### ⚡ Prisma Client in TypeScript

- Now create a new file called `script.ts` and add the following code that provided by prisma 

```ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
```

> This allows us to access our Prisma Client.We can use the `prisma.user` method to interact with the `User` table we created. 
For example, we can use the `findFirst` method to find the first user based on specified criteria `prisma.user.findFirst({ where: { name: 'Alice' } })`


### ⚡ Error Handling and Disconnecting




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

> Paste the provided code into `script.ts`. This code creates an async function called `main` and catches any errors. In the end, it disconnects from the Prisma database. This is not required but is good practice. Inside `main`, we can write our Prisma code. Using async/await makes it easier to work with Prisma since most of its operations are asynchronous."

## Send queries to your Database 🚀

- Inside the `main function` run queries

### ⚡ Create a new user in the database

```ts
async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'Subham',
        },
    })
    console.log(user)

}
```

### ⚡ Nodemon Setup



- Now open your package.json file and add this following code

```json

"scripts": {
    "dev": "nodemon script.ts"
  },

```

### ⚡ Run your code and data in the database

- Now open your terminal and run this following command
`bash`
```
npm run dev
```

You will get this following output  
`bash`
```
{ id: '6460ead0dc57264f788c22f8', name: 'Subham' }
```
> Even if you check your mongo collection, you will get the same output

### ⚡ Another data in the database

- Now open your `script.ts` file and just change the name like this

```ts

async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'Subhasish',
        },
    })
    console.log(user)

    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
}

```

- Now run your code again, and you will get this following output
- `bash`
```
[
  { id: '6460fa0e3b0ac81c87e56fb9', name: 'Subhasish' }
]
```
- Open your mongo collection, and you will get the same output
```
{"_id":{"$oid":"6460ead0dc57264f788c22f8"},"name":"Subham"}
{"_id":{"$oid":"6460fa0e3b0ac81c87e56fb9"},"name":"Subhasish"}
```

### ⚡ Data source and generator
Before we dive into the complex part, we need to define a data source and a generator.

* you can only have one single data source because Prisma directly connects to your database.
* The data source must have a provider and a url to your database.
```js
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```
> * The provider is the name of your database.
> * The url links to your database.
* It is important to use environment variables for storing your database url.
* You can have multiple generators.

Here are some more examples of multiple generators that you can use in your Prisma schema:

`generator for Database Markup Language (DBML) using prisma-dbml-generator`
```js
generator client {
  provider = "prisma-client-js"
}

generator dbml {
  provider = "prisma-dbml-generator"
}
```

`generator for JSON schema using prisma-json-schema-generator`
```js
generator client {
  provider = "prisma-client-js"
}

generator jsonSchema {
  provider = "prisma-json-schema-generator"
}
```

`generator for TypeGraphQL using typegraphql-prisma`
```js
generator client {
  provider = "prisma-client-js"
}

generator typegraphql {
  provider = "typegraphql-prisma"
}
```

`generator for class-based entities`
```js
generator client {
  provider = "prisma-client-js"
}

generator class {
  provider = "prisma-class-generator"
}
```
* In our case, we will be using just one generator.
* To define a generator, you give it a provider.
* The provider links to the name of the generator.
**********
## 📁 Models

Models represent tables in your database.
Each model has a name, a type, and optional modifiers and attributes.


## TOC 📖
- [Model Fields 🚀](#model-fields-)
  - [⚡ Fields](#-fields)
  - [⚡ Field modifiers](#-field-modifiers)
  - [⚡ Field attributes](#-field-attributes)
  - [⚡ Fields Types](#-fields-types)
  - [⚡ Data Types](#-data-types)
  - [⚡ Fill with data and push to the database](#-fill-with-data-and-push-to-the-database)
- [Model Relationships 🚀](#model-relationships-)
  - [⚡ Type of relationships](#-type-of-relationships)
  - [⚡ One-to-many relationship](#-one-to-many-relationship)
  - [⚡ Many-to-many relationship](#-many-to-many-relationship)
  - [⚡ One-to-one relationship](#-one-to-one-relationship)
- [Model Attributes 🚀](#model-attributes-)
  - [⚡ Fields](#-field)
  - [⚡ Fields Modifiers](#-fields-modifiers)
     - [🔗 @id:](#-id-)
     - [🔗 @unique:](#-unique-)
     - [🔗 @default:](#-default-)
     - [🔗 @relation:](#-relation-)
     - [🔗 @map:](#-map-)
     - [🔗 @db:](#-db-)
     - [🔗 @nullable:](#-nullable-)
     - [🔗 @type:](#-type)
     - [🔗 @description:](#-description-)
  - [⚡ Indexes](#-indexes)
  - [⚡ Schema](#-schema)
  - [⚡ Block-Level Attributes](#-block-level-attributes)
    - [🔗 @@unique](#-unique)
    - [🔗 @@index](#-index)
    - [🔗 @@map](#-map)
    - [🔗 @@id](#-id)
    - [🔗 @@db](#-db)
    - [🔗 @ignore](#-ignore)
    - [🔗 @default](#-default)
    - [🔗 @description](#-description)
    - [🔗 @updatedAt](#-updatedat)
    - [🔗 @createdAt](#-createdat)



## Model Fields 🚀

### ⚡ Fields

- Now open your `schema.prisma` file you will get this following code

```js
model User {
    id   String @id @default(auto()) @map("_id") @db.ObjectId
    name String
}
```
> - id is the primary key of the model and is of type String.
> - name is a field of type String.
> - The `@id` attribute defines the primary key of the model.
> - The `@default` attribute defines the default value of the field.
> - The `@map` attribute defines the name of the field in the database.
> - The `@db.ObjectId` attribute defines the type of the field in the database.
> - The `@db` attribute defines the type of the field in the database.

### ⚡ Field modifiers

* **Field modifiers** can be used to change the behavior of a field. The following are the supported field modifiers:
  * **Optional** - This modifier makes the field optional. This means that the field can be null.
  * **List** - This modifier makes the field a list. This means that the field can contain multiple values.


```js
model User {
  id String @id @default(auto()) @map("_id") @db.ObjectId
  name String?
  email String @unique
}
```
> - The `?` modifier makes the name field optional, meaning it can be null.
> - The `@unique` attribute makes the email field unique, meaning it can only have one value in the database.

### ⚡ Field attributes

- Field attributes are keywords that start with `@` and provide additional information or functionality to the field. For example:

* **Attributes** The following are the supported attributes:
  * **Id** - This attribute defines the field as the primary key of the model.
  * **Default** - This attribute defines the default value of the field.
  * **Description** - This attribute provides a description of the field.
  * **Generated** - This attribute defines the field as generated. This means that the field will be automatically populated by the database.
  * **Unique** - This attribute defines the field as unique. This means that the field can only contain unique values.
  * **Index** - This attribute defines the field as indexed. This means that the field can be used to quickly search for records.
  * **Nullable** - This attribute defines the field as nullable. This means that the field can be null.
  * **Encrypted** - This attribute defines the field as encrypted. This means that the field will be stored in an encrypted format.

Here is an example of how to use field modifiers and attributes:

```js
model User {
  id String @id @default(auto()) @map("_id") @db.ObjectId
  name String
  email String @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

In this example, the `id` field is the primary key of the model and is of type String. The `name` field is a field of type String. The `email` field is a unique field of type String. The `createdAt` field is a field of type DateTime that is automatically populated with the current date and time when the record is created. The `updatedAt` field is a field of type DateTime that is automatically populated with the current date and time when the record is updated.

> - The `@default` attribute defines the default value of the role field, which is an enum type.
> - The `@enum` attribute defines a custom type that can only have one of sets of predefined values.



### ⚡ Fields Types
**Field types define the kind of data that a field can hold.**

- Prisma provides a small number of core scalar types that cover most use cases. For example:
  - String: A text value of any length
  - Int: A whole number
  - DateTime: A date and time value
  - Boolean: A true or false value
- Prisma also supports native types that are specific to the underlying database. For example:
  - @db.VarChar(255): A text value with a maximum length of 255 characters
  - @db.Date: A date-only value
  - @db.Json: A JSON object value
- Prisma allows you to use native type attributes to refine the core scalar types. For example:
  - title String @db.VarChar(255): The title field is a String type with a native type of varchar(255)
  - createdAt DateTime @db.Date: The createdAt field is a DateTime type with a native type of date
- Prisma also supports custom types that can only have one of sets of predefined values. These are called enums. For example:
  - enum Role { USER ADMIN }: The Role enum can only have the values USER or ADMIN

Here is an example of how to use field types in a Prisma schema:

```js
model User {
  id Int @id @default(autoincrement())
  name String
  email String @unique
  role Role @default(USER)
  posts Post[]
}

model Post {
  id Int @id @default(autoincrement())
  title String @db.VarChar(255)
  content String?
  published Boolean @default(false)
  author User @relation(fields: [authorId], references: [id])
  authorId Int
  createdAt DateTime @db.Date
}

enum Role {
  USER
  ADMIN
}
```
In this example:

- The User model has five fields:
  - id: An Int type with an id attribute and a default value of autoincrement()
  - name: A String type
  - email: A String type with a unique attribute
  - role: A Role type with a default value of USER
  - posts: A list of Post types with a relation to the Post model
- The Post model has six fields:
  - id: An Int type with an id attribute and a default value of autoincrement()
  - title: A String type with a native type of varchar(255)
  - content: An optional String type
  - published: A Boolean type with a default value of false
  - author: A User type with a relation to the User model
  - authorId: An Int type that stores the id of the related user
  - createdAt: A DateTime type with a native type of date
- The Role enum has two values: USER and ADMIN

### ⚡ Data Types

- `String`: This is a text data type that can store any sequence of characters. It is mapped to the BSON `String` type.
- `Boolean`: This is a logical data type that can store either `true` or `false`. It is mapped to the BSON `Boolean` type.
- `Json`: This is a complex data type that can store any valid JSON value, such as objects, arrays, numbers, strings, booleans, or nulls. It is mapped to the BSON `Object` type.
- `Bytes`: This is a binary data type that can store any sequence of bytes. It is useful for storing files or images. It is mapped to the BSON `Binary` type.
- `Unsupported("")`: This is a special data type that can be used to represent any MongoDB-specific type that is not supported by Prisma such as `ObjectId`, `Decimal128`, or `Timestamp`. You need to specify the name of the MongoDB type inside the parentheses.
- `Float`: This is a numeric data type that can store decimal numbers with floating-point precision. It is mapped to the BSON `Double` type.
- `DateTime`: This is a temporal data type that can store date and time values with millisecond precision. It is mapped to the BSON `Date` type.
- `Int`: This is a numeric data type that can store integer numbers with 32-bit precision. It is mapped to the BSON `Int32` type.
- `BigInt`: This is a numeric data type that can store integer numbers with 64-bit precision. It is mapped to the BSON `Int64` type.

Here is an example of how you can use multiple data types in your Prisma schema for MongoDB:

```prisma
model User {
 id String @id @default(auto()) @map("_id") @db.ObjectId
 name String
 email String
 isAdmin Boolean
 preferences Json
 blog Bytes
 likes Unsupported("Decimal128")
}

model Post {
 id String @id @default(auto()) @map("_id") @db.ObjectId
 rating Float
 createdAt DateTime
 updatedAt DateTime
 views Int
 comments BigInt
}
```

In this example, the User model has fields of types String, Boolean, Json, Bytes, and Unsupported("Decimal128"). The Post model has fields of types String, Float, DateTime, Int, and BigInt.



### ⚡ Fill with data and push to the database

`schema.prisma`

```js
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  email     String   @unique
  name      String?
  birthYear Int?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  rating    Float
  createdAt DateTime
  updatedAt DateTime
  views     Int
  comments  BigInt
  title     String
  content   String
}
```
`script.ts`

```ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // create a new user with some email, name, birthYear and likes
    const user = await prisma.user.create({
        data: {
            email: 'raja@gmail.com',
            name: 'Raja',
            birthYear: 1995,
        },
    })
    console.log(user)

    // create a new post with some rating, dates, views, comments, title and content
    const post = await prisma.post.create({
        data: {
            rating: 4.5,
            createdAt: new Date(),
            updatedAt: new Date(),
            views: 100,
            comments: 10,
            title: 'My first post',
            content: 'Hello, this is my first post. I hope you like it.',
        },
    })
    console.log(post)

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

- Now run `prisma db push` to push the schema to the database and create the tables.
- Now run `npm run dev` to run the script and fill the database with data.

Open the MongoDB Compass and check the database.

``Post``

```ts
{
  "_id": {
    "$oid": "6461467b9026468dc10be82e"
  },
  "rating": {
    "$numberDouble": "4.5"
  },
  "createdAt": {
    "$date": {
      "$numberLong": "1684096635529"
    }
  },
  "updatedAt": {
    "$date": {
      "$numberLong": "1684096635529"
    }
  },
  "views": {
    "$numberLong": "100"
  },
  "comments": {
    "$numberLong": "10"
  },
  "title": "My first post",
          "content": "Hello, this is my first post. I hope you like it."
}
```

``User``

```ts
{
  "_id": {
    "$oid": "646146799026468dc10be82d"
  },
  "email": "raja@gmail.com",
          "name": "Raja",
          "birthYear": {
    "$numberLong": "1995"
  },
  "createdAt": {
    "$date": {
      "$numberLong": "1684096632469"
    }
  },
  "updatedAt": {
    "$date": {
      "$numberLong": "1684096632469"
    }
  }
}
```


## Model Relationships 🚀

### ⚡ Type of relationships

There are three main types of model relationships: one-to-many, many-to-many, and one-to-one.

* **One-to-many relationship**

A one-to-many relationship is a relationship between two models where one model can have many instances of the other model, but each instance of the other model can only belong to one instance of the first model. For example, a post can have many comments, but each comment can only belong to one post.

* **Many-to-many relationship**

A many-to-many relationship is a relationship between two models where each model can have many instances of the other model. For example, a post can have many categories, and a category can have many posts.

* **One-to-one relationship**

A one-to-one relationship is a relationship between two models where each model can only have one instance of the other model. For example, a user can only have one profile, and a profile can only belong to one user.

Here are some examples of how model relationships can be used in real-world applications:

* A blog application can use a one-to-many relationship between the `Post` model and the `Comment` model to store posts and comments.
* An e-commerce application can use a many-to-many relationship between the `Product` model and the `Category` model to store products and categories.
* A social media application can use a one-to-one relationship between the `User` model and the `Profile` model to store users and profiles.



### ⚡ One-to-many relationship

`schema.prisma`
```ts
model User {
 id String @id @default(auto()) @map("_id") @db.ObjectId
 // Other fields...
 writtenPosts Post[] @relation("writtenPosts")
 favoritePosts Post[] @relation("favoritePosts")

}

model Post {
 id String @id @default(auto()) @map("_id") @db.ObjectId
 // Other fields...
 author User @relation("writtenPosts", fields: [authorId], references: [id])
 authorId String @db.ObjectId
 favoritedBy User? @relation("favoritePosts", fields: [authorId], references: [id])
 favoritedById String?
}
```
- This example involves two tables: `User` and `Post`.
- They establish a one-to-many relationship, where:
  - One user can write multiple posts.
  - Each post can only have one author (user).
- To create and maintain this relationship, we rely on two crucial elements:
  - Primary key: A column that uniquely identifies each record in a table.
    - In the `User` table, the primary key is represented by the `id` field.
  - Foreign key: A column that refers to the primary key of another table.
    - In the `Post` table, the foreign key is indicated by the `authorId` field.
- The foreign key acts as a linkage between the two tables, enforcing the one-to-many relationship.
  - Each post retains the `id` of its corresponding author in the `authorId` column.
- Prisma's `@relation` attribute allows us to name the relationship and specify the involved fields:
  - For instance, `@relation("writtenPosts", fields: [authorId], references: [id])` conveys:
    - This represents the "writtenPosts" relationship.
    - It employs the `authorId` field within the `Post` table to reference the `id` field in the `User` table.
- Field type modifiers offer additional flexibility in specifying array and optional fields:
  - An array signifies that a field can store multiple values of the same type.
    - For example, `writtenPosts Post[]` denotes an array of `Post` objects within the `User` model.
  - Optional implies that a field can be nullable or undefined.
    - As an illustration, `favoritePost Post?` designates the `favoritePost` field as an optional `Post` object.

**More Detailed** 

```ts
// Define a model for the User table
model User {
 // Declare a field for the user id, which is the primary key
 // Use the @id attribute to mark it as unique and required
 // Use the @default attribute to auto-generate the value
 // Use the @map attribute to specify the underlying database column name
 // Use the @db attribute to indicate the data type of the column
 id String @id @default(auto()) @map("_id") @db.ObjectId
 // Other fields...
 // Declare a field for the posts written by the user
 // Use an array type to indicate that one user can have many posts
 // Use the @relation attribute to name the relationship and reference the Post model
 writtenPosts Post[] @relation("writtenPosts")
 // Declare a field for the posts favorited by the user
 // Use an array type to indicate that one user can have many favorite posts
 // Use the @relation attribute to name the relationship and reference the Post model
 favoritePosts Post[] @relation("favoritePosts")

}

// Define a model for the Post table
model Post {
 // Declare a field for the post id, which is the primary key
 // Use the same attributes as in the User model
 id String @id @default(auto()) @map("_id") @db.ObjectId
 // Other fields...
 // Declare a field for the author of the post, which is a foreign key referencing the User model
 // Use the @relation attribute to name the relationship and specify the involved fields
 author User @relation("writtenPosts", fields: [authorId], references: [id])
 // Declare a field for storing the author id, which is the actual foreign key column in the database
 // Use the @db attribute to indicate the data type of the column
 authorId String @db.ObjectId
 // Declare a field for the user who favorited the post, which is an optional foreign key referencing the User model
 // Use an optional type modifier (?) to indicate that this field can be null or undefined
 // Use the @relation attribute to name the relationship and specify the involved fields
 favoritedBy User? @relation("favoritePosts", fields: [authorId], references: [id])
 // Declare a field for storing the favorited by id, which is an optional foreign key column in the database
 // Use an optional type modifier (?) to indicate that this field can be null or undefined
 favoritedById String?
}

```

### ⚡ Many-to-many relationship



```ts
generator client {
provider = "prisma-client-js"
}

datasource db {
provider = "mongodb"
url      = env("DATABASE_URL")
}

model User {
  // Other fields...
}

model Post {
  // Other fields...
categoryId    String?   @db.ObjectId
}

model Category {
id    String @id @default(auto()) @map("_id") @db.ObjectId
name  String
posts Post[]
}
```

- In Prisma, when you establish a relationship between models, Prisma takes care of the necessary setup for that relationship.
- For a many-to-many relationship, like the one between `Post` and `Category`, Prisma automatically creates a join table behind the scenes.
- This join table serves to connect the `Post` and `Category` models, enabling you to associate multiple categories with multiple posts without needing to manually configure a join table.
- Let's break down the schema and understand how this works:

  - The `Category` model represents a category and has a field called `posts` defined as `Post[]`. This means that a category can have multiple posts associated with it.
  - The `Post` model represents a post and has a field called `Category` defined as `Category?`. This indicates that a post can be associated with a single category. The `categoryId` field in the `Post` model serves as the foreign key that references the `id` field in the `Category` model.
  - By defining the `posts` field as `Post[]` in the `Category` model and the `Category` field as `Category?` in the `Post` model, you establish a many-to-many relationship between them.
  - Prisma automatically creates a join table in the database to manage this relationship. The join table connects the posts and categories, allowing you to associate multiple categories with multiple posts seamlessly.

In summary, with the given schema, Prisma takes care of the join table creation and relationship management for you.
You can simply use the `posts` field in the `Category` model to access the associated posts,
and the `Category` field in the `Post` model to access the associated category.
Prisma abstracts away the complexities of the join table,
making it easier for you to work with the many-to-many relationship between posts and categories.


### ⚡ One-to-one relationship

```ts
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model User {
  // Other fields...
  UserPreferences UserPreferences?
}

model UserPreferences {
  id           String  @id @default(auto()) @map("_id") @db.ObjectId
  emailUpdates Boolean
  user         User    @relation(fields: [userId], references: [id])
  userId       String  @unique @db.ObjectId
}

model Post {
  // Other fields...
}

model Category {
  // Other fields...
}
```
The `UserPreferences` model represents a one-to-one relationship.


- The `User` model has a field called `UserPreferences` defined as `UserPreferences?`. The `?` indicates that it's an optional field, meaning a `User` may or may not have associated `UserPreferences`.
- The `UserPreferences` model has a field called `user` defined as `User`. This establishes a one-to-one relationship between `UserPreferences` and `User`.
- The `userId` field in the `UserPreferences` model serves as the foreign key that references the `id` field in the `User` model.
- By defining the `user` field in the `UserPreferences` model and the `UserPreferences` field in the `User` model, you establish the one-to-one relationship between them.

In summary, the one-to-one relationship exists between the `User` model and the `UserPreferences` model. Each `User` can have at most one associated `UserPreferences`, and each `UserPreferences` can be associated with only one `User`.


## Model Attributes 🚀

```ts
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model User {
  id              String           @id @default(auto()) @map("_id") @db.ObjectId
  email           String           @unique
  name            String?
  age             Int
  birthYear       Int?
  isAdmin         Boolean          @default(false)
  createdAt       DateTime         @default(now())
  updatedAt       DateTime         @updatedAt
  writtenPosts    Post[]           @relation("writtenPosts")
  favoritePosts   Post[]           @relation("favoritePosts")
  UserPreferences UserPreferences?

  @@unique([age, name, birthYear])
  @@index([name])
}

// one to one
model UserPreferences {
  id           String  @id @default(auto()) @map("_id") @db.ObjectId
  emailUpdates Boolean
  user         User    @relation(fields: [userId], references: [id])
  userId       String  @unique @db.ObjectId
}

// one to many
model Post {
  id            String    @id @default(auto()) @map("_id") @db.ObjectId
  rating        Float
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  views         Int
  comments      BigInt
  title         String
  content       String
  author        User      @relation("writtenPosts", fields: [authorId], references: [id])
  authorId      String    @db.ObjectId
  favoritedBy   User?     @relation("favoritePosts", fields: [authorId], references: [id])
  favoritedById String?
  Category      Category? @relation(fields: [categoryId], references: [id])
  categoryId    String?   @db.ObjectId
}

// many to many
model Category {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  name  String @unique
  posts Post[]
}

```


- A model is a representation of an entity in your application domain, such as a User, Post, or Category.
- A model maps to a table or collection in your database and forms the basis of the queries available in Prisma Client.
- A model has the following attributes:

### ⚡ Field

- These are the properties of the model, such as id, name, email, etc.
- Each field has a name and a type, which can be a scalar type (such as String, Int, Boolean, etc.), an enum type (a predefined set of values), or a relation type (a reference to another model).
- Fields can also have modifiers that change their behavior, such as:

### ⚡ Fields Modifiers

#### 🔗 @id: 
- to mark the field as the primary key
  - Example: `id String @id @default(auto()) @map("_id") @db.ObjectId`
#### 🔗  @unique: 
- to enforce uniqueness
  - Example: `email String @unique`
#### 🔗  @default: 
- to provide a default value
  - Example: `isAdmin Boolean @default(false)`
#### 🔗 @relation: 
- to define the relation to another model
  - Example: `author User @relation("writtenPosts", fields: [authorId], references: [id])`
#### 🔗 @map: 
- to specify the name of the database column
  - Example: `id String @id @default(auto()) @map("_id") @db.ObjectId`
#### 🔗 @db: 
- to specify the database type of the field
  - Example: `id String @id @default(auto()) @map("_id") @db.ObjectId`
#### 🔗 @nullable: 
- to specify whether the field can be null
    - Example: `name String?`
#### 🔗 @type:
- to specify the type of the field
  - Example: `comments BigInt`
#### 🔗 @description: 
- to provide a description of the field
  - Example: `@description("The title of the post") title String`

### ⚡ Indexes

- These are used to optimize the performance of queries that involve certain fields.
- You can define a unique index (@@unique) or a non-unique index (@@index) on one or more fields of a model.
- You can also specify the name of the index and the sorting order of the fields.
  - Example: `@@unique([age, name, birthYear])`
  - Example: `@@index([name])`

> This means age, name, and birthYear together form a unique index, and must be unique together. name is a non-unique index.

### ⚡ Schema

- This is an optional attribute that specifies the database schema that the model belongs to.
- This is useful when you have multiple schemas in your database and want to map them to different models.
- You can use the @@schema attribute to provide the name of the schema for a model.
  - Example: `@@schema("base")`

### ⚡ Block-Level Attributes

- These are attributes that apply to the whole model rather than individual fields.
- They are written after all the fields of the model and start with @@.
- The following block-level attributes are available:

#### 🔗 @@unique

- This attribute defines a unique constraint on a field or on a set of fields.
- A unique constraint ensures that no two instances of the model can have the same value for the field or for the set of fields.
  - Example: `@@unique([age, name, birthYear])`

#### 🔗 @@index

- This attribute creates an index on a set of fields.
- An index can improve the performance of queries that are performed on the set of fields.
  - Example: `@@index([name])`


There are some other attributes that are available at the block level, such as:

#### 🔗  @@map

- This attribute can be used to specify the name of the database table or collection that corresponds to a model. The @@map attribute is only necessary if the name of the database table or collection is different from the name of the model.
  - Example: `@@map("users")`

#### 🔗 @@id

- This attribute can be used to define a multi-field primary key for a model. The @@id attribute takes an array of field names that make up the primary key. The fields must be marked as @unique or have a @@unique index defined on them.
  - Example: `@@id([firstName, lastName])`

#### 🔗 @@db

- This attribute can be used to specify the database schema that the model belongs to. The @@db attribute is only necessary if you have multiple schemas in your database and want to map them to different models. The @@db attribute takes the name of the schema as an argument.
  - Example: `@@db("base")`

#### 🔗 @ignore

- This attribute can be used to ignore a field. The @ignore attribute is useful when you want to exclude a field from the Prisma schema.
- Example: `@ignore`

#### 🔗 @default

- This attribute can be used to specify the default value for a field. The @default attribute takes a value as an argument.
- Example: `@default("John Doe")`

#### 🔗 @description

- This attribute can be used to provide a description of a field. The @description attribute takes a string as an argument.
- Example: `@description("The title of the post")`

#### 🔗 @updatedAt

- This attribute can be used to specify the field that stores the last updated timestamp of a model. The @updatedAt attribute takes no arguments and automatically updates the field value whenever the model is updated.
- Example: `@updatedAt`

#### 🔗 @createdAt

- This attribute can be used to specify the field that stores the creation timestamp of a model. The @createdAt attribute takes no arguments and automatically sets the field value when the model is created.
- Example: `@createdAt`








