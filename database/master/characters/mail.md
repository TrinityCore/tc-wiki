---
title: mail
description: 
published: true
date: 2023-05-11T08:55:47.347Z
tags: database, master, characters
editor: markdown
dateCreated: 2021-08-30T08:15:12.328Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | bigint | unsigned | PRI | NO | 0 |  | Identifier |
| [messageType](#messagetype) | tinyint | unsigned |  | NO | 0 |  |  |
| [stationery](#stationery) | tinyint | signed |  | NO | 41 |  |  |
| [mailTemplateId](#mailtemplateid) | smallint | unsigned |  | NO | 0 |  |  |
| [sender](#sender) | bigint | unsigned |  | NO | 0 |  | Character Global Unique Identifier |
| [receiver](#receiver) | bigint | unsigned | MUL | NO | 0 |  | Character Global Unique Identifier |
| [subject](#subject) | longtext |  |  | YES | NULL |  |  |
| [body](#body) | longtext |  |  | YES | NULL |  |  |
| [has_items](#has_items) | tinyint | unsigned |  | NO | 0 |  |  |
| [expire_time](#expire_time) | bigint | signed |  | NO | 0 |  |  |
| [deliver_time](#deliver_time) | bigint | signed |  | NO | 0 |  |  |
| [money](#money) | bigint | unsigned |  | NO | 0 |  |  |
| [cod](#cod) | bigint | unsigned |  | NO | 0 |  |  |
| [checked](#checked) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
*- no description -*
&nbsp;

### messageType
*- no description -*
&nbsp;

### stationery
*- no description -*
&nbsp;

### mailTemplateId
*- no description -*
&nbsp;

### sender
*- no description -*
&nbsp;

### receiver
*- no description -*
&nbsp;

### subject
*- no description -*
&nbsp;

### body
*- no description -*
&nbsp;

### has_items
*- no description -*
&nbsp;

### expire_time
*- no description -*
&nbsp;

### deliver_time
*- no description -*
&nbsp;

### money
*- no description -*
&nbsp;

### cod
*- no description -*
&nbsp;

### checked
*- no description -*
&nbsp;

