(function () {
    "use strict";
    
    //var app = WinJS.Application;
    //var activation = Windows.ApplicationModel.Activation;
  var nav = WinJS.Navigation;
    //WinJS.strictProcessing();

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
    //                return nav.navigate(Application.navigator.search);
    //            }
    //        }));
    //    }
    //});

  
    WinJS.UI.Pages.define("/Pages/input.html", {
        ready: function (element, options) {
            document.getElementById("input").addEventListener("click", navi, false);
        }
    });



    function navi() {
        console.log("Able to Navogate");
        nav.navigate('/Pages/Search.html');
        console.log("k k");

    }

})();
