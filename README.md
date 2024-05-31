# FLUX - Video Calling Platform

Flux is a cutting-edge video calling and meeting platform built using Next.js, Shadcn/UI, Clerk for authentication, and Stream for facilitating video calls. Flux offers features such as instant meetings, scheduled meetings, joining via a link, personal meeting rooms, recording capabilities, and management of scheduled and previous meetings.

## Features

- **User Authentication**: Sign in with email, Google, GitHub, or LinkedIn.
- **Instant Meetings**: Create meetings on the fly.
- **Scheduled Meetings**: Schedule meetings for later.
- **Join via Link**: Join meetings using a shared link.
- **Personal Meeting Room**: Create and manage your own meeting space.
- **Meeting Recordings**: Record meetings and save the recordings.
- **Meeting Management**: View upcoming scheduled meetings and past meetings.

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/girinath2805/FLUX-video-calling-platform
    ```
2. Navigate to the project directory:
    ```bash
    cd FLUX-video-calling-platform
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

### Environment Variables

Create a `.env.local` file in the root directory and add the following keys:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="YOUR CLERK PUBLISHABLE KEY"
CLERK_SECRET_KEY="YOUR CLERK SECRET KEY"

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY="YOUR STREAM API KEY"
STREAM_SECRET_KEY="YOUR STREAM SECRET KEY"

NEXT_PUBLIC_BASE_URL=localhost:3000
```

- Obtain the `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` by revealing the secret key in the Clerk client.
- Obtain the `NEXT_PUBLIC_STREAM_API_KEY` and `STREAM_SECRET_KEY` by revealing the key in Stream.

### Running the Application Locally

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000`.

### Deployed Version

You can also access the deployed version of Flux on Vercel:

[flux-video-calling-platform.vercel.app](https://flux-video-calling-platform.vercel.app)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.
