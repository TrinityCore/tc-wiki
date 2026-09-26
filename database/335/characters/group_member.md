---
title: group_member
description: 
published: true
date: 2023-07-30T18:15:04.109Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:00:52.221Z
---

> This table holds info about group members.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [guid](#guid) | int | unsigned |  | NO |  |  |  |
| [memberGuid](#memberguid) | int | unsigned | PRI | NO |  |  |  |
| [memberFlags](#memberflags) | tinyint | unsigned |  | NO | 0 |  |  |
| [subgroup](#subgroup) | tinyint | unsigned |  | NO | 0 |  |  |
| [roles](#roles) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### guid
references [groups.guid](../characters/groups#guid).
&nbsp;

### memberGuid
[character guid](../characters/characters#guid) of a group member.
&nbsp;

### memberFlags
`enum GroupMemberFlags`
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 1 | 0x1 | MEMBER_FLAG_ASSISTANT |  |
| 2 | 0x2 | MEMBER_FLAG_MAINTANK | unique per group |
| 4 | 0x4 | MEMBER_FLAG_MAINASSIST | unique per group |
{.dense}

&nbsp;

### subgroup
Range 0 – 7, representing the subgroups of a raid group. There can only be 5 membes in one subgroup per raid group.
&nbsp;

### roles
`enum LfgRoles`
| Value | Flag | Name |
|-------|------|------|
| 1 | 0x01 | PLAYER_ROLE_LEADER |
| 2 | 0x02 | PLAYER_ROLE_TANK |
| 4 | 0x04 | PLAYER_ROLE_HEALER |
| 8 | 0x08 | PLAYER_ROLE_DAMAGE |
{.dense}

&nbsp;

