FROM node:19-alpine

# Crear directorio de trabajo
RUN mkdir -p /app
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install 

# Copiar el resto de los archivos
COPY . .

# Compilar la aplicación
RUN npm run build

# Exponer el puerto de la aplicación
EXPOSE 3001

# Comando de inicio
CMD ["npm", "start"]
