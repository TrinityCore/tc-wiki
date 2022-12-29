---
title: SOAP with TrinityCore
description: How to interact with TC using SOAP 
published: true
date: 2022-12-29T02:09:06.361Z
tags: 
editor: markdown
dateCreated: 2022-12-28T22:20:35.183Z
---

# How to interact with TC using SOAP 
SOAP stands for Simple Object Access Protocol, and is an older form of standards-based web services access protocol similar to REST. You can leverage SOAP to send commands to a TrinityCore server, as long as the necessary configurations are in place.

**Note**: At the time of writing, TC 335a only supports HTTP, so take care not to send secrets (passwords, etc) in this manner. Assume that anything passed is in clear-text and could be read by anyone. 

If you plan to connect via SOAP remotely, you should absolutely take steps to ensure secure connections. One potential way is through a [reverse SSL proxy](https://www.digitalocean.com/community/tutorials/how-to-configure-nginx-with-ssl-as-a-reverse-proxy-for-jenkins) (a guide for Jenkins, but could be adapted to work for TC), which is outside the scope of this guide.


# Configuration

### worldserver.conf

Ensure the settings in your configuration file are set appropriately. 

```ini
#    SOAP.Enable
#        Description: Enable soap service.
#        Default:     0 - (Disabled)
#                     1 - (Enabled)

SOAP.Enabled = 1

#    SOAP.IP
#        Description: Bind SOAP service to IP/hostname.
#        Default:     "127.0.0.1" - (Bind to localhost)

SOAP.IP = "127.0.0.1"

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

There are a few clients out there to rapidly set up a connection and test out console commands:

- Postman - https://www.postman.com/ (web, desktop agent/client)
- Insomnia - https://insomnia.rest/
- Nightingale - https://nightingale.rest/

All of them offer various niceties, but ultimately work much the same. Credits to Jackpoz for providing steps specific to Postman - https://www.postman.com/.

Postman comes in two flavors: the [web interface](https://web.postman.co/) (and an [agent you can install](https://www.postman.com/downloads/postman-agent/) to do localhost requests) and the fully client-side [desktop application](https://www.postman.com/downloads/). The instructions are the same in both cases.

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
          "raw": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ns1=\"urn:TC\">\r\n    <SOAP-ENV:Body>\r\n        <ns1:executeCommand>\r\n            <command>server info</command>\r\n        </ns1:executeCommand>\r\n    </SOAP-ENV:Body>\r\n</SOAP-ENV:Envelope>",
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

To interact with TrinityCore using PHP, you will need to ensure that the php-soap extension is installed. Also ensure you are using a version of PHP that is [still actively being supported](https://www.php.net/supported-versions.php). Code examples were tested on PHP7.4 up to PHP 8.1.

In all of these examples, the `urn:TC` URI is a **required parameter** because we are not providing a WSDL document.

- SoapClient - https://www.php.net/manual/en/class.soapclient.php

```php
$command  = 'server info';

$opts = [
    'http' => [
        'header' => "Authorization: Basic " . base64_encode("USERNAME:PASSWORD")
    ]];

$client = new SoapClient($wsdl = null, [
    'stream_context' => stream_context_create($opts),
    'location' => 'http://127.0.0.1:7878',
    'uri' => 'urn:TC',
]);

try {
    $result = $client->executeCommand(new SoapParam($command, 'command'));
} catch (\Exception $e) {
    die($e->getMessage());
}

echo $result;



```

Note that we are passing a HTTP basic authorization header with base64 encoded username and password (separated by a colon). Alternatively, you could omit the `stream_context` parameter, and instead include a (login) username and password in your SoapClient configuration.

```php
$command  = 'server info';

$client = new SoapClient($wsdl = null, [
    'location' => 'http://127.0.0.1:7878',
    'uri' => 'urn:TC',
    'login' => 'USERNAME',
    'password' => 'PASSWORD',
]);

try {
    $result = $client->executeCommand(new SoapParam($command, 'command'));
} catch (Exception $e) {
    die($e->getMessage());
}

echo $result;
```

Either approach is fine - but don't be fooled! Base 64 encoding does not inherently make it more secure.

Remember that the SOAP client can only recognize failures to connect, or misconfigurations. **It will not know if you've provided an invalid command**. So it's up to you to parse the results and decide if the intended result was a success or not. Output will be just as if you performed the command on the console.

Lastly, if you'd rather not rely on the SOAP extension or client, you can form the XML payload and parse the resulting XML response yourself.

```xml
<?xml version="1.0" encoding="utf-8"?>
<SOAP-ENV:Envelope 
	xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" 
	xmlns:ns1="urn:TC">
    <SOAP-ENV:Body>
        <ns1:executeCommand>
            <command>server info</command>
        </ns1:executeCommand>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```


```php
$curl = curl_init();

curl_setopt_array($curl, [
    CURLOPT_POSTFIELDS => $payload, // $payload is the XML provided above
    CURLOPT_URL => 'http://127.0.0.1:7878',
    CURLOPT_TIMEOUT => 0,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_HTTPHEADER => [
        "Authorization: Basic " . base64_encode("{$user}:{$pass}"),
        'Content-Type: application/xml',
    ],
]);

$response = curl_exec($curl);
curl_close($curl);
echo $response;
```


  