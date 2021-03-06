---
title: account
description: 
published: true
date: 2022-01-23T14:29:14.898Z
tags: auth, 3.3.5, 3.3.5a, 335, 335a, wotlk, base de datos
editor: markdown
dateCreated: 2022-01-23T14:04:55.080Z
---

<a href="https://trinitycore.info/es/database/335/auth/vw_log_history" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Volver a 'vw_log_history'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/es/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Volver a auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/es/database/335/auth/account_access" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Ir a 'account_access'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Estructura

| Campo | Tipo | Atributos | Llave | Null | Por defecto | Extra | Comentario |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id) | int(10) | unsigned | PRI | NO |  | auto_increment | Identifier |
| [username](#username) | varchar(32) | signed | UNI | NO | '' |  |  |
| [salt](#salt) | binary(32) | signed |  | NO |  |  |  |
| [verifier](#verifier) | binary(32) | signed |  | NO |  |  |  |
| [session_key_auth](#session_key_auth) | binary(40) | signed |  | YES | NULL |  |  |
| [session_key_bnet](#session_key_bnet) | varbinary(64) | signed |  | YES | NULL |  |  |
| [totp_secret](#totp_secret) | varbinary(128) | signed |  | YES | NULL |  |  |
| [email](#email) | varchar(255) | signed |  | NO | '' |  |  |
| [reg_mail](#reg_mail) | varchar(255) | signed |  | NO | '' |  |  |
| [joindate](#joindate) | timestamp | signed |  | NO | CURRENT_TIMESTAMP |  |  |
| [last_ip](#last_ip) | varchar(15) | signed |  | NO | 127.0.0.1 |  |  |
| [last_attempt_ip](#last_attempt_ip) | varchar(15) | signed |  | NO | 127.0.0.1 |  |  |
| [failed_logins](#failed_logins) | int(10) | unsigned |  | NO | 0 |  |  |
| [locked](#locked) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [lock_country](#lock_country) | varchar(2) | signed |  | NO | 00 |  |  |
| [last_login](#last_login) | timestamp | signed |  | YES | NULL |  |  |
| [online](#online) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [expansion](#expansion) | tinyint(3) | unsigned |  | NO | 2 |  |  |
| [mutetime](#mutetime) | bigint(20) | signed |  | NO | 0 |  |  |
| [mutereason](#mutereason) | varchar(255) | signed |  | NO | '' |  |  |
| [muteby](#muteby) | varchar(50) | signed |  | NO | '' |  |  |
| [locale](#locale) | tinyint(3) | unsigned |  | NO | 0 |  |  |
| [os](#os) | varchar(3) | signed |  | NO | '' |  |  |
| [recruiter](#recruiter) | int(10) | unsigned |  | NO | 0 |  |  |
&nbsp;
## Descripci??n de los campos

### id
Identificador ??nico de la cuenta.
&nbsp;

### username
Nombre de usuario de la cuenta.
&nbsp;

### salt
*- sin descripci??n -*
&nbsp;

### verifier
*- sin descripci??n -*
&nbsp;

### session_key_auth
*- sin descripci??n -*
&nbsp;

### session_key_bnet
*- sin descripci??n -*
&nbsp;

### totp_secret
*- sin descripci??n -*
&nbsp;

### email
El correo electr??nico actual asociado a la cuenta.
&nbsp;

### reg_mail
El correo electr??nico utilizado en el resgistro de la cuenta.
&nbsp;

### joindate
Fecha cuando la cuenta fue creada.
&nbsp;

### last_ip
??ltima IP utilizada por la persona que inici?? sesi??n en la cuenta.
&nbsp;

### last_attempt_ip
??ltima IP utilizada por la persona que intent?? iniciar sesi??n en la cuenta.
&nbsp;

### failed_logins
N??mero de intentos de inicio de sesi??n fallidos de la cuenta.
&nbsp;

### locked
Valor **0** ?? **1** controla si la cuenta esta bloqueada por IP o no. Esto puede controlarse por el comando `.account lock`.

Si esta **desbloqueada (0)**, la cuenta puede iniciar sesi??n desde cualquier IP y, si la nueva IP es distinta a la almacenada en [account.last_ip](#last_ip), ser?? actualizada con la nueva.
Si est?? **bloqueada (1)**, la cuenta solo puede iniciar sesi??n desde la ??ltima IP almacenada en [account.last_ip](#last_ip).

> Los comandos basados en `.ban` **NO** afectan a este campo. {.is-warning}

&nbsp;

### lock_country
*- sin descripci??n -*
&nbsp;

### last_login
Fecha del ??ltimo inicio de sesi??n de la cuenta.
&nbsp;

### online
El valor **0** ?? **1** controla si la cuenta esta actualmente iniciada la sesi??n y en linea.

Si el valor es **0**, significa que la cuenta no esta activa en ning??n cliente actualmente.
Si el valor es **1**, significa que la cuenta est?? iniciada la sesi??n y activa en alg??n cliente actualmente.
&nbsp;

### expansion
Valor entre **0** y **2** controlan la expansi??n m??xima a la que tiene acceso el cliente de la cuenta.

> Si el cliente utilizado es de la expansi??n TBC, pero el valor del campo [account.expansion](#expansion) es cero (0), no tendr?? acceso a las zonas de Terrallende y similares de esa expansi??n y posteriores. {.is-info}

Tabla de valores:

|Valor|Expansi??n|
|:---:|:---:|
|0|Vanilla|
|1|The Burning Crusade (TBC)|
|2|Wrath of the Lich King (WotLK)|
&nbsp;

### mutetime
Tiempo, en formato **UNIX**, cuando acabar?? el silencio (mute) de la cuenta.

Para ver cuando expirar?? el silencio (mute) se puede usar la siguiente consulta sql:

```bash
SELECT FROM_UNIXTIME(`mutetime`);
```
&nbsp;

### mutereason
La raz??n del silencio (mute).
&nbsp;

### muteby
Nombre del personaje con permisos para usar el comando `.mute` que realiz?? la acci??n del silencio (mute) en la cuenta.
&nbsp;

### locale
Configuraci??n regional utilizada por el cliente que inici?? sesi??n en la cuenta. Si se han configurado y agregado varios datos de configuraci??n regional a los servidores mundiales, los servidores mundiales devolver??n las cadenas de configuraci??n regional adecuadas al cliente. Mirar Identificadores de configuraci??n regional.
&nbsp;

### os
Almacena la informaci??n del sistema operativo del cliente. Usado por el Warden system (Sistema anti-trampas).

Valores del campo:
- Win
- Mac
&nbsp;

### recruiter
Identificador ??nico de otra cuenta. Utilizado por recuit-a-friend system (Sistema Recluta Un Amigo). Mirar [account.id](#id)
&nbsp;

<a href="https://trinitycore.info/es/database/335/auth/vw_log_history" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Volver a 'vw_log_history'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/es/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Volver a auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/es/database/335/auth/account_access" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Ir a 'account_access'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

