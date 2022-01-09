# Azumi's vault | Portafolio de Alejandro Suárez

[![Netlify Status](https://api.netlify.com/api/v1/badges/eaf1007b-cb2f-4151-9922-e1560ff75126/deploy-status)](https://app.netlify.com/sites/azumi-vault/deploys)
[![CodeFactor](https://www.codefactor.io/repository/github/alexazumi/azumi-vault/badge)](https://www.codefactor.io/repository/github/alexazumi/azumi-vault-resurrected)
![GitHub package.json version](https://img.shields.io/github/package-json/v/AlexAzumi/azumi-vault-resurected)

Portafolio de proyectos web de mis **proyectos personales** importantes.

## Correr de manera local

Para correr el proyecto de manera local necesitas seguir un par de pasos sencillos, pero para ello se necesita:

- Git
- NPM 6.4.1 o mejor
- Angular CLI 7.1.4 o mejor

Primero se necesita clonar el repositorio con el siguiente comando:

```
git clone https://github.com/AlexAzumi/azumi-vault.git
```

Luego accede a la carpeta donde se clonó el repositorio

```
cd azumi-vault
```

Una vez en la carpeta raíz del repositorio, se necesitará descargar todas las dependenicas con `npm` usando el siguiente comando:

```
npm install
```

Después de compilar los estilos estará listo para ejecutarse de manera local:

```
ng serve --open
```

> El argumento _--open_ es para que automáticamente se abra la página en el navegador, de igual manera puede acceder en la dirección _http://localhost:4200/_

## Compilar versión de producción

Si quiere compilar la versión de producción use el siguiente comando:

```
npm run build
```

Al terminar podrás encontrar todos los archivos de la página en la carpeta `dist`
