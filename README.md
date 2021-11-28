# LIBTOOL - Reagent Management System

## Local Development

### Front-end Development

The front-end app is a React-based SPA. Technology we adopt:

-   Laravel Mix (webpack toolchain)
-   TypeScript
-   React
-   React Router
-   MUI Material (known as Material UI before)
-   axios
-   i18next

Most front-end code rests in `resources/ts/` folder. And it's divided into four
parts, for different types of users:

-   `academy` - for university users <https://aalto.labtool.com>
-   `supply` - for reagent suppliers <https://supply.labtool.com>
-   `admin` - for platform administrators <https://admin.labtool.com>
-   `landing` - for guests <https://labtool.com>

To start development environment:

```
sail up
npm run watch
```
