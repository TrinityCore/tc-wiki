---
title: Docker Core Installation
description: 
published: true
date: 2024-03-08T00:08:21.529Z
tags: 
editor: markdown
dateCreated: 2024-03-08T00:08:21.529Z
---

## Getting started

**Prerequisites**

-   Docker installed on your system ([https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/))
-   Docker Compose installed ([https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/))
-   TrinityCore base Docker image (`trinitycore/trinitycore:3.3.5`) - Pull this image using  `docker pull trinitycore/trinitycore:3.3.5`

**Setting Up**

1.  **Project Structure:**
    
    -   Create a directory to house your server files (e.g.,  `trinitycore-server`).
    -   Within this directory, create subdirectories:
        -   `configs`  (for configuration files)
        -   `data`  (for game data)
        -   `mysql`  (for database storage)
2.  **Configuration Files:**
    
    -   Download the default configuration files (`worldserver.conf`  and  `authserver.conf`) from the TrinityCore resources.
    -   Place these files into your  `configs`  directory.
    -   Consult the TrinityCore wiki for guidance on editing these configuration files.
3.  **docker-compose.yml**
    
    -   Create a file named  `docker-compose.yml`  in your project's root directory.
    -   Paste the following content into this file:
```yaml
services: 
  trinity_bnetserver:
    image: trinitycore/trinitycore:3.3.5
    container_name: trinity_bnetserver
    entrypoint: bnetserver
    volumes:
      - ./configs:/home/circleci/project/bin/check_install/etc
    ports:
      - 1119:1119 
      - 8081:8081 
    depends_on:
      - mysql
    networks:
      - trinitycore

  trinity_worldserver:
    image: trinitycore/trinitycore:3.3.5
    container_name: trinity_worldserver
    entrypoint: worldserver
    volumes:
      - ./configs:/home/circleci/project/bin/check_install/etc
      - ./data:/trinity/data
    ports:
      - 8085:8085 
      - 8086:8086 
    depends_on:
      - mysql
    networks:
      - trinitycore

  trinity_mysql:
    image: mysql:5.7
    container_name: trinity_mysql
    environment: 
      MYSQL_ROOT_PASSWORD: trinitycore
      MYSQL_DATABASE: trinity
      MYSQL_USER: trinity
      MYSQL_PASSWORD: trinity
    volumes:
      - ./mysql:/var/lib/mysql
    networks:
      - trinitycore

networks:
  trinitycore:
```

1.  **Start Your Server:**
    
    -   Open a terminal and navigate to your project directory.
    -   Run the command:  `docker-compose up -d`

**Connecting to the Server**

-   You will need a modified World of Warcraft client (version 3.3.5) that is configured to connect to your server's IP address.

**Additional Notes**

-   If your server is behind a router, configure port forwarding for the exposed ports (e.g., 8085 for the world server).
-   You might need to create the initial databases and user accounts in your MySQL container.
-   The  `volumes`  sections in the  `docker-compose.yml`  ensure the persistence of your data.

> Please remember to rename the **worldserver.conf.dist** and **authserver.conf.dist** files in **worldserver.conf** and **authserver.conf** respectively, unless you want to keep the configuration files of a previously compiled version of the core.
{.is-info}

