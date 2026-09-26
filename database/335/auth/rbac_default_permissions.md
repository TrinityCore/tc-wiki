---
title: rbac_default_permissions
description: 
published: true
date: 2023-08-01T22:24:53.369Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:58:01.076Z
---

> Role-base Access Control (RBAC) component
> 
> see [How-to: RBAC](/how-to/RBAC) for details.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [secId](#secid) | int | unsigned | PRI | NO |  |  | Security Level id |
| [permissionId](#permissionid) | int | unsigned | PRI | NO |  |  | permission id |
| [realmId](#realmid) | int | signed | PRI | NO | -1 |  | Realm Id, -1 means all |
&nbsp;
## Description of fields

### secId
references [account_access.SecurityLevel](../auth/account_access#securitylevel)
&nbsp;

### permissionId
references [rbac_permissions.id](../auth/rbac_permissions#id)
&nbsp;

### realmId
* -1: all realms
* [realm id](../auth/realmlist#id): only this realm
&nbsp;

