---
title: page_text
description: 
published: true
date: 2022-11-21T21:06:32.276Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:33:16.251Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [Text](#text) | mediumtext |  |  | NO |  |  |  |
| [NextPageID](#nextpageid) | int | unsigned |  | NO | 0 |  |  |
| [PlayerConditionID](#playerconditionid) | int | signed |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
The ID of the text in the page. This number is unique to every text entry.
&nbsp;

### Text
The actual text. The message in this field will be shown as the text on a page.
&nbsp;

### NextPageID
The **ID** of the next page's text entry.
&nbsp;

### PlayerConditionID
*- no description -*
&nbsp;

### Flags
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


