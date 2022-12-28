---
title: SOAP with TrinityCore
description: How to interact with TC using SOAP 
published: true
date: 2022-12-28T23:21:05.490Z
tags: 
editor: markdown
dateCreated: 2022-12-28T22:20:35.183Z
---

# How to interact with TC using SOAP 
SOAP stands for Simple Object Access Protocol, and is an older form of standards-based web services acess protocol similar to REST. You can leverage SOAP to send commands to a TrinityCore server, as long as the necessary configurations are in place.

**Note**: At the time of writing, TC 335a only supports HTTP, so take care not to send secrets (passwords, etc) in this manner. Assume that anything passed is in clear-text and could be read by anyone. 

If you plan to connect via SOAP remotely, you should absolutely take steps to ensure secure connections. One potential way is through a [reverse SSL proxy](https://www.digitalocean.com/community/tutorials/how-to-configure-nginx-with-ssl-as-a-reverse-proxy-for-jenkins) (a guide for Jenkins, but could be adapted to work for TC), which is outside the scope of this guide.


# Configuration

### worldserver.conf

Ensure the settings in your configuration file are set appropriately. 

```ini
#
#    SOAP.Enable
#        Description: Enable soap service.
#        Default:     0 - (Disabled)
#                     1 - (Enabled)

SOAP.Enabled = 1

#
#    SOAP.IP
#        Description: Bind SOAP service to IP/hostname.
#        Default:     "127.0.0.1" - (Bind to localhost)

SOAP.IP = "127.0.0.1"

#
#    SOAP.Port
#        Description: TCP port to reach the SOAP service.
#        Default:     7878

SOAP.Port = 7878
```

You will also need a user account with permission to use GM commands, taking into consideration your specific RBAC access configurations. It's probably a good idea to create a limited access account specifically for this purpose, rather than an account used by a person.

# Sending commands to the server

It may be helpful to understand the differences between REST and SOAP. The following article does a decent job of breaking this comparison down - https://smartbear.com/blog/soap-vs-rest-whats-the-difference/. 

The primary difference between REST and SOAP is that SOAP relies exclusively on XML to provide responses and accept payloads. PHP offers a few ways to make this process easier, but depending on your usage, you may need to get familiar with XML. A few approaches have been provided below.

## HTTP clients for prototyping

There are a few clients out there to rapidly set up access:

- Postman - https://www.postman.com/ (web and desktop clients)
- Insomnia - https://insomnia.rest/
- Nightingale - https://nightingale.rest/

All of them offer various niceties, but ultimately work much the same. Credits to Jackpoz for providing steps specific to Postman. We'll be using the desktop client so we don't have to worry about connecting remotely.

- https://www.postman.com/downloads/ (available for Windows, Mac, Linux)

1. Under **My Workspace**, find the **Import** button. You'll use the Raw text option.
2. Copy and paste the following JSON into the textbox. Be sure to update the credentials under `item.request.auth.basic` to the GM user mentioned before.

```json
{
  "info": {
    "_postman_id": "d046fd28-e3d1-4604-a184-ce0908927991",
    "name": "TC SOAP",
    "schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json"
  },
  "item": [
    {
      "name": "server info",
      "id": "cc5f57e1-a097-4b8f-aaea-c96ae84c1793",
      "request": {
        "auth": {
          "type": "basic",
          "basic": {
            "username": "CHANGEME",
            "password": "CHANGEME",
            "showPassword": false
          }
        },
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ns1=\"urn:TC\" xmlns:xsd=\"http://www.w3.org/1999/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:SOAP-ENC=\"http://schemas.xmlsoap.org/soap/encoding/\" SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\">\r\n    <SOAP-ENV:Body>\r\n        <ns1:executeCommand>\r\n            <command>server info</command>\r\n        </ns1:executeCommand>\r\n    </SOAP-ENV:Body>\r\n</SOAP-ENV:Envelope>",
          "options": {
            "raw": {
              "language": "xml"
            }
          }
        },
        "url": "http://127.0.0.1:7878"
      },
      "response": []
    }
  ]
}
```

3. You should see `TC SOAP` as a collection to be imported. Click **Import**.
4. This will populate a new collection with the correct HTTP method (POST), as well as details under the **Authorization** and **Body** tabs. 
5. Under the Body tab, note the XML payload, and the `server info` command pre-populated for you.

Clicking the **Send** button will submit the request, and provide an XML response.

On the right-hand side of the Postman interface, a `</>` symbol will open up code snippets, which can convert the request into the language of your choice. 


## Using PHP

A number of resources are available if you're working in PHP.
  
  
  