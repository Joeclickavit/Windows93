var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
system42("start", function(le) {
  "use strict";

  function menuFromFileTree(obj, path) {
    var files = [];
    var dirs = [];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop) && prop !== "." && prop !== "..") {
        if (typeof obj[prop] == "number") {
          var nfo = $fs.utils.getInfo(prop);
          var openers = $fs.utils.getOpeners(prop);
          files.push({
            name: prop,
            icon: nfo.icon,
            action: (function(obj, nfo, openers) {
              return function() {
                $exe(openers[0] + " " + path + obj);
              };
            })(prop, nfo, openers),
          });
        } else if ($io.is.obj(obj[prop]) || $io.is.arr(obj[prop])) {
          dirs.push({
            name: prop,
            icon: "/c/sys/skins/" + le._settings.skin + "/places/16/folder.png",
            items: (function(obj, path) {
              return function() {
                return menuFromFileTree(obj, path);
              };
            })(obj[prop], path + prop + "/"),
          });
        }
      }
    }
    return dirs.sort().concat(files.sort());
  }

  function menuFromAppsAtlas(obj) {
    var commands = [];
    var openers = [];

    var keys = Object.keys(obj);
    $io.arr.all(keys.sort(), function(prop) {
      if (obj[prop] && obj[prop].exec) {
        var name = obj[prop].name
          ? prop + ' <em class="startmenu_cmd">(' + obj[prop].name + ")</em>"
          : prop;
        var icon =
          obj[prop].icon ||
          "/c/sys/skins/" + le._settings.skin + "/programs.png";
        if (icon.indexOf("/") !== 0)
          icon = "/c/sys/skins/" + le._settings.skin + "/" + icon;
        (obj[prop].cmd ? commands : openers).push({
          name: name,
          icon: icon,
          action: (function(prop) {
            return function() {
              $exe(prop);
            };
          })(prop),
        });
      }
    });
    return openers;
  }

  var actions = {
    find: function() {
      $alert(
        "<b>Did you know ?</b><br>You can use Find to locate your real father.<br>But I will save you the trouble.<br><b>Windows 93 is your real father.</b>"
      );
    },
    help: function() {
      // $exe("clippy");
      $window({
        title: "Help",
        url: "//web.archive.org/web/20250904023201/https://www.windows93.net/wiki/93.php?Home",
        width: 800,
        height: 600
      });
    },
    run: function() {
      $alert.error("There is nowhere you can run");
    },
    reboot: function() {
      $exe("reboot");
    },
    settings: function() {
      //$alert('coming soon...')
      $window({
        title: "Settings",
        html: $form.build(le._settings).el,
        width: 400,
        btnOk: "OK",
        btnCancel: "Cancel",
      });
    },
    format: function() {
      $exe("format");
    },
    fullscreen: function() {
      $fullscreen();
    },
    shutdown: function() {
      $exe("shutdown");
    },
  };
  var startmenu = [
    {
      name: "Programs",
      icon: "/c/sys/skins/" + le._settings.skin + "/programs.png",
      items: function() {
        return menuFromAppsAtlas(le._apps);
      },
    },
    {
      name: "Documents",
      icon: "/c/sys/skins/" + le._settings.skin + "/documents.png",
      items: function() {
        return menuFromFileTree(le._files.c, "c/");
      },
    },
    //{name: 'Settings', icon: '/c/sys/skins/'+le._settings.skin+'/settings.png', action: actions.settings},
    {
      name: "Fullscreen",
      icon: "/c/sys/skins/" + le._settings.skin + "/shutdown.png",
      action: actions.fullscreen,
    },
    {
      name: "Find",
      icon: "/c/sys/skins/" + le._settings.skin + "/find.png",
      action: actions.find,
    },
    {
      name: "Help",
      icon: "/c/sys/skins/" + le._settings.skin + "/help.png",
      action: actions.help,
    },
    {
      name: "Run...",
      icon: "/c/sys/skins/" + le._settings.skin + "/run.png",
      action: actions.run,
    },
    { name: "---" },
    {
      name: "Reinstall",
      icon: "/c/sys/skins/" + le._settings.skin + "/install.png",
      action: actions.format,
    },
    { name: "---" },
    {
      name: "Reboot...",
      icon: "/c/sys/skins/" + le._settings.skin + "/shutdown.png",
      action: actions.reboot,
    },
    {
      name: "Shutdown",
      icon: "/c/sys/skins/" + le._settings.skin + "/shutdown.png",
      action: actions.shutdown,
    },
  ];

  $menu(document.getElementById("s42_start"), startmenu, {
    /*key: 'super', */ mode: "popup",
    position: { within: le._dom.desktop },
  });

  // clock
  /////////////////////////////////////////////////////////////////////////////////
  !(function() {
    "use strict";
    var clock = le._dom.clock;
    var time;
    if (!clock) return;
    (function updateClock() {
      var d = new Date(),
        h = d.getHours(),
        m = d.getMinutes();
      h = (h < 10 ? "0" : "") + h;
      m = (m < 10 ? "0" : "") + m;
      var temp = h + ":" + m;
      if (time !== temp) {
        time = h + ":" + m;
        clock.textContent = time;
        clock.title = d;
      }
      setTimeout(updateClock, 10000);
    })();
  })();
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
  capture_cache.get: 2.714
  load_resource: 172.532
  PetaboxLoader3.resolve: 50.156
  PetaboxLoader3.datanode: 121.621
*/