---
title: character_pet
description: 
published: true
date: 2022-11-21T21:00:26.353Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T07:29:46.627Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [entry](#entry) | int | unsigned |  | NO | 0 |  |  |
| [owner](#owner) | bigint | unsigned | MUL | NO | 0 |  |  |
| [modelid](#modelid) | int | unsigned |  | YES | 0 |  |  |
| [CreatedBySpell](#createdbyspell) | int | unsigned |  | NO | 0 |  |  |
| [PetType](#pettype) | tinyint | unsigned |  | NO | 0 |  |  |
| [level](#level) | smallint | unsigned |  | NO | 1 |  |  |
| [exp](#exp) | int | unsigned |  | NO | 0 |  |  |
| [Reactstate](#reactstate) | tinyint | unsigned |  | NO | 0 |  |  |
| [name](#name-alt) | varchar(21) |  |  | NO | Pet |  |  |
| [renamed](#renamed) | tinyint | unsigned |  | NO | 0 |  |  |
| [slot](#slot) | smallint | signed | MUL | NO | -1 |  |  |
| [curhealth](#curhealth) | int | unsigned |  | NO | 1 |  |  |
| [curmana](#curmana) | int | unsigned |  | NO | 0 |  |  |
| [savetime](#savetime) | int | unsigned |  | NO | 0 |  |  |
| [abdata](#abdata) | text |  |  | YES | NULL |  |  |
| [specialization](#specialization) | smallint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
*- no description -*
&nbsp;

### entry
*- no description -*
&nbsp;

### owner
*- no description -*
&nbsp;

### modelid
*- no description -*
&nbsp;

### CreatedBySpell
*- no description -*
&nbsp;

### PetType
*- no description -*
&nbsp;

### level
*- no description -*
&nbsp;

### exp
*- no description -*
&nbsp;

### Reactstate
*- no description -*
&nbsp;

### name {#name-alt}
*- no description -*
&nbsp;

### renamed
*- no description -*
&nbsp;

### slot
*- no description -*
&nbsp;

### curhealth
*- no description -*
&nbsp;

### curmana
*- no description -*
&nbsp;

### savetime
*- no description -*
&nbsp;

### abdata
*- no description -*
&nbsp;

### specialization
*- no description -*
&nbsp;

