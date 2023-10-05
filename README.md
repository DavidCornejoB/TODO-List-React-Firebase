# Lista de tareas hecha con React, base de datos con Firestore Database y despliegue con Firebase Hosting.

Aplicación sencilla hecha con React que permite ingresar tareas a una lista de tareas. Se pueden marcar tareas como completadas y eliminar tareas. Las tareas se almacenan en una base de datos no relacional de Firestore Database de Firebase. La aplicación ha sido desplegada en Firebase Hosting.

## TODO:

- Login de usuarios para que cada usuario almacene sus propias tareas.
- Validar que no se eliminen tareas que aún no se han marcado como completadas.

---

## Dependencias para desarrollo:

### React Icons:

```
npm install react-icons --save
```

### uuid:

```
npm install uuid
```

### Firestore database:

```
npm install firebase reactfire@next
```

### Firebase Hosting:

```
npm install -g firebase-tools
```

Para inicializar el proyecto, ejecutar los siguientes comandos:

Acceder a la cuenta de Google:

```
firebase login
```

Inicializar en el proyecto (ejecutar en el directorio raíz):

```
firebase init
```

Hacemos un build del proyecto. En el caso de React, ejecutar el siguiente comando:

```
npm run build
```

Luego de hacer el build del proyecto, ejecutamos el siguiente comando (En la configuración previa de firebase de directorio público, escribir "build" en vez de "public"):

```
firebase deploy
```

---

## Resultados:

Para ver la aplicación funcionando, accede [al siguiente link](https://lista-tareas-react-ea234.web.app).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
