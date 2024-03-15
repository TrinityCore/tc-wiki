---
title: Monitoring a TrinityCore server
description: 
published: true
date: 2024-03-15T00:50:45.568Z
tags: 
editor: markdown
dateCreated: 2024-03-15T00:50:45.568Z
---

## Required Software
Statistic and metric logging in TrinityCore is implemented using two projects, InfluxDB, a time-series data storage and Grafana, graph and a dashboard builder for visualizing time series metrics.

### Installing InfluxDB
1. Download and install InfluxDB 1.x from https://influxdata.com/downloads/#influxdb for your platform. InfluxDB 2.x is not currently supported.
1. Start InfluxDB
1. Create a user and a database in InfluxDB using the Influx CLI and executing the commands below
```
CREATE DATABASE worldserver
CREATE USER grafana WITH PASSWORD 'grafana'
GRANT READ ON worldserver TO grafana
```
4. Edit the default retention policy to ensure the InfluxDB database doesn't grow too much.
```
USE worldserver
SHOW RETENTION POLICIES
```
Refer to https://docs.influxdata.com/influxdb/v1.8/query_language/manage-database/ on how to manage retention policies.

### Installing Grafana
1. Download and install Grafana from http://docs.grafana.org/installation/
1. Open the dashboard at http://localhost:3000
1. Login with username admin and password admin (defaults can be changed in Grafana's .ini files)
1. Go to Data Sources → + Add Data Source
1. Name: Influx
1. Type: InfluxDB
1. Url: http://localhost:8086
1. Access: Server
1. Database: worldserver User: grafana Password: grafana
1. Click on the + sign in the menu on the left called "Create" and select "Dashboard", then import each .json file in TrinityCore's /contrib/grafana clicking on "Upload JSON file"

### Configuring TrinityCore
1. Edit the worldserver.conf file
1. Set Metric.Enable = 1
1. Edit Metric.ConnectionInfo with connection details (e.g "127.0.0.1;8086;worldserver")
1. Start worldserver, the dashboard should now start receiving values

### Implemented (tic) and planned (error) metrics
- Technical oriented
- I/O networking traffic:
- Packets sent (error)
- Packets received (tic)
- Average ping (error)
- Traffic in (error)
- Traffic out (error)
- World session update time (tic)
- Map update time (tic)
- Map loads/unloads (tic)
- MMap queries (tic)
- Database async queries queued count (tic)
- Server uptime (tic) (through world initialize and world shutdown events)
- Active connections (error)
- Queued connections (error)
### Game oriented
- Players online (tic)
- Logins per hour, per day, day of week, etc (tic)
- Mails sent (error)
- Auction house usage (error)
- Character levels (error)
- Gold earn/spend (error)
- LFG queues (error)



