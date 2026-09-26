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
  le._apps["code"] = {
    categories: "Development;TextEditor",
    name: "CodeMirror",
    type: "Editors",
    icon: "apps/codemirror.png",
    //mimetype: /text\/.+|.*xml.*/,
    //ext: ['html','htm','php','txt','md','nfo','diz','css','js','json','svg','xml','rss'],
    accept:
      "text/*,.txt,.js,.json,.html,.htm,.css,.md,.nfo,.php,.diz,.svg,.xml,.rss,.lnk42",
    exec: function(url, opt) {
      if (!opt) {
        opt = url;
        url = "";
      }

      var self = this;
      var cfg = $extend({}, opt);

      if (cfg.url) delete cfg.url;

      $loader(
        [
          "/c/libs/codemirror/lib/codemirror.js",
          "/c/libs/codemirror/keymap/sublime.js",
          "/c/libs/codemirror/mode/css/css.js",
          "/c/libs/codemirror/mode/javascript/javascript.js",
          "/c/libs/codemirror/addon/selection/active-line.js",
          //,'/c/libs/codemirror/mode/markdown/markdown.js'
          "/c/libs/codemirror/mode/xml/xml.js",
          "/c/libs/codemirror/lib/codemirror.css",
          "/c/libs/codemirror/theme/monokai.css",
        ],
        function(_) {
          // console.log(CodeMirror)

          var pos_line = 0;
          var pos_char = 0;
          var filePath = url
            ? url.replace(/:(\d+)(?::(\d+))?$/, function(_, l, c) {
                pos_line = l || 0;
                pos_char = c || 0;
                return "";
              })
            : "";

          var instructions = "<strong>Keymap</strong><br><br><table>";
          $io.obj.all(CodeMirror.keyMap.sublime, function(val, key) {
            if (key === "fallthrough") return;
            var text = val.replace(/[A-Z]/g, function(_) {
              return " " + _.toLowerCase();
            });
            text = text.charAt(0).toUpperCase() + text.slice(1);
            instructions +=
              "<tr><td>" + text + "</td><td> : " + key + "</td></tr>";
          });
          instructions += "</table>";

          var codMi;
          $editor.call(self, {
            type: "String",
            filePath: filePath,
            help: {
              instructions: instructions,
              about: {
                msg:
                  '<b>CodeMirror</b> is a versatile text editor implemented in JavaScript for the browser.<br><b>Copyright (C) 2015 by Marijn Haverbeke</b><br>MIT license<br><a href="https://web.archive.org/web/20250904023202/http://codemirror.net" target="_blank">codemirror.net</a>',
                img: "/c/libs/codemirror/doc/logo.png",
              },
            },
            create: function(el) {
              codMi = CodeMirror(el, {
                theme: "monokai",
                mode: "text/x-markdown",
                lineWrapping: true,
                lineNumbers: true,
                indentUnit: 2,
                keyMap: "sublime",
                styleActiveLine: true,
              });

              $el(codMi).click();
              codMi.focus();

              function fixCustomFont() {
                // lots of miscalculations because of custom font-face
                // so... lots of refresh :(
                /////////////////////////////////////////////////////////////////////////////
                setTimeout(function() {
                  codMi.refresh();
                }, 1);
                setTimeout(function() {
                  codMi.refresh();
                }, 10);
                setTimeout(function() {
                  codMi.refresh();
                }, 100);
                setTimeout(function() {
                  codMi.refresh();
                }, 500);
                setTimeout(function() {
                  codMi.refresh();
                }, 1000);
                setTimeout(function() {
                  codMi.refresh();
                }, 1500);
              }

              return {
                readFile: function(val) {
                  var mime = this.mime;
                  filePath = this.path;
                  var ext = this.ext;
                  if (ext == "xml" || ext == "rss") mime = "xml";
                  if (/json/.test(mime)) mime = "application/json";

                  codMi.setOption("mode", mime);
                  codMi.setValue(
                    typeof val == "string" ? val : JSON.stringify(val)
                  );

                  fixCustomFont();
                  /////////////////////////////////////////////////////////////////////////////

                  //http://djadmin.github.io/addon/search/goto-line.js
                  codMi.setCursor({ line: pos_line - 1, ch: pos_char - 1 });
                  var myHeight = codMi.getScrollInfo().clientHeight;
                  var coords = codMi.charCoords(
                    { line: pos_line - 1, ch: pos_char - 1 },
                    "local"
                  );
                  codMi.scrollTo(
                    null,
                    (coords.top + coords.bottom - myHeight) / 2
                  );
                  setTimeout(function() {
                    codMi.focus();
                  }, 100);
                },
                setValue: function(val) {
                  codMi.setValue(val);
                  fixCustomFont();
                },
                getValue: function(cb) {
                  cb(codMi.getValue());
                },
              };
            },
            window: $extend(
              {
                height: 345,
                width: 435,
                bodyClass: "ui_texteditor skin_inset_deep",
                onresize: function() {
                  codMi.refresh();
                },
              },
              cfg
            ),
          });
        }
      );
    },
  };
});

}

/*
     FILE ARCHIVED ON 02:32:02 Sep 04, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:19:20 Sep 26, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.419
  load_resource: 130.12
  PetaboxLoader3.resolve: 89.881
  PetaboxLoader3.datanode: 12.659
*/