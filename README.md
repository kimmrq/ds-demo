# Ksyos Design System

---

Ksyos Design System is used in ClientSafeWeb & MijnKsyos and is available as a private scoped [package](https://github.com/Ksyos/design-system/packages/103413) hosted on GitHub Packages.

What the heck is a design system?

> "A design system is a collection of reusable components, guided by clear
> standards, that can be assembled together to build any number of
> applications."

-- Will Fanguy, [_A comprehensive guide to design
systems_](https://www.invisionapp.com/inside-design/guide-to-design-systems/)

## 🚀 Quick Links

-   [Installation](#-installation)
-   [Usage](#-usage)

## 📦 Installation

### Step 1: Create a Personal Access Token

Login to your **GitHub account > Settings > Developer settings**

In the left sidebar, click **Personal access tokens.**

Generate a new (or update your current) token with `repo` and `read:packages` permission.

### Step 2: Authenticating to GitHub Packages

Authenticating with a personal access token

You can authenticate to GitHub Packages with npm by editing your per-user ~/.npmrc file to include your personal access token.

Edit the ~/.npmrc file to include the following line, replacing TOKEN with your personal access token (created in the previous step). Create a new ~/.npmrc file if one doesn't exist.

```
@ksyos:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=<YOUR GITHUB PERSONAL TOKEN>
```

### Step 3: Install package (Optional)

```
npm install @ksyos/design-system
```

## 📄 Usage

Wrap the root of your application with the `ThemeProvider` component,
which adds the Design System theme to context for use in styled-components
and sets typographic defaults.
This should only be included once in your application.

```jsx
import React from 'react';
import { defaultTheme, ThemeProvider } from '@ksyos/design-system';

class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={defaultTheme}>
                <h1>Hello</h1>
            </ThemeProvider>
        );
    }
}
```

### Button

```jsx
import { Button } from '@ksyos/design-system'

<Button>I am a button<Button>
```
