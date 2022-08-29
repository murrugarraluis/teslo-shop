<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Teslo API
1. Clonar proyecto
    ```
    yarn install
    ```
2. Clonar el archivo ``.env.template`` y renombrarlo a ``.env``
3. Cambiar las variables de entorno
4. Levantar base de datos
    ```
    docker-compose up -d
    ```
5. Ejecutar SEED
   ```
   localhost:3000/api/seed
   ```
6. Levantar en desarrollo: 
    ```
    yarn start:dev
    ```