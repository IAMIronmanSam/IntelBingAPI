// For an introduction to the Blank template, see the following documentation: 
// http://go.microsoft.com/fwlink/?LinkId=232509 
(function () {
    var app = WinJS.Application;
    // This function responds to all application activations. 
    app.onactivated = function (eventObject) {
        if (eventObject.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
            WinJS.UI.processAll();
        }
    };
    app.start();
    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    WinJS.strictProcessing();
    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize 
                // your application here. 
            } else {
                // TODO: This application has been reactivated from suspension. 
                // Restore application state here. 
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };
    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state 
        // that needs to persist across suspensions here. You might use the 
        // WinJS.Application.sessionState object, which is automatically 
        // saved and restored across suspension. If you need to complete an 
        // asynchronous operation before your application is suspended, call 
        // args.setPromise(). 
    };
    app.start();
    //Bing API Starts Here
    var geolocator = null;
    function getcurloc() {
        if (geolocator == null) {
            geolocator = new Windows.Devices.Geolocation.Geolocator();
            
        }
        if (geolocator != null) {
            geolocator.getGeopositionAsync().then(getCurPosHandler, errHandler);
        }
    }
    function getCurPosHandler(pos) {
        map.setView({ center: new Microsoft.Maps.Location(pos.coordinate.latitude, pos.coordinate.longitude), mapTypeId: Microsoft.Maps.MapTypeId.road, zoom: 16.0 });
        var pin = new Microsoft.Maps.Pushpin(pos.coordinate);
        
        map.entities.push(pin);
    }
    function errHandler(e) {
        //handle errors here 
    }
    function init() {
        Microsoft.Maps.loadModule('Microsoft.Maps.Map', { callback: initMap });
        getcurloc();
    }
    document.addEventListener("DOMContentLoaded", init, false);
})();
var map;
function initMap() {
    try {
        var mapOptions =
        {
            credentials: 'AoUv-FMpF-A_zutBXGaP2Eh_GmpST6K5hyxByrOoY9uSPNY5TLT5dINTJbzyWCnk',
            center: new Microsoft.Maps.Location(37.38826, -121.962502),
            mapTypeId: Microsoft.Maps.MapTypeId.road,
            zoom: 12
        };
        map = new Microsoft.Maps.Map(document.getElementById("mapdiv"), mapOptions);
        //console.log(JSON.stringify(map));
    }
    catch (e) {
        var md = new Windows.UI.Popups.MessageDialog(e.message);
        md.showAsync();
    }
}
