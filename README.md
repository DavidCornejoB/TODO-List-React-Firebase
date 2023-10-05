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
