---
title: Role-based Access Control
description: TrinityCore implementation of RBAC
published: true
date: 2023-01-08T00:11:33.296Z
tags: 
editor: markdown
dateCreated: 2023-01-07T23:46:49.395Z
---

# Role-based Access Control
GM security levels grant access to commands based on the defaults provided on the [GM Commands](/how-to/gm-commands) page. But if you wish to make modifications to the permissions granted by each security level, or if you need to grant an account specific permissions, you must understand how TrinityCore's RBAC implementation works.

&nbsp;
### Definitions
- **Permission**: specific to a particular command or action 
	- Defined in `auth.rbac_permissions`
- **Role**: A permission with a many-to-many relationship to another permission
	- Defined in `auth.rbac_linked_permissions`
  
Deny definitions are explicitly set in `rbac_account_permissions` with `granted = 0`, and override linked permissions. See the example below.


```shell
# revoke account 5 access to `npc move` - 595 command

# account_access
+---------+-------------+---------+
|AccountID|SecurityLevel| RealmID |
+---------+-------------+---------+
|    5    |      2      |   -1    |
+---------+-------------+---------+


# rbac_account_permissions
+---------+------------+-------+---------+
|accountId|permissionId|granted| realmId |
+---------+------------+-------+---------+
|    5    |     595    |   0   |    -1   |
+---------+------------+-------+---------+
```
  
&nbsp;
### Default Permissions
  
  | Security Level |Role| Permission Id |
|:---:|:---:|:---:|
| 3 |Admin| 192 |
| 2 |GM | 193 |
| 1 |Mod | 194 |
| 0 |Player | 195 |
  
&nbsp;

## RBAC Rules
- Permissions can have linked permissions (thus creating a role).
- An account can be assigned granted and denied roles. Permissions inherited from roles are granted if roles is granted and denied if roles is denied.
- An account can be assigned granted and denied permissions.
- An account can have multiple roles and permissions.
- An account can not have same permission or role granted and denied at same time.
- Id `0` can not be used to define a permission.

&nbsp;
## RBAC Console Commands
| **Name**                     | **Syntax**                                            | **Description**                                                                                                                                                                              |
|------------------------------|-------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **.rbac account**            | .rbac account [$account]                      | View permissions of selected player or given account<br />Note: Only those that affect current realmNote: Shows real permissions after checking group and roles                                    |
| **.rbac account permission** | .rbac account list [$account]                 | View permissions of selected player or given account<br />Note: Only those that affect current realmNote: Only those directly granted or denied, does not include inherited permissions from roles |
| **.rbac account grant**      | .rbac account grant [$account] #id [#realmId] | Grant a permission to selected player or given account.#reamID may be -1 for all realms.                                                                                                     |
| **.rbac account deny**       | .rbac account deny [$account] #id [#realmId]  | Deny a permission to selected player or given account.#reamID may be -1 for all realms.                                                                                                      |
| **.rbac account revoke**     | .rbac account revoke [$account] #id           | Remove a permission from an account<br />Note: Removes the permission from granted or denied permissions                                                                                           |
| **.rbac list**               | .rbac list                                    | View list of all permissions.If $id is given will show only info for that permission.                                                                                                        |

&nbsp;
## RBAC Table Schema
| **Table** | **Table Description** | **Field Name** | **Field Type** | **Field Description** |
|---|---|---|---|---|
| rbac_account_permissions | Account-Permission relation | accountId<br /> permissionId<br /> granted<br /> realmId | int<br /> int<br /> int<br /> signed int | Account id<br /> Permission id<br /> Granted = 1, Denied = 0<br /> All = -1, else realmId |
| rbac_permissions | Permission List | id<br /> name | int<br /> text | Permission id<br /> Permission name |
| rbac_default_permissions | Default permissions to assign to a specific security level (account_access) | secId <br /> permissionId | int<br /> int | Security level [0-3] <br /> Permission id  |
| rbac_linked_permissions | Assigns permissions to roles (see rbac_permissions for permissions with name "role") Can also be used to link permissions to permissions (creating new roles) | id <br /> linkedId | int <br /> int | Permission id <br /> Permission id |