---
title: autobroadcast
description: 
published: true
date: 2026-04-17T15:58:40.789Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:57:45.276Z
---

> This table contains the autobroadcast entries for your realms. 
> Values like it's activity, position and Timer (\*.On, \*.Center, \*.Timer) are defined within the [worldserver.conf](/files/configuration/home). They are chosen randomly, based on their weight.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [realmid](#realmid) | int | signed | PRI | NO | -1 |  |  |
| [id](#id-alt) | tinyint | unsigned | PRI | NO |  | auto_increment |  |
| [weight](#weight) | tinyint | unsigned |  | YES | 1 |  |  |
| [text](#text) | longtext |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### realmid
The [realm id](../auth/realmlist#id) defines which realm this entry belongs to.

Use `-1` for all realms to load this entry.
&nbsp;

### id {#id-alt}
Unique identifier key per realm. Entries with same id will override each other without warnings - this can be used to replace `-1` **realmid** entry on a specific realm.
&nbsp;

### weight
A non-negative integer. Entries with higher weight have more chance to get picked.
&nbsp;

### text
The text to broadcast. [UI escape sequences](https://wowpedia.fandom.com/wiki/UI_escape_sequences?oldid=1972918) can be used.
&nbsp;

