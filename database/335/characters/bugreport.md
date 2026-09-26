---
title: bugreport
description: 
published: true
date: 2022-11-21T21:23:07.228Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:58:53.944Z
---

> This is a deprecated table, and used by core just for pinging mysql. It was created to store all the Bug/Suggestion submitted ingame by Players.
{.is-danger}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO |  | auto_increment | Identifier |
| [type](#type) | longtext |  |  | NO |  |  |  |
| [content](#content) | longtext |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
Auto generated value when records are inserted by Trinity. This id is just here to be a primary key and eases the data insertion.
&nbsp;

### type
The text description of the type of bug or suggestion.
&nbsp;

### content
The text content of the bug or suggestion.
&nbsp;

