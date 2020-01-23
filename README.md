# request-listener

Request Listener for Analytic tracking test using express, socket.io

## Usage

### Install using

```bash
yarn install
```

### Run the server

```bash
yarn start
```

### Open web browser to <http://localhost:3002>

Create a tracker function to send a POST http request

```javascript
var _testTracker = {
    track: function (data) {
        fetch('http://localhost:3002', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}
```

where ```data``` is JSON object that will show up on the listener.

## License

MIT
