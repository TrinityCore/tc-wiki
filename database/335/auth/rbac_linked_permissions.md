---
title: rbac_linked_permissions
description: 
published: true
date: 2023-08-01T22:28:00.661Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:58:03.658Z
---

> Role-base Access Control (RBAC) component
> 
> see [How-to: RBAC](/how-to/RBAC) for details.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO |  |  | Permission id |
| [linkedId](#linkedid) | int | unsigned | PRI | NO |  |  | Linked Permission id |
&nbsp;
## Description of fields

### id {#id-alt}
references [rbac_permissions.id](../auth/rbac_permissions#id)
&nbsp;

### linkedId
references [rbac_permissions.id](../auth/rbac_permissions#id)
&nbsp;

