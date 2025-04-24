## Trabajar con las siguientes ramas de acuerdo a la tarea:

###1. master:
La rama de producción, donde siempre debe estar el código listo para ser desplegado.

###2. develop:
La rama de desarrollo, donde se integran todas las características que ya están listas para ser probadas.

###3. feature/*:
- Cada nueva funcionalidad debe desarrollarse en una rama de feature. Se crea con el siguiente comando:

```bash
git flow feature start nombre-feature
```
- Para finalizar una rama de característica y fusionarla en develop:

```bash
git flow feature finish nombre-feature
```
###4. release/*:
- Una vez que tienes varias funcionalidades listadas y quieres preparar una nueva versión para producción, puedes crear una rama de release:

```bash
git flow release start nombre-version
```
- Cuando estés listo para lanzar la nueva versión, puedes fusionar esta rama tanto en master como en develop:

```bash
git flow release finish nombre-version
```
###5. hotfix/*:
- Si encuentras un error crítico en producción, puedes crear una rama hotfix desde master para corregirlo rápidamente:

```bash
git flow hotfix start nombre-hotfix
```
- Una vez corregido el problema, fusiona la rama hotfix de nuevo en master y develop:

```bash
git flow hotfix finish nombre-hotfix
```
### 6. Visualizar el flujo de trabajo
En cualquier momento puedes ver el estado de tu repositorio y las ramas con:

```bash
git flow config
```


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
