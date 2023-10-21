---
title: gameobject_template_addon
description: 
published: true
date: 2023-04-02T00:09:28.383Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:31:59.104Z
---

<a href="https://trinitycore.info/en/database/master/world/gameobject_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gameobject_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/gameobject_template_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject_template_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [entry](#entry) | int | unsigned | PRI | NO | 0 |  |  |
| [faction](#faction) | smallint | unsigned |  | NO | 0 |  |  |
| [flags](#flags) | int | unsigned |  | NO | 0 |  |  |
| [mingold](#mingold) | int | unsigned |  | NO | 0 |  |  |
| [maxgold](#maxgold) | int | unsigned |  | NO | 0 |  |  |
| [artkit0](#artkit0) | int | signed |  | NO | 0 |  |  |
| [artkit1](#artkit1) | int | signed |  | NO | 0 |  |  |
| [artkit2](#artkit2) | int | signed |  | NO | 0 |  |  |
| [artkit3](#artkit3) | int | signed |  | NO | 0 |  |  |
| [artkit4](#artkit4) | int | signed |  | NO | 0 |  |  |
| [WorldEffectID](#worldeffectid) | int | unsigned |  | NO | 0 |  |  |
| [AIAnimKitID](#aianimkitid) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### entry
Entry of the gameobject, see [`gameobject_template.entry`](/database/master/world/gameobject_template#entry)
&nbsp;

### faction
Faction of the gameobject, referencing [Faction.db2](https://wow.tools/dbc/?dbc=Faction){target=blank}
&nbsp;

### flags
| Flag | Name | Description |
| ---- | ---- | ----------- |
| 0x00000001 | GO_FLAG_IN_USE | Gameobject in use - Disables interaction while being animated |
| 0x00000002 | GO_FLAG_LOCKED | Makes the Gameobject Locked. Requires a key, spell, or event to be opened. "Locked" appears in tooltip |
| 0x00000004 | GO_FLAG_INTERACT_COND | Untargetable, cannot interact |
| 0x00000008 | GO_FLAG_TRANSPORT | Gameobject can transport (boat, elevator, car) |
| 0x00000010 | GO_FLAG_NOT_SELECTABLE | Not selectable (Not even in GM-mode) |
| 0x00000020 | GO_FLAG_NODESPAWN | Never despawns. Typical for gameobjects with on/off state (doors for example) |
| 0x00000040 | GO_FLAG_TRIGGERED | typically, summoned objects. Triggered by spell or other events |
| 0x00000200 | GO_FLAG_DAMAGED | Gameobject has been siege damaged |
| 0x00000400 | GO_FLAG_DESTROYED | Gameobject has been destroyed |
&nbsp;

### mingold
Minimum money, in copper, that the gameobject can drop when accessed / used.
&nbsp;

### maxgold
Maximum money, in copper, that the gameobject can drop when accessed / used.
&nbsp;

### artkit\[0-4]
[GameObjectArtKit ID](https://wow.tools/dbc/?dbc=gameobjectartkit)
Updates display if object is activated by SPELL_EFFCT_ACTIVATE_OBJECT with MiscValue 19 - 22.
&nbsp;

### WorldEffectID
*- no description -*
&nbsp;

### AIAnimKitID
*- no description -*
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/gameobject_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'gameobject_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/master/world/gameobject_template_locale" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'gameobject_template_locale'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

