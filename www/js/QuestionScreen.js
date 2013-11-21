/*
 * JS for QuestionScreen generated by Appery.io
 *
 */

Appery.getProjectGUID = function() {
    return '306d4a33-c76e-4ea2-a89f-407d73a1d24f';
}

function navigateTo(outcome, useAjax) {
    Appery.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Appery.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Appery.adjustContentHeightWithPadding();
}

function setDetailContent(pageUrl) {
    Appery.setDetailContent(pageUrl);
}

Appery.AppPages = [{
    "name": "QuestionScreen",
    "location": "QuestionScreen.html"
}];

QuestionScreen_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'lblQuestion': 'QuestionScreen_lblQuestion',
        'mobilelist_3': 'QuestionScreen_mobilelist_3',
        'mobilelistitem_4': 'QuestionScreen_mobilelistitem_4',
        'mobilelistitembutton_5': 'QuestionScreen_mobilelistitembutton_5',
        'btnAnswer': 'QuestionScreen_btnAnswer'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fixing issue https://github.com/jquery/jquery-mobile/issues/5424 on Windows Phone
        $("div[data-role=page] div[data-role=footer]").css("bottom", "-36px");
    }

    if (Appery.getTargetPlatform == "I") {
        $.each(window.n2id, function(name, id) {
            var elApperyRole = $("#" + id).attr("data-role");
            if (elApperyRole != "appery_label" && elApperyRole != "appery_link") {
                var appleDataSelector = "#" + id + "[x-apple-data-detectors], #" + id + " [x-apple-data-detectors]";
                $(appleDataSelector).attr("x-apple-data-detectors", "false");
            }
        });
    }

    Appery.CurrentScreen = 'QuestionScreen';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    QuestionScreen_beforeshow = function() {
        Appery.CurrentScreen = "QuestionScreen";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_3671_onLoad = QuestionScreen_onLoad = function() {
        screen_3671_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        QuestionScreen_deviceEvents();
        QuestionScreen_windowEvents();
        screen_3671_elementsEvents();
    }

    // screen window events
    screen_3671_windowEvents = QuestionScreen_windowEvents = function() {

        $('#QuestionScreen').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });

    }

    // device events
    QuestionScreen_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_3671_elementsExtraJS = QuestionScreen_elementsExtraJS = function() {
        // screen (QuestionScreen) extra code

        /* mobilelist_3 */

        listView = $("#QuestionScreen_mobilelist_3");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#QuestionScreen_mobilelist_3 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_4 */

    }

    // screen elements handler
    screen_3671_elementsEvents = QuestionScreen_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

    }

    $("#QuestionScreen").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        QuestionScreen_beforeshow();
    });

    if (runBeforeShow) {
        QuestionScreen_beforeshow();
    } else {
        QuestionScreen_onLoad();
    }

}

$("#QuestionScreen").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    QuestionScreen_js();
});