---
title: chr_customization_element
description: 
published: true
date: 2024-02-11T20:02:21.453Z
tags: database, master, hotfixes
editor: markdown
dateCreated: 2021-08-30T09:51:25.991Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [ChrCustomizationChoiceID](#chrcustomizationchoiceid) | int | signed |  | NO | 0 |  |  |
| [RelatedChrCustomizationChoiceID](#relatedchrcustomizationchoiceid) | int | signed |  | NO | 0 |  |  |
| [ChrCustomizationGeosetID](#chrcustomizationgeosetid) | int | signed |  | NO | 0 |  |  |
| [ChrCustomizationSkinnedModelID](#chrcustomizationskinnedmodelid) | int | signed |  | NO | 0 |  |  |
| [ChrCustomizationMaterialID](#chrcustomizationmaterialid) | int | signed |  | NO | 0 |  |  |
| [ChrCustomizationBoneSetID](#chrcustomizationbonesetid) | int | signed |  | NO | 0 |  |  |
| [ChrCustomizationCondModelID](#chrcustomizationcondmodelid) | int | signed |  | NO | 0 |  |  |
| [ChrCustomizationDisplayInfoID](#chrcustomizationdisplayinfoid) | int | signed |  | NO | 0 |  |  |
| [ChrCustItemGeoModifyID](#chrcustitemgeomodifyid) | int | signed |  | NO | 0 |  |  |
| [ChrCustomizationVoiceID](#chrcustomizationvoiceid) | int | signed |  | NO | 0 |  |  |
| [AnimKitID](#animkitid) | int | signed |  | NO | 0 |  |  |
| [ParticleColorID](#particlecolorid) | int | signed |  | NO | 0 |  |  |
| [ChrCustGeoComponentLinkID](#chrcustgeocomponentlinkid) | int | signed |  | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### ID {#id-alt}
*- no description -*
&nbsp;

### ChrCustomizationChoiceID
*- no description -*
&nbsp;

### RelatedChrCustomizationChoiceID
*- no description -*
&nbsp;

### ChrCustomizationGeosetID
*- no description -*
&nbsp;

### ChrCustomizationSkinnedModelID
*- no description -*
&nbsp;

### ChrCustomizationMaterialID
*- no description -*
&nbsp;

### ChrCustomizationBoneSetID
*- no description -*
&nbsp;

### ChrCustomizationCondModelID
*- no description -*
&nbsp;

### ChrCustomizationDisplayInfoID
*- no description -*
&nbsp;

### ChrCustItemGeoModifyID
*- no description -*
&nbsp;

### ChrCustomizationVoiceID
*- no description -*
&nbsp;

### AnimKitID
*- no description -*
&nbsp;

### ParticleColorID
*- no description -*
&nbsp;

### ChrCustGeoComponentLinkID
*- no description -*
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

