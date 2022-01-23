---
title: account_access
description: 
published: true
date: 2022-01-23T14:45:16.045Z
tags: auth, 3.3.5, 3.3.5a, 335, 335a, wotlk, base de datos
editor: markdown
dateCreated: 2022-01-23T14:45:16.045Z
---

<a href="https://trinitycore.info/es/database/335/auth/account" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Volver a 'account'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/es/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Volver a auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/es/database/335/auth/account_banned" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Ir a 'account_banned'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Estructura

| Campo | Tipo | Atributos | Llave | Null | Por defecto | Extra | Comentario |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [AccountID](#accountid) | int(10) | unsigned | PRI | NO |  |  |  |
| [SecurityLevel](#securitylevel) | tinyint(3) | unsigned |  | NO |  |  |  |
| [RealmID](#realmid) | int(11) | signed | PRI | NO | -1 |  |  |
| [Comment](#comment) | varchar(255) | signed |  | YES | NULL |  |  |
&nbsp;

## Descripción de los campos

### AccountID
El [account.id](/database/335/auth/account#id) de la cuenta.
&nbsp;

### SecurityLevel
El nivel de seguridad de la cuenta. Cada nivel da acceso a distintos comandos. El nivel requerido para cada comando se puede encontrar y establecer en la tabla [commands](/database/335/world/commands) dentro de la base de datos [world](/database/335/world/home) de cada reino.
&nbsp;

### RealmID
El identificador del reino al que queremos aplicarle los permisos.

> El valor **-1** aplica los permisos a todos los reinos. {.is-info}

&nbsp;

### Comment
*- sin descripción -*
&nbsp;

<a href="https://trinitycore.info/es/database/335/auth/account" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Volver a 'account'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/es/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Volver a auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/es/database/335/auth/account_banned" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Ir a 'account_banned'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

