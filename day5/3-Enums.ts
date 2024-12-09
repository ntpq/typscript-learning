enum Status{
    Connected = 1,
    Fail = 0,
    Connecting = -1,
}
const wifiStatus:Status = Status.Connecting
console.log('wifiStatus :>> ', wifiStatus);