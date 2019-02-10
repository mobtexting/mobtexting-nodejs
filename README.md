# nodejs plugin for mobtexting

This package makes it easy to send [Mobtexting notifications](https://mobtexting.com).

## Installation

You can install the package via npm:

``` bash
npm install -g mobtexting-nodejs
```

## Usage

### Send an SMS

```node
var mobtexting = require('mobtexting-nodejs')

var access_token = 'xxxxxxxxxxxxxxx'

var client = new mobtexting(access_token)

client.send(
        to="1234567890",
        from="MobTxt",
        body="Hello from nodejs!",
        service="P",
        function(result) {
                console.log(result)
        }
);

```

