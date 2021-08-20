---
title: battlenet_accounts
description: This table holds information on all available battlenet accounts.
published: true
date: 2021-08-20T14:34:01.031Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-20T14:34:01.031Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
|---|---|---|---|---|---|---|---|
| [id](#id)  |  |  |  |  |  |  |  |
| [email](#email)  |  |  |  |  |  |  |  |
| [sha_pass_hash](#sha_pass_hash)  |  |  |  |  |  |  |  |
| [joindate](#joindate)  |  |  |  |  |  |  |  |
| [last_ip](#last_ip)  |  |  |  |  |  |  |  |
| [failed_logins](#failed_logins)  |  |  |  |  |  |  |  |
| [locked](#locked)  |  |  |  |  |  |  |  |
| [lock_country](#lock_country)  |  |  |  |  |  |  |  |
| [last_login](#last_login)  |  |  |  |  |  |  |  |
| [online](#online)  |  |  |  |  |  |  |  |
| [locale](#locale)  |  |  |  |  |  |  |  |
| [os](#os)  |  |  |  |  |  |  |  |
| [LastCharacterUndelete](#LastCharacterUndelete)  |  |  |  |  |  |  |  |
| [LoginTicket](#LoginTicket)  |  |  |  |  |  |  |  |
| [LoginTicketExpiry](#LoginTicketExpiry)  |  |  |  |  |  |  |  |

&nbsp;
## Description of fields

### id
The unique account ID.
&nbsp;

### email
The e-mail address associated with this account.
&nbsp;

### sha_pass_hash
This field contains the encrypted password. The encryption is bin2hex and is in the following format: email:password. The SQL to create the password (or to compare with the current hash) is:

```sql
SELECT SHA1(CONCAT(UPPER(`username`), ':', UPPER(&lt;pass&gt;)));
```
or via PHP:
```php
bin2hex(strrev(hex2bin(strtoupper(hash("sha256",strtoupper(hash("sha256", strtoupper($email)).":".strtoupper($password)))))));
```

&nbsp;

### joindate
The date when the account was created.
&nbsp;

### last_ip
The last IP used by the person who logged in the account.
&nbsp;

### failed_logins
The number of failed logins attempted on the account.
&nbsp;

### locked
Boolean 0 or 1 controlling if the account has been locked or not. This can be controlled with the ".account lock" GM command. If locked (1), the user can only log in with their last_ip. If unlocked (0), a user can log in from any IP, and their last_ip will be updated if it is different. ".Ban account" does not lock it.
&nbsp;

### lock_country
*- no description -*
&nbsp;

### last_login
The date when the account was last logged into.
&nbsp;

### online
Boolean 0 or 1 controlling if the account is currently logged in and online.
&nbsp;

### locale
The locale used by the client logged into this account. If multiple locale data has been configured and added to the world servers, the world servers will return the proper locale strings to the client. See localization IDs
&nbsp;

### os
Stores information about client's OS. Used by Warden system.

- Win
- Mac
&nbsp;

### LastCharacterUndelete
*- no description -*
&nbsp;

### LoginTicket
*- no description -*
&nbsp;

### LoginTicketExpiry
*- no description -*
&nbsp;
