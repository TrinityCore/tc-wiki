---
title: friendship_rep_reaction
description: 
published: true
date: 2024-09-05T22:45:57.739Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:53:34.040Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Reaction](#reaction) | text |  |  | YES | NULL |  |  |
| [FriendshipRepID](#friendshiprepid) | int | signed |  | NO | 0 |  |  |
| [ReactionThreshold](#reactionthreshold) | int | signed |  | NO | 0 |  |  |
| [OverrideColor](#overridecolor) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### Reaction
*- no description -*
&nbsp;

### FriendshipRepID
*- no description -*
&nbsp;

### ReactionThreshold
*- no description -*
&nbsp;

### OverrideColor
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

