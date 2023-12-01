# Dashboard

> **Warning**
> This is a work-in-progress and not the finished product.
>
> Feel free to leave feature suggestions but please don't open issues for bugs or support requests just yet.

[![Dashboard](./apps/web/public/_static/screenshot/login-page-screenshot.png)](https://marinhomich.dev/)

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **ORM:** [Prisma](https://www.prisma.io/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Email:** [React Email](https://react.email)
- **Payments infrastructure:** [Stripe](https://stripe.com)

## Running Locally

Follow these steps to get the project up and running on your local machine:

1. Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/marinhomich/marinhomich.dev.git
```

2. Navigate to the project directory:

```bash
cd marinhomich.dev
```

3. Install dependencies using pnpm:

```bash
pnpm install
```

4. Start the development server:

```bash
pnpm run dev
```

## Using Docker

1. Build your container:

```bash
docker build -t nextjs-docker .
```

2. Run your container:

```bash
docker run -p 3000:3000 nextjs-docker
```

## Contributing

Contributions are welcome and encouraged! If you'd like to contribute to this project, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per the terms of the license.
