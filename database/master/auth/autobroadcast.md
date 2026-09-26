---
title: autobroadcast
description: This table contains the autobroadcast entries for your realms. Values like it's activity, position and Timer (*.On, *.Center, *.Timer) are defined within the worldserver.conf. They are chosen randomly, based on their weight.
published: true
date: 2022-11-21T20:58:08.462Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-20T14:08:55.833Z
---

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
The realmlist.id. Defines which realm this entry belongs to. Use **-1** for all realms to load this entry.
&nbsp;

### id {#id-alt}
Unique identifier key per realm. Entries with same id will override each other without warnings - this can be used to replace -1 realmid entry on a specific realm.
&nbsp;

### weight
A non-negative integer. Entries with higher weight have more chance to get picked.
&nbsp;

### text
The text to broadcast. Color and item/spell/quest link formating codes can be used.
&nbsp;


