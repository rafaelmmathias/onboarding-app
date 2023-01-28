<h1 align="center">
    <font size="7">ONBOARDING APP</font>
</h1>

<div align="center">
    <font size="3">
        A dynamic step by step to introduce user's information.
    </font>
</div>

<div align="center">
  <img src="./doc/badges/badge-branches.svg" />
  <img src="./doc/badges/badge-functions.svg" />
  <img src="./doc/badges/badge-lines.svg" />
  <img src="./doc/badges/badge-statements.svg" />
</div>

## ⚡️ Getting started
First, clone:

```bash
git clone git@github.com:rafaelmmathias/onboarding-app.git
```

Install dependencies
```bash
npm install
```

Run (mock server will works automatically)
```bash
npm run dev
```

test
```bash
npm run test
```

open the link with one of the available client ids: [Onboarding Client 1](http://localhost:3001/client1) | [Onboarding Client 2](http://localhost:3001/client2) and that`s it!
Tip: Change the field names and submit an onboarding, check the network activity and notice the POST request body submitted.

<hr/>

# Onboarding settings

Two clients are mocked by default in the [mock server API](src/test/server/handlers.ts): [client1](src/test/server/db/clients/client-1) and [client2](src/test/server/db/clients/client-2), with different themes and step configurations, these keys could be used in the url to access it's onboarding. 
Eg: http://localhost:3001/{clientId}

### steps config model
`src/test/server/db/clients/{client}/config.ts`
> In these files we can edit the steps `texts`, `icons`, `positions` and `add` more steps, since we follow the shape of the `Steps` model.

### icons
Available icons: `wheel` | `car` | `chart`

> After the user submit the last step, the fields of each step will be normalized and submitted as a `form-values` by a POST to the `/steps-submit` endpoint.

### theme
`src/test/server/db/clients/{client}/theme.ts`
> Here we can change the colors and font style followin the shape of the `DefaultTheme` type which is described [here](src/ui/themes/styled.d.ts)

## App stack
- [react](https://reactjs.org/) + typescript
- [react-router](https://reactrouter.com/)
- [styled-components](https://styled-components.com/)
- [react-query v4](https://tanstack.com/query/latest)
- [msw](https://mswjs.io/)
    - Used to serve the [mock server API](src/test/server/handlers.ts).
- [jest](https://jestjs.io/)
    - Unit tests integrated with msw
    - [React Testing Library](https://testing-library.com/)
- [axios-http](https://axios-http.com/)
- [vitejs](https://vitejs.dev/)