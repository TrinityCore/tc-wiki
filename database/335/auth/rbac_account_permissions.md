---
title: rbac_account_permissions
description: 
published: true
date: 2023-08-01T22:26:49.292Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:57:58.492Z
---

<a href="https://trinitycore.info/en/database/335/auth/logs_ip_actions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'logs_ip_actions'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/rbac_default_permissions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'rbac_default_permissions'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

> Role-base Access Control (RBAC) component
> 
> see [How-to: RBAC](https://trinitycore.info/en/how-to/RBAC) for details.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [accountId](#accountid) | int | unsigned | PRI | NO |  |  | Account id |
| [permissionId](#permissionid) | int | unsigned | PRI | NO |  |  | Permission id |
| [granted](#granted) | tinyint(1) | signed |  | NO | 1 |  | Granted = 1, Denied = 0 |
| [realmId](#realmid) | int | signed | PRI | NO | -1 |  | Realm Id, -1 means all |
&nbsp;
## Description of fields

### accountId
references [account.id](../auth/account#id)
&nbsp;

### permissionId
references [rbac_permissions.id](../auth/rbac_permissions#id)
&nbsp;

### granted
* 0: Denied
* 1: Granted
&nbsp;

### realmId
* -1: all realms
* [realm id](../auth/realmlist#id): only this realm
&nbsp;

<a href="https://trinitycore.info/en/database/335/auth/logs_ip_actions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'logs_ip_actions'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to auth</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/auth/rbac_default_permissions" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'rbac_default_permissions'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
