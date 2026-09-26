var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
system42.on("apps:ready", function(le) {
  "use strict";

  le._apps["clippy"] = {
    categories: "Amusement",
    name: "clippy",
    icon: "/c/sys/skins/w93/help.png",
    exec: function(url, opt) {
      $loader(
        [
          "/c/libs/jquery.min.js",
          "/c/libs/clippy/build/clippy.css",
          "/c/libs/clippy/build/clippy.min.js",
        ],
        function() {
          var trucs = [
            "Bonzi",
            "Clippy",
            "F1",
            "Genie",
            "Links",
            "Merlin",
            "Peedy",
            "Rocky",
            "Rover",
          ];

          var truc = $io.arr.random(trucs);

          clippy.load("Clippy", function(agent) {
            agent.show();
            agent.speak(
              "Hi. My name is Clippy. I'm just going to hang out here for a while."
            );
          });
        },
        { amd: false }
      );
    },
  };

  le._apps["lisa"] = {
    categories: "Amusement",
    exec: function() {
      var that = this;
      var image = new Image();
      image.src = "/c/files/images/gif/lisa.gif";
      image.className = "ui_layout_center app_imageviewer__img";
      image.onload = load;
      image.onerror = load;
      image.onabort = load;
      function load() {
        $window.call(that, {
          title: "Virtal Girl",
          header: false,
          resizable: false,
          draggable: false,
          contextmenuOnBody: true,
          baseClass: "ui_desktop_layer app_lisa",
          baseHeight: image.height,
          baseWidth: image.width,
          html: image,
          onopen: function(win) {
            setTimeout(function() {
              win.style.top = "auto";
              win.style.left = "auto";
              win.style.right = "0px";
              win.style.bottom = "-4px";
            }, 0);
          },
        });
      }
    },
  };

  le._apps["vega"] = {
    categories: "Amusement",
    exec: function() {
      var that = this;
      var image = new Image();
      image.src = "/c/files/images/gif/confused_travolta.gif";
      image.className = "ui_layout_center app_imageviewer__img";
      image.onload = load;
      image.onerror = load;
      image.onabort = load;
      function load() {
        $window.call(that, {
          title: "Confused?!",
          header: false,
          resizable: false,
          draggable: false,
          maximizable: false,
          minimizable: false,
          contextmenuOnBody: true,
          maximised: true,
          baseClass: "ui_desktop_layer app_lisa",
          baseHeight: image.height,
          baseWidth: image.width,
          html: image,
          onopen: function(win) {
            setTimeout(function() {
              win.style.top = "auto";
              win.style.left = "auto";
              win.style.right = "0px";
              win.style.bottom = "-4px";
            }, 0);
          },
        });
      }
    },
  };
});

}

/*
     FILE ARCHIVED ON 02:32:01 Sep 04, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:19:19 Sep 26, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.357
  load_resource: 113.702
  PetaboxLoader3.resolve: 72.032
  PetaboxLoader3.datanode: 32.013
*/