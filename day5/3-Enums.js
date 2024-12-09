var Status;
(function (Status) {
    Status[Status["Connected"] = 1] = "Connected";
    Status[Status["Fail"] = 0] = "Fail";
    Status[Status["Connecting"] = -1] = "Connecting";
})(Status || (Status = {}));
var wifiStatus = Status.Connecting;
console.log('wifiStatus :>> ', wifiStatus);
