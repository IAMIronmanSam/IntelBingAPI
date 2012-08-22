(function () {
    "use strict";

    //var app = WinJS.Application;
    //var activation = Windows.ApplicationModel.Activation;
    var nav = WinJS.Navigation;
    WinJS.strictProcessing();
    Microsoft.Maps.loadModule('Microsoft.Maps.Map', { callback: initMap });
    function initMap() {
        var map;

        var mapOptions =
        {
            credentials: "AoUv-FMpF-A_zutBXGaP2Eh_GmpST6K5hyxByrOoY9uSPNY5TLT5dINTJbzyWCnk",
            height: 800,
            width: 1276,
            zoom: 14,
            mapTypeId: Microsoft.Maps.MapTypeId.road,
            showMapTypeSelector: false
        };

        map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), mapOptions);
        // Initialize the location provider
        var geoLocationProvider = new Microsoft.Maps.GeoLocationProvider(map);

        // Get the user's current location
       // geoLocationProvider.getCurrentPosition();

        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log(latitude);
            console.log(longitude);
            // document.write(latitude);
            var md = new Windows.UI.Popups.MessageDialog("Your Current  Latitude:" + latitude + " Longitude: " + longitude);
            md.showAsync();

            var location = new Microsoft.Maps.Location(latitude, longitude);
            var pushpin = new Microsoft.Maps.Pushpin(location);
            map.entities.push(pushpin);
            map.setView({ center: new Microsoft.Maps.Location(latitude, longitude) });
        })



    }


    //app.addEventListener("activated", function (args) {
    //    if (args.detail.kind === activation.ActivationKind.launch) {
    //        if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
    //            // TODO: This application has been newly launched. Initialize
    //            // your application here.
    //        } else {
    //            // TODO: This application has been reactivated from suspension.
    //            // Restore application state here.
    //        }

    //        if (app.sessionState.history) {
    //            nav.history = app.sessionState.history;
    //        }
    //        args.setPromise(WinJS.UI.processAll().then(function () {
    //            if (nav.location) {
    //                nav.history.current.initialPlaceholder = true;
    //                return nav.navigate(nav.location, nav.state);
    //            } else {
    //                return nav.navigate(Application.navigator.input);
    //            }
    //        }));
    //    }
    //});

    
    WinJS.UI.Pages.define("/Pages/Locate.html", {
        ready: function (element, options) {
            document.getElementById("Gointo").addEventListener("click", navil, false);
        }
    });

     

    function navil() {
        console.log("Able to Navogate");
        nav.navigate('/Pages/input.html');
        console.log("k k");

    }

})();
