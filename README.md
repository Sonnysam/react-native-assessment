# QR Hunter Authentication System

A modern authentication system built with React Native and Expo Router, featuring a complete user journey from login to password reset.

## 🎯 Assessment Overview

This project is an interview assessment demonstrating a fully functional authentication flow with modern UI/UX practices in a QR-based scavenger hunt game application.

## 🎥 Demo Videos

- 🖥️ Hosted Web Demo: [Watch here](https://sam0-my-app--p0on2wgoow.expo.app/)

- Mobile screen recording
https://github.com/user-attachments/assets/9eb6eec8-390d-460c-8968-b545355c294d

-Web screen recording
https://github.com/user-attachments/assets/44fff61b-3797-4fc8-b9ec-69ae2c11383a



## 🚀 Features

- Modern UI/UX design
- Complete authentication flow
- Custom form components
- Responsive layouts
- Type-safe development with TypeScript
- Consistent styling system

## 📱 Screens

### Authentication Flow

1. **Login Screen** (`/app/(auth)/login.tsx`)

   - Email & password authentication
   - Forgot password link
   - Sign up navigation
   - Form validation

2. **Sign Up Screen** (`/app/(auth)/signup.tsx`)

   - User type toggle (Organiser/Player)
   - Dynamic form fields
   - Full registration form for organisers
   - Age verification
   - Email validation

3. **Forgot Password Flow**
   - Request Screen (`/app/(auth)/forgot.tsx`)
     - Email input
     - Validation
   - Verification Screen (`/app/(auth)/verify-code.tsx`)
     - 6-digit code input
     - Auto-focus navigation
   - Reset Password (`/app/(auth)/reset-password.tsx`)
     - New password input
     - Password confirmation
   - Success Screen (`/app/(auth)/success.tsx`)
     - Confirmation message
     - Return to login

## 🛠️ Technology Stack

- React Native
- Expo SDK 52
- TypeScript
- Expo Router v4
- Custom Components
- React Native Safe Area Context

## 🏃‍♂️ Getting Started

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
yarn install
```

3. Start the development server

```bash
yarn start
```

## 📦 Project Structure

```
my-app/
├── app/
│   └── (auth)/
│       ├── _layout.tsx
│       ├── login.tsx
│       ├── signup.tsx
│       ├── forgot.tsx
│       ├── verify-code.tsx
│       ├── reset-password.tsx
│       └── success.tsx
├── components/
│   ├── CustomButton.tsx
│   ├── CustomTextInput.tsx
│   └── MainContainer.tsx
├── constants/
│   └── Colors.ts
└── assets/
    ├── logo.png
    └── success.png
```

## 🎨 Design System

### Colors

```typescript
export const Colors = {
  primary: '#000000',
  background: '#425F77',
  link: '#5EE4EF',
  text: '#ffffff',
  input: '#364F63',
  border: '#23323F',
  button: '#1E3F5B',
};
```

### Components

- **CustomButton**: Reusable button component with loading and disabled states
- **CustomTextInput**: Form input component with icon support and password toggle
- **MainContainer**: Layout wrapper with safe area and scroll handling

## 🔗 Links

- **Hosted Demo**: [Live Preview](https://expo.dev/@yourusername/qr-hunter)
- **Skype**: [https://join.skype.com/invite/ItGnpAiaD6Kz](https://join.skype.com/invite/ItGnpAiaD6Kz)
- **Email**: [samuelagbenyo067@gmail.com](mailto:samuelagbenyo067@gmail.com)

## 👤 Contact

For any questions about this assessment, please reach out via:

- WhatsApp number: +233594602088

## 📄 License

This project is created for assessment purposes. All rights reserved.
