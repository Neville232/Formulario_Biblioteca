-- Crear la base de datos
CREATE DATABASE BIBLIOTECA_UNEXPO;

-- Crear el usuario y otorgar permisos
CREATE USER 'ADMIN_BIBLIOTECA'@'localhost' IDENTIFIED BY 'BUNEXPO2025';
GRANT ALL PRIVILEGES ON BIBLIOTECA_UNEXPO.* TO 'ADMIN_BIBLIOTECA'@'localhost';
FLUSH PRIVILEGES;