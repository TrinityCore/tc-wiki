---
title: battleground_template
description:
published: true
date: 2023-07-07T20:47:37.548Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:02:57.139Z
---

<a href="https://trinitycore.info/en/database/335/world/battlefield_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'battlefield_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/battlemaster_entry" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'battlemaster_entry'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>

Contains information about the different battlegrounds, like how many players are needed to start, how many can be inside the same one, and the locations where each side starts.

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ID](#id) | mediumint | unsigned | PRI | NO | 0 |  |  |
| [MinPlayersPerTeam](#minplayersperteam) | smallint | unsigned |  | NO | 0 |  |  |
| [MaxPlayersPerTeam](#maxplayersperteam) | smallint | unsigned |  | NO | 0 |  |  |
| [MinLvl](#minlvl) | tinyint | unsigned |  | NO | 0 |  |  |
| [MaxLvl](#maxlvl) | tinyint | unsigned |  | NO | 0 |  |  |
| [AllianceStartLoc](#alliancestartloc) | mediumint | unsigned |  | NO |  |  |  |
| [AllianceStartO](#alliancestarto) | float |  |  | NO |  |  |  |
| [HordeStartLoc](#hordestartloc) | mediumint | unsigned |  | NO |  |  |  |
| [HordeStartO](#hordestarto) | float |  |  | NO |  |  |  |
| [StartMaxDist](#startmaxdist) | float |  |  | NO | 0 |  |  |
| [Weight](#weight) | tinyint | unsigned |  | NO | 1 |  |  |
| [ScriptName](#scriptname) | char(64) |  |  | NO | '' |  |  |
| [Comment](#comment) | char(32) |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### ID
references [BattlemasterList ID](/files/DBC/335/battlemasterlist#id)

| ID | Type |
|----|------|
| 1 | Alterac Valley |
| 2 | Warsong Gulch |
| 3 | Arathi Basin |
| 4 | Nagrand Arena |
| 5 | Blade's Edge Arena |
| 6 | All Arena |
| 7 | Eye of the Storm |
| 8 | Ruins of Lordaeron |
| 9 | Strand of the Ancients |
| 10 | Dalaran Sewers |
| 11 | The Ring of Valor |
| 30 | Isle of Conquest |
| 32 | Random battleground |
{.dense}

&nbsp;

### MinPlayersPerTeam
Controls the minimum number of players that need to join the battleground on each faction side for the battleground to start. For the battleground to start, all characters (between min and max player values) must be in the same tier. Tiers are set up in ranges of 10 levels except for level 80. So the first tier is 10-19, the next are 20-29, 30-39, 40-49, 50-59, 60-69, 70-79 and finally 80. If characters of different tiers all join the queue, they will join their respective tier's queue and wait for more players of their tier to join the queue.
Characters in different tiers can never join the same battleground.
&nbsp;

### MaxPlayersPerTeam
Controls how many players from each team can join the battleground.
0 = default DBC value
&nbsp;

### MinLvl
The minimum level that players need to be in order to join the battleground.
0 = default DBC value
&nbsp;

### MaxLvl
The maximum level that players can be to enter the battleground.
0 = default DBC value
&nbsp;

### AllianceStartLoc
The [WorldSafeLoc ID](/files/DBC/335/worldsafelocs#id) where the alliance players get teleported to when the battleground first starts.
&nbsp;

### AllianceStartO
The orientation of the alliance players upon teleport into the battleground. North is 0, south is Pi (3.14159).
&nbsp;

### HordeStartLoc
The [WorldSafeLoc ID](/files/DBC/335/worldsafelocs#id) where the horde players get teleported to when the battleground first starts.
&nbsp;

### HordeStartO
The orientation of the horde players upon teleport into the battleground. North is 0, south is Pi (3.14159).
&nbsp;

### StartMaxDist
Maximum distance a player can have to the StartLoc point before the battle starts.
A value of 0 is ignored.
&nbsp;

### Weight
Determines what battleground(s) will be more frequently chosen when using Random Battleground.
For example: If you want AV to be less often chosen, give 2 and for all other give 3.
&nbsp;

### ScriptName
*- no description -*
&nbsp;

### Comment
This field is for any comment you want to make. It is arbitrary text.
&nbsp;

<a href="https://trinitycore.info/en/database/335/world/battlefield_template" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-arrow-left theme--light"></i><span>Back to 'battlefield_template'</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>&nbsp;&nbsp;&nbsp;<a href="https://trinitycore.info/en/database/335/world/battlemaster_entry" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><span>Go to 'battlemaster_entry'</span><i aria-hidden="true" class="v-icon notranslate v-icon--right mdi mdi-arrow-right theme--light"></i></span></a>
