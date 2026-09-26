---
title: account_instance_times
description: 
published: true
date: 2023-07-24T20:12:03.413Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:58:29.996Z
---

> This table controls how many instances the account's characters have been in last 1 hour. If there is 5 records per account, the player won't be able to enter another instance.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [accountId](#accountid) | int | unsigned | PRI | NO |  |  |  |
| [instanceId](#instanceid) | int | unsigned | PRI | NO | 0 |  |  |
| [releaseTime](#releasetime) | bigint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### accountId
The unique [account id](../auth/account#id).
&nbsp;

### instanceId
This is the [instance id](../characters/instance#id) which characters of this account has been past 5 hours.
&nbsp;

### releaseTime
The time when the instances should be allowed again measured in Unix time.
&nbsp;

