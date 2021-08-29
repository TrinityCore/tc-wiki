---
title: account_access
description: This table holds security access level for any realm in realmlist table.
published: true
date: 2021-08-29T21:08:50.257Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-20T13:41:19.554Z
---

<a href="https://dev.trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to auth</span></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
|---|---|---|:---:|:---:|---|---|---|
| [AccountID](#AccountID) | int(10) | unsigned | PRI | NO |  |  |  |
| [SecurityLevel](#SecurityLevel) | tinyint(3) | unsigned |  | NO |  |  |  |
| [RealmID](#SecurityLevel) | int(11) | signed | PRI | NO | -1 |  |  |
| [Comment](#SecurityLevel) | varchar(255) | signed |  | YES | NULL |  |  |

&nbsp;
## Description of fields

### AccountID
*- no description -*
&nbsp;

### SecurityLevel
*- no description -*
&nbsp;

### RealmID
*- no description -*
&nbsp;

### Comment
*- no description -*
&nbsp;

<a href="https://dev.trinitycore.info/en/database/master/auth/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to auth</span></span></a>