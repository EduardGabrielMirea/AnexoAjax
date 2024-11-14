```bash
docker exec -it anexoajax-web-1 /bin/bash
```

```bash
services:
  web:
    image: php:7.2-apache
    volumes:
      - ./ejerciciosAjaxAnexo:/var/www/html
    ports:
      - "8000:80"
    command: bash -c "chmod -R 777 /var/www/html && apache2-foreground" 
  db:
    image: mysql:9.1
    restart: always
    environment:
      MYSQL_DATABASE: db
      MYSQL_ROOT_PASSWORD: symfony
      MYSQL_USER: symfony
      MYSQL_PASSWORD: symfony
    ports:
      - 3036:80
    volumes:
      - ./db_data:/var/lib/mysql
  phpmyadmin:
    image: phpmyadmin
    restart: always
    ports:
      - 8080:80
    environment:
      - PMA_ARBITRARY=1
```
