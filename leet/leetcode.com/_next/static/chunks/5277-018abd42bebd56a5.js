(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5277], {
        77754: function(e, n, r) {
            var t = r(87537),
                i = r(23645)(t);
            i.push([e.id, ".VcE6a{border-radius:5px;box-shadow:0 1px 3px #00000026;position:relative}.VcE6a .prism-player{background-color:#f7f7f7!important;border-radius:5px;height:100%!important;left:0;position:absolute;top:0;width:100%!important}.VcE6a .prism-player>video{border-radius:5px}.VcE6a .prism-player .prism-liveshift-progress .prism-progress-loaded{-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);background:#3232321a}.VcE6a .prism-player .prism-liveshift-progress .prism-progress-played{background-color:#fea115}.VcE6a .prism-player .prism-progress .prism-progress-loaded{-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);background:#3232321a}.VcE6a .prism-player .prism-progress .prism-progress-played{background-color:#fea115}.VcE6a .prism-player .prism-controlbar{z-index:11!important}.VcE6a .prism-player .prism-controlbar .prism-cc-btn{display:none}.VcE6a .prism-player .prism-controlbar .prism-controlbar-bg{-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);background:#000c;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.VcE6a .prism-player .prism-controlbar .prism-volume{margin-right:15px!important;transform:scale(.8)}.VcE6a .prism-player .prism-controlbar .prism-setting-btn{transform:scale(.8)}.VcE6a .prism-player .prism-cover{border-radius:5px;pointer-events:none;z-index:10!important}.VcE6a .prism-player .prism-big-play-btn.pause{border-radius:100%;box-shadow:0 5px 15px #00000026}.VcE6a .prism-player .prism-big-play-btn{z-index:11!important}.VcE6a .prism-player .prism-tooltip{border-radius:10px;box-shadow:0 3px 5px #0003;height:20px;line-height:19px;padding:0 8px}.VcE6a .prism-player .prism-thumbnail img~span{border-radius:10px;box-shadow:0 3px 5px #0003;height:20px;line-height:19px;padding:0 8px}.VcE6a[data-has-size=true] .prism-player{height:100%!important;left:0;position:absolute;top:0;width:100%!important}.VcE6a[data-has-size=false] .prism-player[data-is-ready=true]{display:inline-block;height:auto!important;width:auto!important}.VcE6a[data-has-size=false] .prism-player[data-is-ready=true]>video{display:block;height:auto!important;max-width:100%;position:static!important;transform:none!important;width:auto!important}.dark .VcE6a .prism-player{background-color:#383838!important}", "", {
                version: 3,
                sources: ["webpack://./shared/components/markdown/components/LCAliPlayerVideo/AliPlayerReact.iso.css"],
                names: [],
                mappings: "AAAA,OAGI,iBAAkB,CADlB,8BAAyC,CADzC,iBAGJ,CAEA,qBACI,kCAAgD,CAChD,iBAAkB,CAKlB,qBAAuB,CAHvB,MAAO,CADP,iBAAkB,CAElB,KAAM,CACN,oBAEJ,CAEA,2BACI,iBACJ,CAEA,sEAEI,iCAAkC,CAClC,yBAA0B,CAF1B,oBAGJ,CAEA,sEACI,wBACJ,CAEA,4DAEI,iCAAkC,CAClC,yBAA0B,CAF1B,oBAGJ,CAEA,4DACI,wBACJ,CAEA,uCACI,oBACJ,CAEA,qDACI,YACJ,CAEA,4DAII,iCAA0B,CAA1B,yBAA0B,CAD1B,gBAA8B,CAF9B,6BAA8B,CAC9B,8BAGJ,CAEA,qDACI,2BAA6B,CAC7B,mBACJ,CAEA,0DAKI,mBAHJ,CAMA,kCAGI,iBAAkB,CADlB,mBAAoB,CADpB,oBAGJ,CAEA,+CACI,kBAAmB,CACnB,+BACJ,CAEA,yCACI,oBACJ,CAEA,oCACI,kBAAmB,CAInB,0BAAwC,CAFxC,WAAY,CADZ,gBAAiB,CAEjB,aAEJ,CAEA,+CACI,kBAAmB,CAInB,0BAAwC,CAFxC,WAAY,CADZ,gBAAiB,CAEjB,aAEJ,CAEA,yCAKI,qBAAuB,CAFvB,MAAO,CAFP,iBAAkB,CAClB,KAAM,CAEN,oBAEJ,CAEA,8DACI,oBAAqB,CAErB,qBAAuB,CADvB,oBAEJ,CAEA,oEAMI,aAAc,CAHd,qBAAuB,CAEvB,cAAe,CAJf,yBAA2B,CAG3B,wBAA0B,CAF1B,oBAKJ,CAEA,2BACI,kCACJ",
                sourcesContent: ['.prismPlayerContainer {\n    position: relative;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n    border-radius: 5px;\n}\n\n.prismPlayerContainer :global(.prism-player) {\n    background-color: rgba(247,247,247,1) !important;\n    border-radius: 5px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100% !important;\n    height: 100% !important;\n}\n\n.prismPlayerContainer :global(.prism-player) > video {\n    border-radius: 5px;\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-liveshift-progress) :global(.prism-progress-loaded) {\n    background: rgba(50,50,50,0.1);\n    -webkit-backdrop-filter: blur(2px);\n    backdrop-filter: blur(2px);\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-liveshift-progress) :global(.prism-progress-played) {\n    background-color: #fea115;\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-progress) :global(.prism-progress-loaded) {\n    background: rgba(50,50,50,0.1);\n    -webkit-backdrop-filter: blur(2px);\n    backdrop-filter: blur(2px);\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-progress) :global(.prism-progress-played) {\n    background-color: #fea115;\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-controlbar) {\n    z-index: 11 !important;\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-controlbar) :global(.prism-cc-btn) {\n    display: none;\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-controlbar) :global(.prism-controlbar-bg) {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    background: rgba(0, 0, 0, 0.8);\n    backdrop-filter: blur(2px);\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-controlbar) :global(.prism-volume) {\n    margin-right: 15px !important;\n    transform: scale(0.8);\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-controlbar) :global(.prism-setting-btn) {\n    transform: scale(0.8);\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-controlbar) :global(.prism-setting-btn) {\n    transform: scale(0.8);\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-cover) {\n    z-index: 10 !important;\n    pointer-events: none;\n    border-radius: 5px;\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-big-play-btn.pause) {\n    border-radius: 100%;\n    box-shadow: 0 5px 15px rgba(0,0,0,0.15);\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-big-play-btn) {\n    z-index: 11 !important;\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-tooltip) {\n    border-radius: 10px;\n    line-height: 19px;\n    height: 20px;\n    padding: 0 8px;\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);\n}\n\n.prismPlayerContainer :global(.prism-player) :global(.prism-thumbnail) img ~ span {\n    border-radius: 10px;\n    line-height: 19px;\n    height: 20px;\n    padding: 0 8px;\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);\n}\n\n.prismPlayerContainer[data-has-size="true"] :global(.prism-player) {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100% !important;\n    height: 100% !important;\n}\n\n.prismPlayerContainer[data-has-size="false"] :global(.prism-player)[data-is-ready="true"] {\n    display: inline-block;\n    width: auto !important;\n    height: auto !important;\n}\n\n.prismPlayerContainer[data-has-size="false"] :global(.prism-player)[data-is-ready="true"] > video {\n    position: static !important;\n    width: auto !important;\n    height: auto !important;\n    transform: none !important;\n    max-width: 100%;\n    display: block;\n}\n\n:global(.dark) .prismPlayerContainer :global(.prism-player) {\n    background-color: rgba(56,56,56,1) !important;\n}'],
                sourceRoot: ""
            }]), i.locals = {
                prismPlayerContainer: "VcE6a"
            }, e.exports = i
        },
        81784: function(e, n, r) {
            var t = r(87537),
                i = r(23645)(t);
            i.push([e.id, '.d8276~.d8276:before{background-color:#0000000d;content:" ";height:12px;left:0;position:absolute;top:50%;transform:translate(-50%,-50%);width:1px}.dark .d8276~.d8276:before{background-color:#f7faff1f}', "", {
                version: 3,
                sources: ["webpack://./shared/components/markdown/components/LCGroupedCodeFence/TabBarItem.iso.css"],
                names: [],
                mappings: "AAAA,qBAKI,0BAAmB,CAHnB,WAAY,CACZ,WAAY,CAGZ,MAAO,CALP,iBAAkB,CAMlB,OAAQ,CACR,8BAAgC,CAJhC,SAKJ,CAGI,2BAAA,0BAAwB",
                sourcesContent: ['.item ~ .item::before {\n    position: absolute;\n    content: " ";\n    height: 12px;\n    width: 1px;\n    @apply bg-divider-3;\n    left: 0;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n\n:global(.dark) .item ~ .item::before {\n    @apply bg-dark-divider-3;\n}'],
                sourceRoot: ""
            }]), i.locals = {
                item: "d8276"
            }, e.exports = i
        },
        18301: function(e, n, r) {
            var t = r(87537),
                i = r(23645)(t);
            i.push([e.id, ".f2O_Z{background:url(https://leetcode.com/static/images/articles/video-preview.png)}", "", {
                version: 3,
                sources: ["webpack://./shared/components/markdown/components/PremiumOnlyVideo/PremiumOnlyVideo.iso.css"],
                names: [],
                mappings: "AAAA,OAEE,6EACF",
                sourcesContent: ['.background {\n  /* FIXME: use local file rather than hardcoded URL. Using local PNG file causes webpack file-loader error */\n  background: url("https://leetcode.com/static/images/articles/video-preview.png")\n}\n'],
                sourceRoot: ""
            }]), i.locals = {
                background: "f2O_Z"
            }, e.exports = i
        },
        55815: function(e, n, r) {
            var t = r(87537),
                i = r(23645)(t);
            i.push([e.id, ".mYe_l{overflow-wrap:break-word;word-break:normal}.mYe_l img,.mYe_l video{margin-bottom:1rem}.mYe_l>:last-child{margin-bottom:0}.mYe_l>:first-child{margin-top:0}.mYe_l>div:first-child{margin-top:5px}.mYe_l iframe{margin-bottom:1rem;max-width:100%}.mYe_l h1{font-size:1.5rem;line-height:2rem}.mYe_l h1,.mYe_l h2{font-weight:700;margin-bottom:1rem;margin-top:1.5rem}.mYe_l h2{font-size:1.25rem;line-height:1.75rem}.mYe_l h3{font-size:1.125rem;line-height:1.75rem}.mYe_l h3,.mYe_l h4{font-weight:700;margin-bottom:1rem;margin-top:1.5rem}.mYe_l h4{font-size:17px}.mYe_l h5{font-weight:700}.mYe_l h5,.mYe_l h6{font-size:1rem;line-height:1.5rem;margin-bottom:1rem;margin-top:1.5rem}.mYe_l h1,.mYe_l h2,.mYe_l h3,.mYe_l h4{--tw-text-opacity:1;color:rgb(38 38 38/var(--tw-text-opacity))}.dark .mYe_l h1,.dark .mYe_l h2,.dark .mYe_l h3,.dark .mYe_l h4{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.mYe_l p{font-size:.875rem;line-height:1.25rem;line-height:22px;margin-bottom:1rem;overflow-x:auto;overflow-y:hidden}.mYe_l p:first-child{margin-top:0}.mYe_l h5,.mYe_l h6,.mYe_l p,.mYe_l>div{--tw-text-opacity:1;color:rgb(38 38 38/var(--tw-text-opacity))}.dark .mYe_l h5,.dark .mYe_l h6,.dark .mYe_l p,.dark .mYe_l>div{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.mYe_l a{--tw-text-opacity:1;color:rgb(0 122 255/var(--tw-text-opacity));margin-bottom:1rem}.mYe_l a:hover{text-decoration-line:underline}.dark .mYe_l a{--tw-text-opacity:1;color:rgb(10 132 255/var(--tw-text-opacity))}.mYe_l strong{--tw-text-opacity:1;color:rgb(38 38 38/var(--tw-text-opacity));font-weight:700}.dark .mYe_l strong{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.mYe_l blockquote{--tw-border-opacity:1;border-color:rgb(229 229 229/var(--tw-border-opacity));border-left-width:6px;margin-bottom:1rem}.dark .mYe_l blockquote{--tw-border-opacity:1;border-color:rgb(66 66 66/var(--tw-border-opacity))}.mYe_l blockquote>*{margin-left:1rem}.mYe_l blockquote *{color:#3c3c4399!important}.dark .mYe_l blockquote *{color:#eff2f699!important}.mYe_l hr{border-bottom-width:2px;border-color:#0000000d;margin-bottom:1.5rem;margin-top:1.5rem}.dark .mYe_l hr{border-color:#f7faff1f}.mYe_l ins,.mYe_l u{color:#3c3c4399;text-decoration-line:underline}.dark .mYe_l ins,.dark .mYe_l u{color:#eff2f699}.mYe_l ul{--tw-text-opacity:1;color:rgb(38 38 38/var(--tw-text-opacity));font-size:1rem;line-height:1.5rem;list-style-type:disc;margin-bottom:1rem}.dark .mYe_l ul{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.mYe_l ol ol,.mYe_l ul ul{margin-bottom:0;margin-top:.25rem}.mYe_l ul ul{list-style-type:circle}.mYe_l ol ol{list-style-type:lower-alpha}.mYe_l li{margin-bottom:.25rem;margin-left:2rem}.mYe_l li:last-child{margin-bottom:0}.mYe_l li p:first-child{overflow:visible}.mYe_l ol{--tw-text-opacity:1;color:rgb(38 38 38/var(--tw-text-opacity));font-size:1rem;line-height:1.5rem;list-style-type:decimal;margin-bottom:1rem}.dark .mYe_l ol{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.mYe_l code,.mYe_l pre{color:#262626bf}.dark .mYe_l code,.dark .mYe_l pre{color:#eff1f6bf}.mYe_l code,.mYe_l pre{background-color:#000a200d;border-radius:.5rem;font-family:Menlo,sans-serif;font-size:.75rem;line-height:1.5rem}.mYe_l pre{border-radius:0;margin-bottom:1rem;padding:.625rem .75rem}.mYe_l>pre{border-radius:.5rem}.mYe_l code{margin:1rem .25rem;padding:.25rem}.dark .mYe_l code,.dark .mYe_l pre{background-color:#ffffff1a}.mYe_l pre code{background-color:initial;border-radius:0;margin:0;padding:0}.dark .mYe_l pre code{background-color:initial}.mYe_l table{--tw-text-opacity:1;border-radius:.5rem;border-style:hidden;box-shadow:0 0 0 1px #e5e5e5;color:rgb(38 38 38/var(--tw-text-opacity));margin-bottom:1.5rem}.dark .mYe_l table{--tw-border-opacity:1;--tw-text-opacity:1;border-color:rgb(74 74 74/var(--tw-border-opacity));box-shadow:0 0 0 1px #424242;color:rgb(255 255 255/var(--tw-text-opacity))}.mYe_l table th{--tw-border-opacity:1;background-color:#000a200d;border-color:rgb(223 223 223/var(--tw-border-opacity));border-width:1px;font-size:1rem;font-weight:500;line-height:1.5rem;padding:1rem 1.25rem}.mYe_l table th:first-child{border-top-left-radius:.5rem}.mYe_l table th:last-child{border-top-right-radius:.5rem}.dark .mYe_l table th{--tw-border-opacity:1;background-color:#ffffff1a;border-color:rgb(74 74 74/var(--tw-border-opacity))}.mYe_l table td{--tw-border-opacity:1;border-color:rgb(223 223 223/var(--tw-border-opacity));border-width:1px;font-size:1rem;line-height:1.5rem;padding:1rem 1.25rem}.dark .mYe_l table td{--tw-border-opacity:1;border-color:rgb(74 74 74/var(--tw-border-opacity))}.mYe_l .language-md .table{display:inline!important}.mYe_l .katex-html{overflow-x:auto;overflow-y:hidden}.mYe_l .katex{color:#262626bf;font-size:1rem!important;line-height:1.5rem!important;margin-left:2px;margin-right:2px}.dark .mYe_l .katex{color:#eff1f6bf}.mYe_l .video-container{height:0;margin-bottom:10px;padding-bottom:56.25%;position:relative}.mYe_l .video-container iframe{height:100%;left:0;margin:0;position:absolute;top:0;width:100%}", "", {
                version: 3,
                sources: ["webpack://./shared/components/markdown/markdown-content.iso.css"],
                names: [],
                mappings: "AAAA,OAEE,wBAAyB,CADzB,iBAEF,CAIE,wBAAA,kBAAW,CAGb,mBACE,eACF,CAEA,oBACE,YACF,CAEA,uBACE,cACF,CAEA,cAEE,kBAAW,CADX,cAEF,CAGE,UAAA,gBAAmC,CAAnC,gBAAmC,CAInC,oBAJA,eAAmC,CAAnC,kBAAmC,CAAnC,iBAIkC,CAAlC,UAAA,iBAAkC,CAAlC,mBAAkC,CAIlC,UAAA,kBAAkC,CAAlC,mBAAkC,CAIlC,oBAJA,eAAkC,CAAlC,kBAAkC,CAAlC,iBAIsC,CAAtC,UAAA,cAAsC,CAItC,UAAA,eAAoC,CAIpC,oBAJA,cAAoC,CAApC,kBAAoC,CAApC,kBAAoC,CAApC,iBAI0B,CAO1B,wCAAA,mBAAmB,CAAnB,0CAAmB,CAOnB,gEAAA,mBAAwB,CAAxB,6CAAwB,CAIxB,SAAA,iBAAoE,CAApE,mBAAoE,CAApE,gBAAoE,CAApE,kBAAoE,CAApE,eAAoE,CAApE,iBAAoE,CAIpE,qBAAA,YAAW,CAOX,wCAAA,mBAAmB,CAAnB,0CAAmB,CAOnB,gEAAA,mBAAwB,CAAxB,6CAAwB,CAIxB,SAAA,mBAAuB,CAAvB,2CAAuB,CAAvB,kBAAuB,CAIvB,eAAA,8BAAgB,CAIhB,eAAA,mBAAuB,CAAvB,4CAAuB,CAIvB,cAAA,mBAA6B,CAA7B,0CAA6B,CAA7B,eAA6B,CAI7B,oBAAA,mBAAwB,CAAxB,6CAAwB,CAIxB,kBAAA,qBAAwC,CAAxC,sDAAwC,CAAxC,qBAAwC,CAAxC,kBAAwC,CAIxC,wBAAA,qBAAyB,CAAzB,mDAAyB,CAIzB,oBAAA,gBAAW,CAIX,oBAAA,yBAAoB,CAIpB,0BAAA,yBAAyB,CAIzB,UAAA,uBAAuC,CAAvC,sBAAuC,CAAvC,oBAAuC,CAAvC,iBAAuC,CAIvC,gBAAA,sBAA4B,CAK5B,oBAAA,eAA6B,CAA7B,8BAA6B,CAK7B,gCAAA,eAAwB,CAIxB,UAAA,mBAA4C,CAA5C,0CAA4C,CAA5C,cAA4C,CAA5C,kBAA4C,CAA5C,oBAA4C,CAA5C,kBAA4C,CAI5C,gBAAA,mBAAwB,CAAxB,6CAAwB,CAKxB,0BAAA,eAAgB,CAAhB,iBAAgB,CAGlB,aACE,sBACF,CAEA,aACE,2BACF,CAGE,UAAA,oBAAgB,CAAhB,gBAAgB,CAIhB,qBAAA,eAAW,CAIX,wBAAA,gBAAuB,CAIvB,UAAA,mBAA+C,CAA/C,0CAA+C,CAA/C,cAA+C,CAA/C,kBAA+C,CAA/C,uBAA+C,CAA/C,kBAA+C,CAI/C,gBAAA,mBAAwB,CAAxB,6CAAwB,CAKxB,uBAAA,eAAmB,CAKnB,mCAAA,eAAwB,CAKxB,uBAAA,0BAAwD,CAAxD,mBAAwD,CAAxD,4BAAwD,CAAxD,gBAAwD,CAAxD,kBAAwD,CAIxD,WAAA,eAAoC,CAApC,kBAAoC,CAApC,sBAAoC,CAIpC,WAAA,mBAAiB,CAIjB,YAAA,kBAAoB,CAApB,cAAoB,CAKpB,mCAAA,0BAAqB,CAIrB,gBAAA,wBAAgD,CAAhD,eAAgD,CAAhD,QAAgD,CAAhD,SAAgD,CAIhD,sBAAA,wBAAqB,CAGvB,aAEE,mBAAiD,CAAjD,mBAAiD,CAAjD,mBAAiD,CADjD,4BAA6B,CAC7B,0CAAiD,CAAjD,oBACF,CAEA,mBAEE,qBAA2C,CAA3C,mBAA2C,CAA3C,mDAA2C,CAD3C,4BAA6B,CAC7B,6CACF,CAGE,gBAAA,qBAA2E,CAA3E,0BAA2E,CAA3E,sDAA2E,CAA3E,gBAA2E,CAA3E,cAA2E,CAA3E,eAA2E,CAA3E,kBAA2E,CAA3E,oBAA2E,CAI3E,4BAAA,4BAAoB,CAIpB,2BAAA,6BAAoB,CAIpB,sBAAA,qBAAwC,CAAxC,0BAAwC,CAAxC,mDAAwC,CAIxC,gBAAA,qBAAqD,CAArD,sDAAqD,CAArD,gBAAqD,CAArD,cAAqD,CAArD,kBAAqD,CAArD,oBAAqD,CAIrD,sBAAA,qBAAyB,CAAzB,mDAAyB,CAG3B,2BAKE,wBACF,CAEA,mBACE,eAAgB,CAChB,iBACF,CAGE,cAAA,eAAuC,CAAvC,wBAAuC,CAAvC,4BAAuC,CAAvC,eAAuC,CAAvC,gBAAuC,CAIvC,oBAAA,eAAwB,CAG1B,wBAGE,QAAS,CACT,kBAAmB,CAFnB,qBAAsB,CADtB,iBAIF,CAEA,+BAKE,WAAY,CAFZ,MAAO,CAGP,QAAS,CALT,iBAAkB,CAClB,KAAM,CAEN,UAGF",
                sourcesContent: [".markdown {\n  word-break: normal;\n  overflow-wrap: break-word;\n}\n\n.markdown img,\n.markdown video {\n  @apply mb-4;\n}\n\n.markdown > *:last-child {\n  margin-bottom: 0;\n}\n\n.markdown > *:first-child {\n  margin-top: 0;\n}\n\n.markdown > div:first-child {\n  margin-top: 5px;\n}\n\n.markdown iframe {\n  max-width: 100%;\n  @apply mb-4;\n}\n\n.markdown h1 {\n  @apply mb-4 mt-6 text-2xl font-bold;\n}\n\n.markdown h2 {\n  @apply mb-4 mt-6 text-xl font-bold;\n}\n\n.markdown h3 {\n  @apply mb-4 mt-6 text-lg font-bold;\n}\n\n.markdown h4 {\n  @apply mb-4 mt-6 text-[17px] font-bold;\n}\n\n.markdown h5 {\n  @apply mb-4 mt-6 text-base font-bold;\n}\n\n.markdown h6 {\n  @apply mb-4 mt-6 text-base;\n}\n\n.markdown h1,\n.markdown h2,\n.markdown h3,\n.markdown h4 {\n  @apply text-label-1;\n}\n\n:global(.dark) .markdown h1,\n:global(.dark) .markdown h2,\n:global(.dark) .markdown h3,\n:global(.dark) .markdown h4 {\n  @apply text-dark-label-1;\n}\n\n.markdown p {\n  @apply mb-4 overflow-x-auto overflow-y-hidden text-sm leading-[22px];\n}\n\n.markdown p:first-child {\n  @apply mt-0;\n}\n\n.markdown h5,\n.markdown h6,\n.markdown p,\n.markdown > div {\n  @apply text-label-1;\n}\n\n:global(.dark) .markdown h5,\n:global(.dark) .markdown h6,\n:global(.dark) .markdown p,\n:global(.dark) .markdown > div {\n  @apply text-dark-label-1;\n}\n\n.markdown a {\n  @apply text-blue-s mb-4;\n}\n\n.markdown a:hover {\n  @apply underline;\n}\n\n:global(.dark) .markdown a {\n  @apply text-dark-blue-s;\n}\n\n.markdown strong {\n  @apply text-label-1 font-bold;\n}\n\n:global(.dark) .markdown strong {\n  @apply text-dark-label-1;\n}\n\n.markdown blockquote {\n  @apply border-gray-3 mb-4 border-l-[6px];\n}\n\n:global(.dark) .markdown blockquote {\n  @apply border-dark-gray-3;\n}\n\n.markdown blockquote > * {\n  @apply ml-4;\n}\n\n.markdown blockquote * {\n  @apply !text-label-3;\n}\n\n:global(.dark) .markdown blockquote * {\n  @apply !text-dark-label-3;\n}\n\n.markdown hr {\n  @apply border-divider-3 my-6 border-b-2;\n}\n\n:global(.dark) .markdown hr {\n  @apply border-dark-divider-3;\n}\n\n.markdown ins,\n.markdown u {\n  @apply text-label-3 underline;\n}\n\n:global(.dark) .markdown ins,\n:global(.dark) .markdown u {\n  @apply text-dark-label-3;\n}\n\n.markdown ul {\n  @apply text-label-1 mb-4 list-disc text-base;\n}\n\n:global(.dark) .markdown ul {\n  @apply text-dark-label-1;\n}\n\n.markdown ul ul,\n.markdown ol ol {\n  @apply mb-0 mt-1;\n}\n\n.markdown ul ul {\n  list-style-type: circle;\n}\n\n.markdown ol ol {\n  list-style-type: lower-alpha;\n}\n\n.markdown li {\n  @apply mb-1 ml-8;\n}\n\n.markdown li:last-child {\n  @apply mb-0;\n}\n\n.markdown li p:first-child {\n  @apply overflow-visible;\n}\n\n.markdown ol {\n  @apply text-label-1 mb-4 list-decimal text-base;\n}\n\n:global(.dark) .markdown ol {\n  @apply text-dark-label-1;\n}\n\n.markdown code,\n.markdown pre {\n  @apply text-label-2;\n}\n\n:global(.dark) .markdown code,\n:global(.dark) .markdown pre {\n  @apply text-dark-label-2;\n}\n\n.markdown code,\n.markdown pre {\n  @apply bg-fill-3 font-menlo rounded-lg text-xs leading-6;\n}\n\n.markdown pre {\n  @apply mb-4 rounded-none px-3 py-2.5;\n}\n\n.markdown > pre {\n  @apply rounded-lg;\n}\n\n.markdown code {\n  @apply mx-1 my-4 p-1;\n}\n\n:global(.dark) .markdown code,\n:global(.dark) .markdown pre {\n  @apply bg-dark-fill-3;\n}\n\n.markdown pre code {\n  @apply m-0 rounded-none bg-transparent px-0 py-0;\n}\n\n:global(.dark) .markdown pre code {\n  @apply bg-transparent;\n}\n\n.markdown table {\n  box-shadow: 0 0 0 1px #e5e5e5;\n  @apply text-label-1 mb-6 rounded-lg border-hidden;\n}\n\n:global(.dark) .markdown table {\n  box-shadow: 0 0 0 1px #424242;\n  @apply border-dark-gray-4 text-dark-label-1;\n}\n\n.markdown table th {\n  @apply border-gray-4 bg-fill-3 border-[1px] px-5 py-4 text-base font-medium;\n}\n\n.markdown table th:first-child {\n  @apply rounded-tl-lg;\n}\n\n.markdown table th:last-child {\n  @apply rounded-tr-lg;\n}\n\n:global(.dark) .markdown table th {\n  @apply border-dark-gray-4 bg-dark-fill-3;\n}\n\n.markdown table td {\n  @apply border-gray-4 border-[1px] px-5 py-4 text-base;\n}\n\n:global(.dark) .markdown table td {\n  @apply border-dark-gray-4;\n}\n\n.markdown :global(.language-md .table) {\n  /*\n    FIXME: tailwind-css `.table` conflict with highlight.js `.table`,\n           which just have different meanings but with the same name\n     */\n  display: inline !important;\n}\n\n.markdown :global(.katex-html) {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.markdown :global(.katex) {\n  @apply text-label-2 mx-[2px] !text-base;\n}\n\n:global(.dark) .markdown :global(.katex) {\n  @apply text-dark-label-2;\n}\n\n.markdown :global(.video-container) {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  margin-bottom: 10px;\n}\n\n.markdown :global(.video-container) iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n"],
                sourceRoot: ""
            }]), i.locals = {
                markdown: "mYe_l"
            }, e.exports = i
        },
        75247: function(e, n, r) {
            "use strict";
            r.d(n, {
                e: function() {
                    return a
                }
            });
            var t = r(26042),
                i = r(69396),
                o = r(85893),
                a = r(67294).forwardRef((function(e, n) {
                    return (0, o.jsx)("svg", (0, i.Z)((0, t.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, o.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M16.091 4.929l-7.057 7.078 7.057 7.064a1 1 0 01-1.414 1.414l-7.764-7.77a1 1 0 010-1.415l7.764-7.785a1 1 0 111.415 1.414z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        67222: function(e, n, r) {
            "use strict";
            r.d(n, {
                V: function() {
                    return a
                }
            });
            var t = r(26042),
                i = r(69396),
                o = r(85893),
                a = r(67294).forwardRef((function(e, n) {
                    return (0, o.jsx)("svg", (0, i.Z)((0, t.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, o.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7.913 19.071l7.057-7.078-7.057-7.064a1 1 0 011.414-1.414l7.764 7.77a1 1 0 010 1.415l-7.764 7.785a1 1 0 01-1.414-1.414z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        99437: function(e, n, r) {
            "use strict";
            r.d(n, {
                d: function() {
                    return a
                }
            });
            var t = r(26042),
                i = r(69396),
                o = r(85893),
                a = r(67294).forwardRef((function(e, n) {
                    return (0, o.jsx)("svg", (0, i.Z)((0, t.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, o.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        4186: function(e, n, r) {
            "use strict";
            r.d(n, {
                t: function() {
                    return a
                }
            });
            var t = r(26042),
                i = r(69396),
                o = r(85893),
                a = r(67294).forwardRef((function(e, n) {
                    return (0, o.jsx)("svg", (0, i.Z)((0, t.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, o.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M4 7.987l2.09-1.995a8.274 8.274 0 017.76-2.282c2.801.644 5.081 2.704 6.04 5.456.183.529-.09 1.11-.61 1.297a.996.996 0 01-1.276-.619 6.4 6.4 0 00-4.595-4.151c-2.131-.49-4.36.165-5.928 1.758l-1.956 1.87h2.384c.552 0 1 .454 1 1.016 0 .561-.448 1.016-1 1.016H3c-.552 0-1-.455-1-1.016v-4.99c0-.562.448-1.017 1-1.017s1 .455 1 1.016v2.64zm16 8.026l-2.09 1.995a8.274 8.274 0 01-7.76 2.282c-2.801-.644-5.081-2.704-6.04-5.456-.183-.529.09-1.11.61-1.297a.996.996 0 011.276.619c.73 2.094 2.464 3.661 4.595 4.151 2.131.49 4.36-.165 5.928-1.758l1.956-1.87h-2.384c-.552 0-1-.454-1-1.016 0-.561.448-1.016 1-1.016H21c.552 0 1 .455 1 1.016v4.99c0 .562-.448 1.017-1 1.017s-1-.455-1-1.016v-2.64z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        66476: function(e, n, r) {
            "use strict";
            r.d(n, {
                L: function() {
                    return a
                }
            });
            var t = r(26042),
                i = r(69396),
                o = r(85893),
                a = r(67294).forwardRef((function(e, n) {
                    return (0, o.jsx)("svg", (0, i.Z)((0, t.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, o.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M12 13.5a1 1 0 01-1-1v-4a1 1 0 112 0v4a1 1 0 01-1 1zm0 3a1 1 0 110-2 1 1 0 010 2zm0 5.5C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        68352: function(e, n, r) {
            "use strict";
            r.d(n, {
                U: function() {
                    return a
                }
            });
            var t = r(26042),
                i = r(69396),
                o = r(85893),
                a = r(67294).forwardRef((function(e, n) {
                    return (0, o.jsx)("svg", (0, i.Z)((0, t.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, o.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm1.414-8l2.293 2.293a1 1 0 01-1.414 1.414L12 13.414l-2.293 2.293a1 1 0 01-1.414-1.414L10.586 12 8.293 9.707a1 1 0 011.414-1.414L12 10.586l2.293-2.293a1 1 0 111.414 1.414L13.414 12z",
                            clipRule: "evenodd"
                        })
                    }))
                }))
        },
        48761: function(e, n, r) {
            "use strict";
            r.d(n, {
                o: function() {
                    return l
                }
            });
            var t = r(67294),
                i = r(52872),
                o = r(21790),
                a = r(79975),
                l = function(e) {
                    var n = (0, a.Q)(e).data,
                        r = null === n || void 0 === n ? void 0 : n.metaData;
                    return (0, t.useMemo)((function() {
                        var e = r ? (0, o.Ii)(r) : void 0;
                        return (null === e || void 0 === e ? void 0 : e.type) === i.tn.Frontend
                    }), [r])
                }
        },
        98540: function(e, n, r) {
            "use strict";
            r.d(n, {
                t: function() {
                    return jo
                }
            });
            var t = r(26042),
                i = r(69396),
                o = r(99534),
                a = r(85893),
                l = r(67294),
                s = r(57081),
                c = r(78030),
                u = r(12922),
                d = r(51438),
                p = r(28668),
                m = r(25171),
                f = function(e) {
                    (0, p.Z)(r, e);
                    var n = (0, m.Z)(r);

                    function r(e) {
                        var t;
                        return (0, d.Z)(this, r), (t = n.call(this, e)).state = {
                            hasError: !1
                        }, t
                    }
                    var t = r.prototype;
                    return t.componentDidCatch = function(e, n) {
                        console.debug(e), console.debug(n)
                    }, t.render = function() {
                        var e;
                        return this.state.hasError ? (0, a.jsx)("div", {
                            className: this.props.className,
                            children: null !== (e = this.props.message) && void 0 !== e ? e : "Error rendering component"
                        }) : this.props.children
                    }, r.getDerivedStateFromError = function(e) {
                        return {
                            hasError: !0
                        }
                    }, r
                }(l.Component),
                h = r(51356),
                v = r(10253),
                g = r(70729),
                A = r.n(g),
                x = r(21623),
                C = r(71623),
                b = function(e) {
                    var n = e.length;
                    if (n < 2) return e;
                    var r = e.charAt(0);
                    return r !== e.charAt(n - 1) || '"' !== r && "'" !== r ? e : e.substring(1, n - 1)
                },
                y = function(e) {
                    if (!e.startsWith("{:")) return [null, e];
                    var n = e.indexOf("}", 2);
                    if (n < 0) return [null, e];
                    var r = e.substring(2, n),
                        t = e.substring(n + 1),
                        i = function(e) {
                            var n = e.split(" "),
                                r = {},
                                t = !0,
                                i = !1,
                                o = void 0;
                            try {
                                for (var a, l = n[Symbol.iterator](); !(t = (a = l.next()).done); t = !0) {
                                    var s = a.value;
                                    if (s) {
                                        var c = s.indexOf("=");
                                        if (c < 0) r[s] = !0;
                                        else {
                                            var u = s.substring(0, c).trim(),
                                                d = b(s.substring(c + 1).trim());
                                            r[u] = d
                                        }
                                    }
                                }
                            } catch (p) {
                                i = !0, o = p
                            } finally {
                                try {
                                    t || null == l.return || l.return()
                                } finally {
                                    if (i) throw o
                                }
                            }
                            return r
                        }(r);
                    return [i, t]
                },
                w = function(e) {
                    return !!e.shouldBeRemoved
                },
                k = function() {
                    return function(e) {
                        (0, x.Vn)(e, "image", (function(e, n, r) {
                            var t, i = null === r || void 0 === r || null === (t = r.children) || void 0 === t ? void 0 : t[n + 1];
                            if (i && function(e) {
                                    return "text" === e.type
                                }(i)) {
                                var o = i.value.trim();
                                if (o) {
                                    var a = (0, v.Z)(y(o), 2),
                                        l = a[0],
                                        s = a[1],
                                        c = function(e) {
                                            var n = e.width,
                                                r = e.height,
                                                t = e.align;
                                            if (!n && !r && !t) return e;
                                            var i = Object.assign({}, e),
                                                o = e.style,
                                                a = [];
                                            o && "string" === typeof o && a.push(o);
                                            var l = n && parseInt(n, 10) || 0;
                                            l && (a.push("width:".concat(l, "px")), delete i.width);
                                            var s = r && parseInt(r, 10) || 0;
                                            return s && (a.push("height:".concat(s, "px")), delete i.height), "center" === t && (a.push("margin-left: auto"), a.push("margin-right: auto"), delete i.align), i.style = a.join(";"), i
                                        }(Object.assign({}, e, l)),
                                        u = c.style;
                                    "string" === typeof u && (e.style = u), s ? i.value = s : i.shouldBeRemoved = 1
                                }
                            }
                        })), (0, C.O)(e, {}, w)
                    }
                },
                _ = function(e, n) {
                    var r = n.title,
                        t = n.url,
                        i = n.alt,
                        o = n.style,
                        a = {
                            src: A()(t)
                        };
                    return i && (a.alt = i), r && (a.title = r), o && (a.style = o), e(n, "img", a)
                },
                j = function(e) {
                    var n = e.onClick;
                    return (0, a.jsx)("svg", {
                        className: "h-5 w-5 cursor-pointer",
                        height: "24",
                        viewBox: "0 0 24 24",
                        width: "24",
                        xmlns: "http://www.w3.org/2000/svg",
                        onClick: n,
                        children: (0, a.jsx)("path", {
                            d: "m18 18-8.5-6 8.5-6zm-10-12v12h-2v-12z",
                            fill: "currentColor"
                        })
                    })
                },
                B = function(e) {
                    var n = e.onClick;
                    return (0, a.jsx)("svg", {
                        className: "h-5 w-5 cursor-pointer",
                        height: "24",
                        viewBox: "0 0 24 24",
                        width: "24",
                        xmlns: "http://www.w3.org/2000/svg",
                        onClick: n,
                        children: (0, a.jsx)("path", {
                            d: "m6 18 8.5-6-8.5-6zm10-12v12h2v-12z",
                            fill: "currentColor"
                        })
                    })
                },
                N = function(e) {
                    var n = e.onClick;
                    return (0, a.jsx)("svg", {
                        className: "mr-auto h-5 w-5 cursor-pointer",
                        height: "24",
                        viewBox: "0 0 24 24",
                        width: "24",
                        xmlns: "http://www.w3.org/2000/svg",
                        onClick: n,
                        children: (0, a.jsx)("path", {
                            d: "m6 19h4v-14h-4zm8-14v14h4v-14z",
                            fill: "currentColor"
                        })
                    })
                },
                I = function(e) {
                    var n = e.onClick;
                    return (0, a.jsx)("svg", {
                        className: "mr-auto h-5 w-5 cursor-pointer",
                        height: "24",
                        viewBox: "0 0 24 24",
                        width: "24",
                        xmlns: "http://www.w3.org/2000/svg",
                        onClick: n,
                        children: (0, a.jsx)("path", {
                            d: "m8 5v14l11-7z",
                            fill: "currentColor"
                        })
                    })
                },
                E = function(e) {
                    var n = e.isAutoPlaying,
                        r = e.setIsAutoPlaying,
                        t = e.toggleAutoPlay,
                        i = e.setNextIndex,
                        o = e.setPrevIndex,
                        s = e.currentIndex,
                        c = e.maxIndex,
                        u = (0, l.useCallback)((function() {
                            o(), r(!1)
                        }), [o, r]),
                        d = (0, l.useCallback)((function() {
                            i(), r(!1)
                        }), [i, r]),
                        p = n ? N : I;
                    return (0, a.jsxs)("div", {
                        className: "flex items-center justify-between bg-black px-2.5 py-2 text-white dark:bg-white dark:text-black",
                        children: [(0, a.jsx)(p, {
                            onClick: t
                        }), (0, a.jsx)(j, {
                            onClick: u
                        }), (0, a.jsxs)("span", {
                            className: "mx-5 text-xs",
                            children: [s + 1, " / ", c + 1]
                        }), (0, a.jsx)(B, {
                            onClick: d
                        })]
                    })
                },
                Z = function(e) {
                    var n = e.metas,
                        r = e.currentIndex,
                        t = e.toggleAutoPlay;
                    return (0, a.jsx)("div", {
                        className: "cursor-pointer overflow-hidden whitespace-nowrap",
                        onClick: t,
                        children: n.map((function(e, n) {
                            var t = e.url;
                            return (0, a.jsx)("img", {
                                className: "no-preview w-full",
                                hidden: n !== r,
                                src: t,
                                alt: ""
                            }, n)
                        }))
                    })
                };

            function S(e) {
                var n = e.metas,
                    r = (0, l.useState)(0),
                    t = r[0],
                    i = r[1],
                    o = (0, l.useState)(!1),
                    s = o[0],
                    c = o[1],
                    u = n.length - 1,
                    d = (0, l.useCallback)((function() {
                        i((function(e) {
                            var n = e - 1;
                            return n < 0 ? u : n
                        }))
                    }), [u]),
                    p = (0, l.useCallback)((function() {
                        i((function(e) {
                            var n = e + 1;
                            return n > u ? 0 : n
                        }))
                    }), [u]),
                    m = (0, l.useCallback)((function() {
                        c((function(e) {
                            return !e
                        }))
                    }), []);
                return (0, l.useEffect)((function() {
                    if (s) {
                        var e = setTimeout((function() {
                            i((function(e) {
                                var r = e + 1;
                                return r === n.length ? 0 : r
                            }))
                        }), n[t].duration);
                        return function() {
                            clearTimeout(e)
                        }
                    }
                }), [s, t, n]), (0, a.jsxs)("div", {
                    className: "select-none",
                    children: [(0, a.jsx)(Z, {
                        metas: n,
                        currentIndex: t,
                        toggleAutoPlay: m
                    }), (0, a.jsx)(E, {
                        currentIndex: t,
                        maxIndex: u,
                        isAutoPlaying: s,
                        setNextIndex: p,
                        setPrevIndex: d,
                        setIsAutoPlaying: c,
                        toggleAutoPlay: m
                    })]
                })
            }
            var P = (0, l.memo)((function(e) {
                    var n = e.value,
                        r = (0, l.useMemo)((function() {
                            return function(e) {
                                var n = JSON.parse(e),
                                    r = [],
                                    t = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var a, l = n[Symbol.iterator](); !(t = (a = l.next()).done); t = !0) {
                                        var s = (0, v.Z)(a.value, 2),
                                            c = s[0],
                                            u = s[1],
                                            d = +c || 1e3;
                                        r.push({
                                            duration: d,
                                            url: u
                                        })
                                    }
                                } catch (p) {
                                    i = !0, o = p
                                } finally {
                                    try {
                                        t || null == l.return || l.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                                return r
                            }(n)
                        }), [n]);
                    return (0, a.jsx)(S, {
                        metas: r
                    })
                }), (function(e, n) {
                    return e.value === n.value
                })),
                D = "lc_slides",
                L = function() {
                    return function(e) {
                        var n = !0,
                            r = !1,
                            t = void 0;
                        try {
                            for (var i, o = e.children[Symbol.iterator](); !(n = (i = o.next()).done); n = !0) {
                                var a = i.value;
                                if ("paragraph" === a.type) {
                                    var l = a.children,
                                        s = l.length;
                                    if (!(s < 3 || s % 2 === 0)) {
                                        var c = l[0],
                                            u = l[s - 1];
                                        if ("text" === c.type && "<" === c.value && "text" === u.type && ">" === u.value) {
                                            for (var d = !0, p = 1; p < s - 1; p++) {
                                                var m = l[p];
                                                if (p % 2) {
                                                    if ("image" !== m.type) {
                                                        d = !1;
                                                        break
                                                    }
                                                } else if ("text" !== m.type || "," !== m.value) {
                                                    d = !1;
                                                    break
                                                }
                                            }
                                            if (d) {
                                                for (var f = [], h = 1; h < s - 1; h += 2) {
                                                    var v = l[h];
                                                    f.push([v.alt, v.url])
                                                }
                                                a.type = D, a.value = JSON.stringify(f), delete a.children
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (g) {
                            r = !0, t = g
                        } finally {
                            try {
                                n || null == o.return || o.return()
                            } finally {
                                if (r) throw t
                            }
                        }
                    }
                },
                V = function(e, n) {
                    return e(n, D, {
                        value: n.value
                    })
                },
                M = function(e) {
                    var n = e.url,
                        r = (0, l.useState)(!1),
                        t = r[0],
                        i = r[1],
                        o = (0, l.useCallback)((function() {
                            i(!0)
                        }), []);
                    return t ? (0, a.jsxs)("div", {
                        className: "bg-gray-2 text-gray-6 dark:bg-dark-gray-2 dark:text-dark-gray-6 flex h-[360px] w-full max-w-[640px] flex-col items-center justify-center overflow-hidden",
                        children: ["\u65e0\u6548\u7684\u89c6\u9891\u5730\u5740", (0, a.jsx)("br", {}), n]
                    }) : (0, a.jsx)("div", {
                        className: "flex justify-center ",
                        children: (0, a.jsxs)("video", {
                            className: "max-h-[640px] w-[640px] max-w-full",
                            controls: !0,
                            children: [(0, a.jsx)("source", {
                                src: n,
                                type: "video/mp4",
                                onError: o
                            }), "\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u8be5\u89c6\u9891\u683c\u5f0f\u7684\u64ad\u653e"]
                        })
                    })
                },
                R = (0, l.memo)((function(e) {
                    var n = e.url;
                    return (0, a.jsx)(M, {
                        url: n
                    }, n)
                }), (function(e, n) {
                    return e.url === n.url
                })),
                Y = "lc_normal_video",
                q = function() {
                    return function(e) {
                        (0, x.Vn)(e, "image", (function(e) {
                            if (r = e.url, /^.*\.mp4$/.test(r)) {
                                var n = e;
                                n.type = Y, delete n.title, delete n.alt
                            }
                            var r
                        }))
                    }
                },
                O = function(e, n) {
                    return e(n, Y, {
                        url: n.url
                    })
                },
                T = function() {
                    return {}
                },
                z = r(23874),
                F = function(e) {
                    var n = e.message;
                    return (0, a.jsx)("div", {
                        className: "bg-gray-2 text-gray-6 dark:bg-dark-gray-2 dark:text-dark-gray-6 flex h-[360px] w-full max-w-[640px] flex-col items-center justify-center overflow-hidden",
                        children: n
                    })
                },
                H = r(66749);
            var G, J, $ = r(89360),
                K = r.n($),
                U = function(e, n, r, t) {
                    (0, l.useEffect)((function() {
                        var i = e.current;
                        if (i) {
                            var o = document.createElement("div"),
                                a = (0, H.Z)("aliPlayer");
                            o.setAttribute("id", a), i.appendChild(o);
                            var l = new(0, window.Aliplayer)({
                                id: a,
                                vid: t,
                                playauth: r,
                                encryptType: 1,
                                cover: n,
                                autoplay: !1,
                                preload: !0,
                                playsinline: !0,
                                keyShortCuts: !0
                            });
                            return function(e) {
                                    e.on("ready", (function() {
                                        var n = e._el;
                                        n.tabIndex = 1, n.onkeydown = function(n) {
                                            var r = n.code;
                                            "Tab" !== r && (n.preventDefault(), n.stopPropagation()), "Space" !== r ? "ArrowLeft" !== r ? "ArrowRight" === r && e.seek(e.getCurrentTime() + 3) : e.seek(e.getCurrentTime() - 3) : "playing" === e.getStatus() ? e.pause() : e.play()
                                        }
                                    }))
                                }(l), l.on("ready", (function() {
                                    var e;
                                    o.setAttribute("data-is-ready", "true"), null === (e = o.querySelector("video")) || void 0 === e || e.addEventListener("click", (function() {
                                        "playing" === l.getStatus() ? l.pause() : l.play()
                                    }))
                                })),
                                function() {
                                    l.dispose(), i.removeChild(o)
                                }
                        }
                    }), [e, n, r, t])
                },
                X = (0, l.memo)((function(e) {
                    var n = e.videoId,
                        r = e.playAuth,
                        t = e.coverUrl,
                        i = e.width,
                        o = e.height;
                    (0, c.y)(K());
                    var s = !(!i || !o),
                        u = (0, l.useRef)(null),
                        d = (0, l.useMemo)((function() {
                            if (i) return {
                                maxWidth: i + "px"
                            }
                        }), [i]),
                        p = (0, l.useMemo)((function() {
                            if (i && o) return {
                                padding: "".concat(o / i * 50, "% 50%")
                            }
                        }), [i, o]);
                    return U(u, t, r, n), (0, a.jsx)("div", {
                        className: K().prismPlayerContainer,
                        style: d,
                        ref: u,
                        children: (0, a.jsx)("div", {
                            "data-has-size": "".concat(s),
                            style: p
                        })
                    })
                })),
                W = function(e) {
                    return new Promise((function(n, r) {
                        var t = document.createElement("link");
                        t.rel = "stylesheet", t.href = e, t.onload = function() {
                            n()
                        }, t.onerror = function(e) {
                            r(e)
                        }, document.head.appendChild(t)
                    }))
                },
                Q = function() {
                    return G || (G = function() {
                        return Promise.all([(e = "https://g.alicdn.com/de/prismplayer/2.9.3/aliplayer-min.js", new Promise((function(n, r) {
                            var t = document.createElement("script");
                            t.type = "text/javascript", t.src = e, t.onload = function() {
                                n()
                            }, t.onerror = function(e) {
                                r(e)
                            }, document.head.appendChild(t)
                        }))), W("https://g.alicdn.com/de/prismplayer/2.9.3/skins/default/aliplayer-min.css")]).then((function() {}));
                        var e
                    }()), G
                },
                ee = r(47568),
                ne = r(70655),
                re = function() {},
                te = {
                    setVisible: re
                },
                ie = r(73935),
                oe = r(87185),
                ae = r(24223),
                le = r.n(ae),
                se = r(83269),
                ce = r(92924),
                ue = r.n(ce),
                de = function(e) {
                    var n = e.className;
                    return (0, a.jsx)("svg", {
                        className: n,
                        width: "137",
                        height: "100",
                        viewBox: "0 0 137 100",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsxs)("g", {
                            opacity: "0.16",
                            children: [(0, a.jsx)("path", {
                                d: "M98.3757 102.353C102.01 98.8485 107.892 98.8576 111.514 102.373C115.137 105.889 115.127 111.58 111.493 115.084L95.3566 130.646C80.4693 145.003 56.193 145.211 41.0546 131.129C40.9671 131.048 34.2263 124.665 11.989 103.606C-2.80494 89.597 -4.27877 67.1802 9.64271 52.7847L35.5992 25.9433C49.416 11.6546 74.8854 10.0929 90.683 22.431L114.258 40.844C118.25 43.9622 118.874 49.6211 115.65 53.4835C112.427 57.3459 106.578 57.9492 102.586 54.831L79.0112 36.4182C70.7494 29.9656 56.2971 30.8517 49.1681 38.2243L23.2112 65.066C16.4339 72.0741 17.1762 83.3639 24.9865 90.76C41.3158 106.224 53.9006 118.141 53.9152 118.155C61.7855 125.476 74.5114 125.367 82.2389 117.914L98.3757 102.353Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M59.1753 86.7802C54.0443 86.7802 49.8848 82.7561 49.8848 77.7921C49.8848 72.8281 54.0443 68.804 59.1753 68.804H127.693C132.824 68.804 136.983 72.8281 136.983 77.7921C136.983 82.7561 132.824 86.7802 127.693 86.7802H59.1753Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M72.007 -11.7058C75.5125 -15.3308 81.3916 -15.5202 85.1385 -12.1289C88.8854 -8.73753 89.0812 -3.04971 85.5758 0.575255L23.2115 65.0664C16.434 72.0739 17.1762 83.3637 24.9861 90.7601L53.7868 118.035C57.4535 121.508 57.5162 127.198 53.927 130.746C50.3377 134.293 44.4557 134.354 40.789 130.881L11.9881 103.606C-2.80495 89.596 -4.27878 67.1792 9.64332 52.7847L72.007 -11.7058Z",
                                fill: "white"
                            })]
                        })
                    })
                },
                pe = function(e) {
                    var n = e.className,
                        r = e.onClick;
                    return (0, a.jsx)("svg", {
                        className: n,
                        onClick: r,
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.4141 11.9999L18.9999 17.5857C19.3904 17.9762 19.3904 18.6094 18.9999 18.9999C18.6094 19.3904 17.9762 19.3904 17.5857 18.9999L11.9999 13.4141L6.41414 18.9999C6.02361 19.3904 5.39045 19.3904 4.99992 18.9999C4.6094 18.6094 4.6094 17.9762 4.99992 17.5857L10.5857 11.9999L4.99992 6.41414C4.6094 6.02361 4.6094 5.39045 4.99992 4.99992C5.39045 4.6094 6.02361 4.6094 6.41414 4.99992L11.9999 10.5857L17.5857 4.99992C17.9762 4.6094 18.6094 4.6094 18.9999 4.99992C19.3904 5.39045 19.3904 6.02361 18.9999 6.41414L13.4141 11.9999V11.9999Z",
                            fill: "#8C8C8C"
                        })
                    })
                },
                me = function(e) {
                    var n = "MultiContextProvider",
                        r = Object.keys(e),
                        t = r.reduceRight((function(r, t) {
                            var i = (0, l.createContext)(e[t]);
                            return Object.defineProperty(i, "displayName", {
                                get: function() {
                                    return "".concat(n, "(").concat(t, ")")
                                }
                            }), r[t] = i, r
                        }), {}),
                        i = function(e) {
                            var n = e.value,
                                i = e.children;
                            return r.reduceRight((function(e, r) {
                                return (0, l.createElement)(t[r].Provider, {
                                    value: n[r]
                                }, e)
                            }), i)
                        };
                    Object.defineProperty(i, "displayName", {
                        get: function() {
                            return n
                        }
                    });
                    return {
                        Provider: i,
                        useSubContext: function(e) {
                            return (0, l.useContext)(t[e])
                        },
                        get displayName() {
                            return n
                        },
                        set displayName(e) {
                            n = e
                        }
                    }
                }({
                    setIsConsecutive: re,
                    setSelection: re,
                    setSelectedCoupon: re,
                    close: re,
                    user: null,
                    subscriptionPlanId: "",
                    isConsecutive: !0,
                    selection: 365,
                    skuInfo: null,
                    coupons: null,
                    gifts: [],
                    selectedCoupon: null,
                    sourceInfo: null
                }),
                fe = function(e) {
                    return function(e, n) {
                        return e.useSubContext(n)
                    }(me, e)
                },
                he = function() {
                    var e = fe("close"),
                        n = fe("user"),
                        r = null === n || void 0 === n ? void 0 : n.nickName,
                        t = null === n || void 0 === n ? void 0 : n.isPremium,
                        i = (null === n || void 0 === n ? void 0 : n.avatar) || se.tU;
                    return (0, a.jsxs)("div", {
                        className: ue().header,
                        children: [(0, a.jsx)(de, {
                            className: ue().logo
                        }), (0, a.jsxs)("div", {
                            className: ue().user,
                            children: [(0, a.jsx)("div", {
                                className: ue().avatar,
                                style: {
                                    backgroundImage: 'url("'.concat(i, '")')
                                }
                            }), (0, a.jsxs)("div", {
                                className: ue().userInner,
                                children: [(0, a.jsx)("div", {
                                    className: ue().nick,
                                    children: r
                                }), (0, a.jsxs)("div", {
                                    className: ue().tag,
                                    children: [(0, a.jsx)("div", {
                                        className: "".concat(ue().icon, " ").concat(t ? ue().premium : ue().free)
                                    }), (0, a.jsx)("span", {
                                        children: t ? "\u5df2\u5f00\u901a" : "\u672a\u5f00\u901a"
                                    })]
                                })]
                            })]
                        }), (0, a.jsx)(pe, {
                            className: ue().close,
                            onClick: e
                        })]
                    })
                },
                ve = r(98624),
                ge = r.n(ve),
                Ae = function() {
                    var e = window.top;
                    return !(!e || e === window)
                },
                xe = "/premium-detail",
                Ce = function() {
                    var e = fe("close"),
                        n = (0, l.useCallback)((function(n) {
                            Ae() || location.pathname.replace(/\/$/, "") !== xe || (e(), n.preventDefault())
                        }), [e]);
                    return (0, a.jsxs)("div", {
                        className: ge().box,
                        children: [(0, a.jsx)("div", {
                            className: ge().title,
                            children: "\u70ed\u95e8\u7279\u6743"
                        }), (0, a.jsxs)("div", {
                            className: ge().more,
                            children: [(0, a.jsx)("a", {
                                className: ge().link,
                                onClick: n,
                                href: xe,
                                target: "_blank",
                                rel: "noreferrer",
                                children: "\u4e86\u89e3\u66f4\u591a"
                            }), (0, a.jsx)("div", {
                                className: ge().line
                            }), (0, a.jsx)("a", {
                                className: ge().link,
                                href: "https://support.leetcode.cn/hc/kb/section/1198435/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "\u5e38\u89c1\u95ee\u9898"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: ge().items,
                            children: [(0, a.jsxs)("div", {
                                className: ge().item,
                                children: [(0, a.jsx)("div", {
                                    className: "".concat(ge().icon, " ").concat(ge().right1)
                                }), (0, a.jsx)("div", {
                                    children: "\u540d\u4f01\u9762\u8bd5\u9898\u5e93"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: ge().item,
                                children: [(0, a.jsx)("div", {
                                    className: "".concat(ge().icon, " ").concat(ge().right2)
                                }), (0, a.jsx)("div", {
                                    children: "\u4f01\u4e1a\u6a21\u62df\u9762\u8bd5"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: ge().item,
                                children: [(0, a.jsx)("div", {
                                    className: "".concat(ge().icon, " ").concat(ge().right3)
                                }), (0, a.jsx)("div", {
                                    children: "\u9898\u76ee\u9762\u8bd5\u70ed\u5ea6"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: ge().item,
                                children: [(0, a.jsx)("div", {
                                    className: "".concat(ge().icon, " ").concat(ge().right4)
                                }), (0, a.jsx)("div", {
                                    children: "\u6781\u901f\u5224\u9898\u901a\u9053"
                                })]
                            })]
                        })]
                    })
                },
                be = r(42510),
                ye = r.n(be),
                we = r(5668),
                ke = r.n(we),
                _e = r(78036),
                je = r.n(_e),
                Be = r(88776),
                Ne = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                    return (0, Be.G)(Number((e / 100).toFixed(n))).toString()
                },
                Ie = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                        r = Ne(e, n),
                        t = (0, v.Z)(r.split("."), 2),
                        i = t[0],
                        o = t[1],
                        a = void 0 === o ? "" : o;
                    return Number(a) ? r : i
                },
                Ee = function(e) {
                    var n = e.value,
                        r = e.isActive;
                    return (0, a.jsxs)("div", {
                        className: "".concat(je().price, " ").concat(r ? je().on : je().off),
                        children: [(0, a.jsx)("span", {
                            className: je().unit,
                            children: "\xa5"
                        }), (0, a.jsx)("span", {
                            className: je().value,
                            children: Ie(n)
                        })]
                    })
                },
                Ze = function() {
                    var e = fe("skuInfo"),
                        n = fe("selection"),
                        r = fe("setSelection"),
                        t = 365 === n,
                        i = e.sku365.price,
                        o = (0, l.useCallback)((function() {
                            r(365)
                        }), [r]);
                    return (0, a.jsx)("div", {
                        className: "".concat(ye().item, " ").concat(ye().sku365, " ").concat(t ? ye().active : ""),
                        children: (0, a.jsxs)("div", {
                            className: ye().content,
                            onClick: o,
                            children: [(0, a.jsx)("div", {
                                className: ke().best,
                                children: "\u6700\u4f18\u60e0"
                            }), (0, a.jsx)("div", {
                                className: ye().days,
                                children: "365 \u5929"
                            }), (0, a.jsx)(Ee, {
                                value: i,
                                isActive: t
                            }), (0, a.jsxs)("div", {
                                className: ye().average,
                                children: ["\u4ec5 \xa5", Ie(i / 365), "/\u5929"]
                            })]
                        })
                    })
                },
                Se = function() {
                    var e = fe("skuInfo"),
                        n = fe("selection"),
                        r = fe("setSelection"),
                        t = 90 === n,
                        i = e.sku90.price,
                        o = (0, l.useCallback)((function() {
                            r(90)
                        }), [r]);
                    return (0, a.jsx)("div", {
                        className: "".concat(ye().item, " ").concat(ye().sku90, " ").concat(t ? ye().active : ""),
                        children: (0, a.jsxs)("div", {
                            className: ye().content,
                            onClick: o,
                            children: [(0, a.jsx)("div", {
                                className: ye().days,
                                children: "90 \u5929"
                            }), (0, a.jsx)(Ee, {
                                value: i,
                                isActive: t
                            }), (0, a.jsxs)("div", {
                                className: ye().average,
                                children: ["\u4ec5 \xa5", Ie(i / 90), "/\u5929"]
                            })]
                        })
                    })
                },
                Pe = r(94),
                De = r.n(Pe),
                Le = r(11985),
                Ve = r.n(Le),
                Me = r(25404),
                Re = r.n(Me),
                Ye = function(e) {
                    var n = e.value,
                        r = e.disabled,
                        t = e.onChange,
                        i = (0, l.useCallback)((function() {
                            t(!n)
                        }), [n, t]);
                    return (0, a.jsx)("button", {
                        className: "".concat(Re().box, " ").concat(n ? Re().on : "", " ").concat(r ? Re().disabled : ""),
                        onClick: r ? void 0 : i,
                        children: (0, a.jsx)("div", {
                            className: Re().inner
                        })
                    })
                },
                qe = function() {
                    var e = fe("isConsecutive"),
                        n = fe("setIsConsecutive"),
                        r = function() {
                            var e = fe("subscriptionPlanId"),
                                n = fe("skuInfo");
                            return !!(n && e && n.subscription && n.subscription.planId === e)
                        }();
                    return (0, a.jsxs)("div", {
                        className: "".concat(Ve().box, " ").concat(e ? Ve().on : Ve().off),
                        children: [(0, a.jsx)("span", {
                            className: Ve().title,
                            children: "\u8fde\u7eed\u5305\u6708"
                        }), (0, a.jsx)(Ye, {
                            value: e,
                            disabled: r,
                            onChange: n
                        })]
                    })
                },
                Oe = function() {
                    var e = 30 === fe("selection"),
                        n = fe("skuInfo").subscription,
                        r = (0, v.Z)(n.details, 2),
                        t = r[0],
                        i = r[1];
                    return (0, a.jsxs)("div", {
                        className: De().multi,
                        children: [(0, a.jsxs)("div", {
                            className: De().child,
                            children: [(0, a.jsxs)("div", {
                                className: ye().days,
                                children: [t.cycleDesc, "\u6bcf\u6708"]
                            }), (0, a.jsx)(Ee, {
                                value: t.price,
                                isActive: e
                            }), (0, a.jsxs)("div", {
                                className: ye().average,
                                children: ["\u4ec5 \xa5", Ie(t.price / 30), "/\u5929"]
                            })]
                        }), (0, a.jsx)("div", {
                            className: De().line
                        }), (0, a.jsxs)("div", {
                            className: De().child,
                            children: [(0, a.jsx)("div", {
                                className: ye().days,
                                children: i.cycleDesc
                            }), (0, a.jsx)(Ee, {
                                value: i.price,
                                isActive: e
                            }), (0, a.jsxs)("div", {
                                className: ye().average,
                                children: ["\u4ec5 \xa5", Ie(i.price / 30), "/\u5929"]
                            })]
                        })]
                    })
                },
                Te = function() {
                    var e = fe("selection"),
                        n = fe("skuInfo"),
                        r = 30 === e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: ye().days,
                            children: "30 \u5929"
                        }), (0, a.jsx)(Ee, {
                            value: n.sku30.price,
                            isActive: r
                        }), (0, a.jsxs)("div", {
                            className: ye().average,
                            children: ["\u4ec5 \xa5", Ie(n.sku30.price / 30), "/\u5929"]
                        })]
                    })
                },
                ze = function() {
                    var e = fe("skuInfo").subscription,
                        n = fe("isConsecutive"),
                        r = fe("selection"),
                        t = fe("setSelection"),
                        i = 30 === r,
                        o = n && e ? Oe : Te,
                        s = (0, l.useCallback)((function() {
                            t(30)
                        }), [t]);
                    return (0, a.jsxs)("div", {
                        className: "".concat(ye().item, " ").concat(ye().sku30, " ").concat(i ? ye().active : ""),
                        children: [(0, a.jsx)("div", {
                            className: ye().content,
                            onClick: s,
                            children: (0, a.jsx)(o, {})
                        }), !!e && (0, a.jsx)(qe, {})]
                    })
                },
                Fe = function() {
                    return (0, a.jsxs)("div", {
                        className: ye().box,
                        children: [(0, a.jsx)(Ze, {}), (0, a.jsx)(Se, {}), (0, a.jsx)(ze, {})]
                    })
                },
                He = r(56902),
                Ge = r.n(He),
                Je = r(30622),
                $e = r.n(Je),
                Ke = r(18868),
                Ue = r.n(Ke),
                Xe = function() {
                    var e = fe("coupons"),
                        n = fe("skuInfo"),
                        r = fe("selection"),
                        t = fe("isConsecutive");
                    return (0, l.useMemo)((function() {
                        if (t && 30 === r) return [];
                        if (!e) return [];
                        var i = 365 === r ? n.sku365 : 90 === r ? n.sku90 : n.sku30;
                        return (e.get(i.productId) || []).filter((function(e) {
                            return e.minExpense <= i.originalPrice
                        }))
                    }), [e, t, r, n])
                },
                We = function(e) {
                    var n = e.coupon,
                        r = e.onClick,
                        t = (0, l.useCallback)((function() {
                            r(n)
                        }), [n, r]);
                    return (0, a.jsxs)("div", {
                        className: Ue().item,
                        onClick: t,
                        children: [n.name, "\uff0c", "\u6ee1 ".concat(Ie(n.minExpense), " \u51cf ").concat(Ie(n.value), " \u5143")]
                    })
                },
                Qe = function(e) {
                    var n = e.onClose,
                        r = (0, l.useRef)(null);
                    ! function(e, n) {
                        (0, l.useEffect)((function() {
                            var r = e.current;
                            if (r) {
                                var t = function(e) {
                                    var t = e.target;
                                    (function(e, n) {
                                        for (var r = n; r;) {
                                            if (r === e) return !0;
                                            r = r.parentNode
                                        }
                                        return !1
                                    })(r, t) || n()
                                };
                                return document.addEventListener("click", t),
                                    function() {
                                        document.removeEventListener("click", t)
                                    }
                            }
                        }), [e, n])
                    }(r, n);
                    var t = Xe(),
                        i = fe("selectedCoupon"),
                        o = fe("setSelectedCoupon"),
                        s = (0, l.useCallback)((function(e) {
                            n(), o(e)
                        }), [n, o]),
                        c = (0, l.useCallback)((function() {
                            n(), o(null)
                        }), [n, o]);
                    return (0, a.jsxs)("div", {
                        className: Ue().box,
                        ref: r,
                        children: [t.map((function(e, n) {
                            return (0, a.jsx)(We, {
                                coupon: e,
                                onClick: s,
                                isActive: e === i
                            }, n)
                        })), (0, a.jsx)("div", {
                            className: Ue().item,
                            onClick: c,
                            children: "\u6682\u4e0d\u4f7f\u7528\u4f18\u60e0\u5238"
                        })]
                    })
                },
                en = function(e) {
                    var n = e.className;
                    return (0, a.jsxs)("svg", {
                        className: n,
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, a.jsxs)("g", {
                            clipPath: "url(#clip0_345_13705)",
                            children: [(0, a.jsx)("path", {
                                d: "M0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12H0Z",
                                fill: "#FFA116"
                            }), (0, a.jsx)("path", {
                                opacity: "0.5",
                                d: "M19.71 11.9699C19.38 11.9999 19.05 11.8499 18.87 11.5799C18.57 11.1899 18.66 10.6199 19.05 10.3499L19.08 10.3199C19.35 10.1399 19.44 9.7799 19.35 9.4799L19.05 8.6999C18.69 7.7699 17.64 7.2899 16.71 7.6499H16.68L10.59 9.9899C9.66001 10.3499 9.18001 11.3999 9.54001 12.3299L9.84001 13.1099C9.96001 13.4099 10.26 13.5899 10.59 13.5599C10.92 13.5299 11.25 13.6799 11.43 13.9499C11.73 14.3399 11.64 14.9099 11.25 15.1799L11.22 15.2099C10.95 15.3899 10.86 15.7499 10.95 16.0499L11.25 16.8299C11.61 17.7599 12.66 18.2399 13.59 17.8799L19.68 15.5399C20.61 15.1799 21.09 14.1299 20.73 13.1999L20.43 12.4199C20.31 12.1199 20.01 11.9099 19.71 11.9699Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M16.95 13.74C16.53 13.62 16.23 13.32 16.11 12.9C15.93 12.3 16.29 11.67 16.89 11.49H16.95C17.34 11.4 17.64 11.04 17.64 10.62V9.56998C17.64 8.27998 16.59 7.22998 15.3 7.22998H6.87C5.58 7.22998 4.53 8.27998 4.53 9.53998V10.59C4.53 11.01 4.83 11.37 5.22 11.46C5.64 11.58 5.94 11.88 6.06 12.3C6.24 12.9 5.88 13.53 5.28 13.71H5.22C4.83 13.8 4.53 14.16 4.53 14.58V15.63C4.53 16.92 5.58 17.97 6.84 17.97H15.24C16.53 17.97 17.58 16.92 17.58 15.66V14.61C17.64 14.19 17.34 13.83 16.95 13.74Z",
                                fill: "white"
                            }), (0, a.jsx)("path", {
                                d: "M8.49001 11.0699C8.49001 11.5499 8.88001 11.9699 9.39001 11.9699C9.90001 11.9699 10.29 11.5799 10.29 11.0699C10.29 10.5599 9.90001 10.1699 9.39001 10.1699C8.88001 10.1699 8.49001 10.5899 8.49001 11.0699ZM11.97 14.0699C11.97 14.5499 12.36 14.9699 12.87 14.9699C13.35 14.9699 13.77 14.5799 13.77 14.0699C13.77 13.5899 13.38 13.1699 12.87 13.1699C12.36 13.1699 11.97 13.5899 11.97 14.0699ZM9.06001 15.1499C8.91001 15.1499 8.73001 15.0899 8.61001 14.9699C8.37001 14.7299 8.37001 14.3399 8.64001 14.0999L12.66 10.2599C12.9 10.0199 13.32 10.0199 13.56 10.2899C13.8 10.5299 13.8 10.9199 13.53 11.1599L9.48001 14.9699C9.39001 15.0899 9.21001 15.1499 9.06001 15.1499Z",
                                fill: "#FFA116"
                            })]
                        }), (0, a.jsx)("defs", {
                            children: (0, a.jsx)("clipPath", {
                                id: "clip0_345_13705",
                                children: (0, a.jsx)("rect", {
                                    width: "24",
                                    height: "24",
                                    fill: "white"
                                })
                            })
                        })]
                    })
                },
                nn = function(e) {
                    var n = e.className;
                    return (0, a.jsx)("svg", {
                        className: n,
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2.87521 4.61584L7.0041 8.73258L11.1248 4.61584C11.3526 4.38803 11.7219 4.38803 11.9498 4.61584C12.1776 4.84364 12.1776 5.21299 11.9498 5.44079L7.41658 9.97001C7.18877 10.1978 6.81942 10.1978 6.59162 9.97001L2.05026 5.44079C1.82245 5.21299 1.82245 4.84364 2.05026 4.61584C2.27806 4.38803 2.64741 4.38803 2.87521 4.61584Z",
                            fill: "#8C8C8C"
                        })
                    })
                },
                rn = function(e) {
                    var n = e.className;
                    return (0, a.jsx)("svg", {
                        className: n,
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.1248 9.38685L6.9959 5.27011L2.87521 9.38685C2.6474 9.61465 2.27805 9.61465 2.05025 9.38685C1.82244 9.15904 1.82244 8.7897 2.05025 8.56189L6.58342 4.03267C6.81123 3.80486 7.18058 3.80486 7.40838 4.03267L11.9497 8.56189C12.1775 8.7897 12.1775 9.15904 11.9497 9.38685C11.7219 9.61465 11.3526 9.61465 11.1248 9.38685Z",
                            fill: "#8C8C8C"
                        })
                    })
                },
                tn = function() {
                    var e = (0, l.useState)(!1),
                        n = e[0],
                        r = e[1],
                        t = n ? rn : nn,
                        i = function() {
                            var e = fe("coupons");
                            return (0, l.useMemo)((function() {
                                if (!e) return 0;
                                var n = new Set,
                                    r = !0,
                                    t = !1,
                                    i = void 0;
                                try {
                                    for (var o, a = e[Symbol.iterator](); !(r = (o = a.next()).done); r = !0) {
                                        var l = (0, v.Z)(o.value, 2)[1],
                                            s = !0,
                                            c = !1,
                                            u = void 0;
                                        try {
                                            for (var d, p = l[Symbol.iterator](); !(s = (d = p.next()).done); s = !0) {
                                                var m = d.value;
                                                n.add(m.code)
                                            }
                                        } catch (f) {
                                            c = !0, u = f
                                        } finally {
                                            try {
                                                s || null == p.return || p.return()
                                            } finally {
                                                if (c) throw u
                                            }
                                        }
                                    }
                                } catch (f) {
                                    t = !0, i = f
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (t) throw i
                                    }
                                }
                                return n.size
                            }), [e])
                        }(),
                        o = Xe().length,
                        s = fe("selectedCoupon"),
                        c = (0, l.useCallback)((function() {
                            r(!0)
                        }), []),
                        u = (0, l.useCallback)((function() {
                            r(!1)
                        }), []);
                    return (0, a.jsxs)("div", {
                        className: $e().box,
                        children: [(0, a.jsx)(en, {
                            className: $e().icon
                        }), (0, a.jsx)("span", {
                            className: $e().title,
                            children: "\u4f18\u60e0\u5238"
                        }), (0, a.jsxs)("button", {
                            className: $e().count,
                            onClick: n ? void 0 : c,
                            children: [s ? (0, a.jsxs)("span", {
                                children: [s.name, "\uff0c", "\u6ee1 ".concat(Ie(s.minExpense), " \u51cf ").concat(Ie(s.value), " \u5143")]
                            }) : (0, a.jsxs)("span", {
                                children: ["\u5171 ", i, " \u5f20\uff0c", o, " \u5f20\u53ef\u7528"]
                            }), (0, a.jsx)(t, {
                                className: $e().icon
                            })]
                        }), n && (0, a.jsx)(Qe, {
                            onClose: u
                        })]
                    })
                },
                on = r(66044),
                an = r.n(on),
                ln = function() {
                    return (0, a.jsx)("div", {
                        className: an().line
                    })
                },
                sn = r(23251),
                cn = r.n(sn),
                un = r(79361),
                dn = r.n(un),
                pn = r(80129),
                mn = r(86912),
                fn = function() {
                    var e = (0, l.useState)(0),
                        n = e[0],
                        r = e[1],
                        o = function() {
                            var e = fe("sourceInfo"),
                                n = fe("selection"),
                                r = fe("selectedCoupon"),
                                t = fe("isConsecutive"),
                                i = fe("user"),
                                o = fe("skuInfo"),
                                a = e || {},
                                s = a.sourceId,
                                c = a.sourceType;
                            return (0, l.useMemo)((function() {
                                var e = i.token;
                                if (t && 30 === n) return {
                                    planId: o.subscription.planId,
                                    userToken: e,
                                    sourceId: s,
                                    sourceType: c
                                };
                                var a = 365 === n ? o.sku365 : 90 === n ? o.sku90 : o.sku30;
                                return {
                                    userToken: e,
                                    productId: a.productId,
                                    discountId: a.discountId,
                                    couponCode: null === r || void 0 === r ? void 0 : r.code,
                                    event: null === r || void 0 === r ? void 0 : r.event,
                                    sourceId: s,
                                    sourceType: c
                                }
                            }), [t, n, r, o, s, c, i])
                        }();
                    return (0, l.useEffect)((function() {
                        var e = function() {
                            var e = (0, ee.Z)((function() {
                                var e;
                                return (0, ne.__generator)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, (0, mn.I)()];
                                        case 1:
                                            return e = n.sent(), r(e + 6e4), [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e();
                        var n = setInterval(e, 6e4);
                        return function() {
                            clearInterval(n)
                        }
                    }), [o]), (0, l.useMemo)((function() {
                        return n ? function(e, n) {
                            var r = (0, pn.stringify)((0, i.Z)((0, t.Z)({}, e), {
                                    expires: n
                                })),
                                o = location.hostname;
                            return "https://".concat(o, "/premium-pay?") + r
                        }(o, n) : ""
                    }), [o, n])
                },
                hn = function() {
                    var e = fn();
                    return (0, a.jsx)(dn(), {
                        size: 120,
                        value: e,
                        level: "H",
                        renderAs: "svg"
                    })
                },
                vn = r(77072),
                gn = r.n(vn),
                An = function(e) {
                    var n = e.className;
                    return (0, a.jsx)("svg", {
                        className: n,
                        width: "18",
                        height: "18",
                        viewBox: "0 0 18 18",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            d: "M15.8571 11.4762L11.4457 9.99277C11.4457 9.99277 11.7847 9.48529 12.1466 8.49034C12.5086 7.49531 12.5604 6.94893 12.5604 6.94893L9.70476 6.92539V5.95003L13.1631 5.92565V5.23612H9.70407V3.66657H8.01028V5.23619H4.78357V5.92572L8.01028 5.9028V6.94893H5.42208V7.49524H10.7494C10.7494 7.49524 10.6907 7.93861 10.4865 8.49027C10.2823 9.04187 10.072 9.52495 10.072 9.52495C10.072 9.52495 7.57063 8.64949 6.25254 8.64949C4.93444 8.64949 3.33137 9.179 3.17594 10.7158C3.02126 12.2518 3.92268 13.0839 5.19265 13.3901C6.46277 13.698 7.63534 13.3871 8.65624 12.8873C9.6773 12.3882 10.6791 11.2537 10.6791 11.2537L15.8205 13.7505C15.6108 14.9686 14.5537 15.8583 13.3176 15.8571H4.68226C3.28104 15.8585 2.14412 14.7236 2.14282 13.3225V4.68234C2.14152 3.28101 3.27649 2.14407 4.67768 2.14282H13.3177C14.7189 2.14154 15.8559 3.27644 15.8571 4.67764V11.4762H15.8571ZM9.42774 10.6167C9.42774 10.6167 7.82283 12.6428 5.93182 12.6428C4.04001 12.6428 3.64284 11.6801 3.64284 10.9878C3.64284 10.2962 4.03611 9.54383 5.64574 9.43504C7.25447 9.32641 9.42855 10.6167 9.42855 10.6167H9.42773H9.42774Z",
                            fill: "#02A9F1"
                        })
                    })
                },
                xn = function(e) {
                    var n = e.className;
                    return (0, a.jsx)("svg", {
                        className: n,
                        width: "18",
                        height: "18",
                        viewBox: "0 0 18 18",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            d: "M6.95824 10.6099C6.88931 10.6447 6.81874 10.6613 6.73306 10.6613C6.54146 10.6613 6.38517 10.5585 6.29776 10.4043L6.26249 10.3363L4.88954 7.38475C4.87273 7.34994 4.87273 7.31681 4.87273 7.28201C4.87273 7.14437 4.97694 7.04154 5.11642 7.04154C5.16854 7.04154 5.22062 7.05813 5.27274 7.09293L6.88931 8.22549C7.01032 8.29342 7.14982 8.34485 7.30605 8.34485C7.39345 8.34485 7.4792 8.32824 7.5666 8.29342L15.1473 4.96549C13.7911 3.3869 11.5493 2.35718 9.01011 2.35718C4.87273 2.35718 1.5 5.11972 1.5 8.53227C1.5 10.3844 2.5083 12.0658 4.08966 13.1983C4.2106 13.2845 4.298 13.4388 4.298 13.593C4.298 13.6444 4.28118 13.6958 4.26274 13.7472C4.14178 14.2098 3.93172 14.966 3.93172 14.9992C3.91488 15.0505 3.89634 15.1185 3.89634 15.1881C3.89634 15.3258 4.00056 15.4286 4.14006 15.4286C4.19214 15.4286 4.24426 15.412 4.27954 15.3772L5.91294 14.4337C6.03396 14.3657 6.17344 14.3143 6.31294 14.3143C6.38178 14.3143 6.4692 14.3309 6.53812 14.3491C7.3027 14.5713 8.13794 14.6924 8.98992 14.6924C13.1273 14.6924 16.5 11.9298 16.5 8.51729C16.5 7.48756 16.1875 6.51087 15.648 5.652L7.01032 10.5751L6.95824 10.6099V10.6099Z",
                            fill: "#09BB07"
                        })
                    })
                },
                Cn = function() {
                    var e = fe("selection"),
                        n = fe("isConsecutive") && 30 === e;
                    return (0, a.jsx)("div", {
                        className: gn().box,
                        children: n ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(An, {
                                className: gn().icon
                            }), (0, a.jsxs)("span", {
                                className: gn().text,
                                children: ["\u4f7f\u7528", (0, a.jsx)("span", {
                                    className: gn().bold,
                                    children: "\u652f\u4ed8\u5b9d"
                                }), "\u626b\u7801\u652f\u4ed8"]
                            })]
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(xn, {
                                className: gn().icon
                            }), (0, a.jsx)(An, {
                                className: gn().icon
                            }), (0, a.jsxs)("span", {
                                className: gn().text,
                                children: ["\u4f7f\u7528", (0, a.jsx)("span", {
                                    className: gn().bold,
                                    children: "\u5fae\u4fe1/\u652f\u4ed8\u5b9d"
                                }), "\u626b\u7801\u652f\u4ed8"]
                            })]
                        })
                    })
                },
                bn = r(38078),
                yn = r.n(bn),
                wn = function() {
                    var e = fe("selection"),
                        n = fe("isConsecutive"),
                        r = 30 === e && n;
                    return (0, a.jsxs)("div", {
                        className: yn().box,
                        children: ["\u652f\u4ed8\u5373\u89c6\u4e3a\u60a8\u540c\u610f", (0, a.jsx)("a", {
                            className: yn().link,
                            href: "https://leetcode.cn/agreement/",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "\u300a\u529b\u6263\u670d\u52a1\u534f\u8bae\u300b"
                        }), r && (0, a.jsx)("a", {
                            className: yn().link,
                            href: "https://leetcode.cn/subscription-agreement/",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "\u300a\u8fde\u7eed\u8ba2\u9605\u670d\u52a1\u534f\u8bae \u300b"
                        })]
                    })
                },
                kn = r(43128),
                _n = r.n(kn),
                jn = r(27484),
                Bn = r.n(jn),
                Nn = r(32863),
                In = r.n(Nn),
                En = function() {
                    var e = fe("selection"),
                        n = fe("isConsecutive"),
                        r = fe("skuInfo");
                    return (0, l.useMemo)((function() {
                        return 365 === e ? r.sku365.price : 90 === e ? r.sku90.price : n ? r.subscription.details[0].price : r.sku30.price
                    }), [n, e, r])
                },
                Zn = function() {
                    var e = fe("selectedCoupon"),
                        n = En();
                    return (0, l.useMemo)((function() {
                        return e ? n - e.value : n
                    }), [n, e])
                },
                Sn = {
                    d: 1,
                    m: 30,
                    y: 365
                },
                Pn = function(e) {
                    try {
                        var n = JSON.parse(e || "{}").premiumRange;
                        return n ? function(e) {
                            var n = /^(\d+)([dmy])$/.exec(e);
                            if (n) {
                                var r = (0, v.Z)(n, 3),
                                    t = r[1],
                                    i = r[2];
                                return Number(t) * Sn[i]
                            }
                            return 30
                        }(n) : 0
                    } catch (r) {
                        return 0
                    }
                },
                Dn = function(e) {
                    var n = e.onClose,
                        r = fe("selection"),
                        t = function() {
                            var e = fe("user"),
                                n = e.premiumExpiredAt,
                                r = e.isPremium,
                                t = fe("gifts"),
                                i = fe("selection"),
                                o = (0, l.useMemo)((function() {
                                    return t.reduce((function(e, n) {
                                        return e + Pn(n.meta)
                                    }), 0)
                                }), [t]);
                            return (0, l.useMemo)((function() {
                                return (r && n || Date.now()) + i + o
                            }), [r, n, i, o])
                        }(),
                        i = Zn();
                    return (0, a.jsxs)("div", {
                        className: In().box,
                        onMouseLeave: n,
                        children: [(0, a.jsx)("div", {
                            className: In().cursor
                        }), (0, a.jsxs)("div", {
                            className: In().content,
                            children: [(0, a.jsx)("div", {
                                className: In().arrow,
                                children: (0, a.jsx)("span", {
                                    className: In().arrowContent
                                })
                            }), (0, a.jsxs)("div", {
                                className: In().inner,
                                children: [(0, a.jsx)("div", {
                                    className: In().title,
                                    children: "\u4ed8\u6b3e\u660e\u7ec6"
                                }), (0, a.jsxs)("div", {
                                    className: In().main,
                                    children: [(0, a.jsxs)("div", {
                                        children: [(0, a.jsxs)("span", {
                                            className: In().days,
                                            children: [r, "\u5929"]
                                        }), (0, a.jsxs)("span", {
                                            className: In().price,
                                            children: ["\xa5", Ie(i)]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: In().endTime,
                                        children: ["\u5230\u671f\u65f6\u95f4 ", Bn()(t).format("YYYY/MM/DD")]
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                Ln = function(e) {
                    var n = e.className;
                    return (0, a.jsx)("svg", {
                        className: n,
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M6.34571 4.31813L8.78494 6.91917C8.87938 7.01988 8.87431 7.17809 8.77359 7.27254C8.72725 7.31599 8.66611 7.34018 8.60258 7.34018H3.39697C3.2589 7.34018 3.14697 7.22825 3.14697 7.09018C3.14697 7.02732 3.17065 6.96677 3.2133 6.92058L5.61364 4.32097C5.80097 4.11808 6.1173 4.10547 6.32019 4.29281C6.32899 4.30094 6.33751 4.30939 6.34571 4.31813Z",
                            fill: "#8C8C8C"
                        })
                    })
                },
                Vn = function(e) {
                    var n = e.className;
                    return (0, a.jsx)("svg", {
                        className: n,
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M6.34571 7.68196C6.33751 7.69071 6.32899 7.69915 6.32019 7.70729C6.1173 7.89462 5.80097 7.88201 5.61364 7.67913L3.2133 5.07951C3.17065 5.03333 3.14697 4.97277 3.14697 4.90991C3.14697 4.77184 3.2589 4.65991 3.39697 4.65991H8.60258C8.66611 4.65991 8.72725 4.6841 8.77359 4.72755C8.87431 4.822 8.87938 4.98021 8.78494 5.08093L6.34571 7.68196Z",
                            fill: "#8C8C8C"
                        })
                    })
                },
                Mn = function() {
                    var e = (0, l.useState)(!1),
                        n = e[0],
                        r = e[1],
                        t = n ? Ln : Vn,
                        i = En(),
                        o = Zn(),
                        s = (0, l.useCallback)((function() {
                            r(!0)
                        }), []),
                        c = (0, l.useCallback)((function() {
                            r(!1)
                        }), []);
                    return (0, a.jsxs)("div", {
                        className: _n().box,
                        children: [(0, a.jsx)("span", {
                            children: "\u5e94\u4ed8\u91d1\u989d\uff1a"
                        }), (0, a.jsx)("span", {
                            className: _n().unit,
                            children: "\xa5"
                        }), (0, a.jsx)("span", {
                            className: _n().money,
                            children: Ie(o)
                        }), o < i && (0, a.jsxs)("span", {
                            className: _n().originalPrice,
                            children: ["\xa5", Ie(i)]
                        }), (0, a.jsxs)("button", {
                            className: _n().detail,
                            onMouseEnter: n ? void 0 : s,
                            children: [(0, a.jsx)("span", {
                                children: "\u660e\u7ec6"
                            }), (0, a.jsx)(t, {
                                className: _n().detailIcon
                            })]
                        }), n && (0, a.jsx)("span", {
                            className: _n().locator,
                            children: (0, a.jsx)(Dn, {
                                onClose: c
                            })
                        })]
                    })
                },
                Rn = function() {
                    return (0, a.jsxs)("div", {
                        className: cn().box,
                        children: [(0, a.jsx)("div", {
                            className: cn().left,
                            children: (0, a.jsx)(hn, {})
                        }), (0, a.jsxs)("div", {
                            className: cn().right,
                            children: [(0, a.jsx)(Mn, {}), (0, a.jsx)(Cn, {}), (0, a.jsx)(wn, {})]
                        })]
                    })
                },
                Yn = r(14425),
                qn = r.n(Yn),
                On = function() {
                    return (0, a.jsx)("svg", {
                        className: qn().icon,
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M9.99999 9.16675C10.4602 9.16675 10.8333 9.53984 10.8333 10.0001V13.3334C10.8333 13.7937 10.4602 14.1667 9.99999 14.1667C9.53975 14.1667 9.16666 13.7937 9.16666 13.3334V10.0001C9.16666 9.53984 9.53975 9.16675 9.99999 9.16675ZM9.99999 6.66675C10.4602 6.66675 10.8333 7.03984 10.8333 7.50008C10.8333 7.96032 10.4602 8.33341 9.99999 8.33341C9.53975 8.33341 9.16666 7.96032 9.16666 7.50008C9.16666 7.03984 9.53975 6.66675 9.99999 6.66675ZM9.99999 18.3334C5.39762 18.3334 1.66666 14.6025 1.66666 10.0001C1.66666 5.39771 5.39762 1.66675 9.99999 1.66675C14.6024 1.66675 18.3333 5.39771 18.3333 10.0001C18.3333 14.6025 14.6024 18.3334 9.99999 18.3334ZM9.99999 16.6667C13.6819 16.6667 16.6667 13.682 16.6667 10.0001C16.6667 6.31818 13.6819 3.33341 9.99999 3.33341C6.31809 3.33341 3.33332 6.31818 3.33332 10.0001C3.33332 13.682 6.31809 16.6667 9.99999 16.6667Z"
                        })
                    })
                },
                Tn = function() {
                    return (0, a.jsxs)("div", {
                        className: qn().box,
                        children: [(0, a.jsx)(On, {}), (0, a.jsx)("span", {
                            children: "\u652f\u4ed8\u6210\u529f\u540e\uff0c\u8bf7\u7acb\u5373\u300c\u5237\u65b0\u300d\u9875\u9762"
                        })]
                    })
                },
                zn = r(28522),
                Fn = r.n(zn),
                Hn = function() {
                    var e = fe("gifts");
                    return e.length ? (0, a.jsxs)("div", {
                        className: Fn().box,
                        children: [(0, a.jsx)("div", {
                            className: Fn().title,
                            children: "\u6d3b\u52a8\u8d60\u54c1"
                        }), (0, a.jsx)("div", {
                            className: Fn().list,
                            children: e.map((function(e, n) {
                                var r, t, i, o, l = (null === (r = e.images) || void 0 === r || null === (t = r.light) || void 0 === t ? void 0 : t[0]) || (null === (i = e.images) || void 0 === i || null === (o = i.dark) || void 0 === o ? void 0 : o[0]) || "";
                                return (0, a.jsx)("div", {
                                    className: Fn().item,
                                    style: {
                                        backgroundImage: 'url("'.concat(l, '")')
                                    },
                                    children: (0, a.jsx)("div", {
                                        className: Fn().name,
                                        children: e.name
                                    })
                                }, n)
                            }))
                        })]
                    }) : null
                },
                Gn = function() {
                    return (0, a.jsxs)("div", {
                        className: Ge().box,
                        children: [(0, a.jsx)(Hn, {}), (0, a.jsxs)("div", {
                            className: Ge().right,
                            children: [(0, a.jsx)(tn, {}), (0, a.jsx)(ln, {}), (0, a.jsx)(Rn, {}), (0, a.jsx)(Tn, {})]
                        })]
                    })
                },
                Jn = r(86468),
                $n = r.n(Jn),
                Kn = function() {
                    return (0, a.jsx)("svg", {
                        className: $n().icon,
                        width: "25",
                        height: "27",
                        viewBox: "0 0 25 27",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            d: "M9.46526 0.861929C8.55632 0.327248 7.43339 0.309062 6.50761 0.814031L-8.72318 9.12174C-9.41819 9.50083 -9.41801 10.4988 -8.72288 10.8777L-3.66666 13.6333V24.7033C-3.66666 25.293 -3.40858 25.8512 -2.9355 26.2033C-1.18706 27.5046 3.43128 30.5825 8 30.5825C12.5687 30.5825 17.1871 27.5046 18.9355 26.2033C19.4086 25.8512 19.6667 25.293 19.6667 24.7033V13.6333L21.9997 12V19.8333C21.9997 20.6618 22.6713 21.3333 23.4997 21.3333C24.3281 21.3333 24.9997 20.6618 24.9997 19.8333V10.5719C24.9997 10.2176 24.8121 9.88968 24.5067 9.71001L9.46526 0.861929ZM19.3667 10L8.95771 15.6776C8.36075 16.0032 7.63926 16.0032 7.0423 15.6776L-3.36666 10L7.0423 4.32238C7.63926 3.99677 8.36075 3.99677 8.95771 4.32239L19.3667 10ZM16.3333 23.1468C16.3333 23.4633 16.1855 23.7597 15.924 23.9381C14.7138 24.7642 11.0471 27.0819 8 27.0819C4.95293 27.0819 1.28617 24.7642 0.0760117 23.9381C-0.185452 23.7597 -0.333329 23.4633 -0.333329 23.1468V15.45L6.56234 19.215C7.45835 19.7043 8.54165 19.7043 9.43767 19.215L16.3333 15.45V23.1468Z"
                        })
                    })
                },
                Un = ["\u6559\u80b2\u4f18\u60e0\uff1a\xa5365/365 \u5929 \u52a0\u8d60\u793c\u54c1", "\u65b0\u7528\u6237\u6559\u80b2\u4f18\u60e0\uff1a\xa549/30 \u5929"],
                Xn = function() {
                    var e = (0, l.useState)(0),
                        n = e[0],
                        r = e[1];
                    return (0, l.useEffect)((function() {
                        var e = setInterval((function() {
                            r((function(e) {
                                return (e + 1) % Un.length
                            }))
                        }), 4e3);
                        return function() {
                            clearInterval(e)
                        }
                    }), []), (0, a.jsxs)("div", {
                        className: $n().box,
                        children: [(0, a.jsx)(Kn, {}), (0, a.jsxs)("div", {
                            className: $n().content,
                            children: [(0, a.jsx)("div", {
                                className: $n().title,
                                children: "\u5b66\u751f\u4e13\u4eab"
                            }), (0, a.jsx)("div", {
                                className: $n().desc,
                                children: Un[n]
                            }), (0, a.jsx)("a", {
                                className: $n().link,
                                href: "https://leetcode.cn/premium/edu-auth/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "\u7acb\u5373\u8ba4\u8bc1"
                            })]
                        })]
                    })
                },
                Wn = function() {
                    return (0, l.useEffect)((function() {
                        return document.body.style.overflow = "hidden",
                            function() {
                                document.body.style.overflow = ""
                            }
                    }), []), (0, ie.createPortal)((0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: le().mask
                        }), (0, a.jsxs)("div", {
                            className: le().box,
                            children: [(0, a.jsx)(he, {}), (0, a.jsx)(Fe, {}), (0, a.jsx)(Xn, {}), (0, a.jsx)(Gn, {}), (0, a.jsx)(Ce, {})]
                        })]
                    }), document.body)
                },
                Qn = r(7297),
                er = r(28687),
                nr = r(31955),
                rr = function() {
                    return nr.Z.get("__appToken__") || ""
                },
                tr = function() {
                    return nr.Z.get("csrftoken") || ""
                },
                ir = function() {
                    if (!J) {
                        var e = rr(),
                            n = tr();
                        J = new er.GraphQLClient("/graphql/noj-go/", {
                            credentials: "same-origin",
                            headers: {
                                "X-CSRFToken": n,
                                Authorization: e ? "Bearer ".concat(e) : ""
                            }
                        })
                    }
                    return J
                };

            function or() {
                var e = (0, Qn.Z)(["\n      query premiumProducts($slug: String!, $clusterKey: String, $token: String) {\n        premiumProduct(slug: $slug, clusterKey: $clusterKey, token: $token) {\n          product {\n            id\n            meta\n            discounts {\n              event\n              id\n              kind\n              price\n            }\n            name\n            price\n            spu {\n              id\n              virtual\n              meta\n            }\n          }\n          subscriptionPlan {\n            id\n            name\n            planType\n            signedHint\n            unsignHint\n            details {\n              cycleDesc\n              endCycle\n              fromCycle\n              price\n              startCycle\n            }\n          }\n        }\n      }\n    "]);
                return or = function() {
                    return e
                }, e
            }
            var ar, lr = {
                    d: 1,
                    m: 30,
                    y: 365
                },
                sr = function(e) {
                    var n, r, t = null === (n = e.product) || void 0 === n || null === (r = n.discounts) || void 0 === r ? void 0 : r[0],
                        i = e.product.price;
                    return {
                        productId: e.product.id,
                        price: (null === t || void 0 === t ? void 0 : t.price) || i,
                        originalPrice: i,
                        event: null === t || void 0 === t ? void 0 : t.event,
                        discountId: null === t || void 0 === t ? void 0 : t.id
                    }
                },
                cr = function(e) {
                    if (!e) throw Error("wrong data");
                    var n, r, t, i, o = !0,
                        a = !1,
                        l = void 0;
                    try {
                        for (var s, c = function() {
                                var e = s.value,
                                    o = function(e) {
                                        try {
                                            return e()
                                        } catch (n) {
                                            return
                                        }
                                    }((function() {
                                        return function(e) {
                                            var n = /^(\d+)([dmy])$/.exec(e);
                                            if (!n) return 0;
                                            var r = (0, v.Z)(n, 3),
                                                t = r[1],
                                                i = r[2];
                                            return Number(t) * lr[i]
                                        }(JSON.parse(e.product.spu.meta).premiumRange)
                                    }));
                                if (!o) return "continue";
                                if (30 === o) {
                                    if (!n) {
                                        n = sr(e);
                                        var a = e.subscriptionPlan;
                                        if (a) {
                                            var l = a.details;
                                            if (2 !== l.length) throw Error("wrong subscriptionPlan.details");
                                            i = {
                                                planId: a.id,
                                                details: l.map((function(e) {
                                                    return {
                                                        cycleDesc: e.cycleDesc,
                                                        price: e.price
                                                    }
                                                }))
                                            }
                                        }
                                    }
                                } else 90 === o ? r || (r = sr(e)) : 365 === o && (t || (t = sr(e)))
                            }, u = e[Symbol.iterator](); !(o = (s = u.next()).done); o = !0) c()
                    } catch (d) {
                        a = !0, l = d
                    } finally {
                        try {
                            o || null == u.return || u.return()
                        } finally {
                            if (a) throw l
                        }
                    }
                    if (!n || !r || !t) throw Error("wrong data");
                    return {
                        sku30: n,
                        sku90: r,
                        sku365: t,
                        subscription: i
                    }
                },
                ur = function() {
                    var e = (0, ee.Z)((function(e) {
                        var n, r;
                        return (0, ne.__generator)(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return n = e.userToken, [4, ir().request((0, er.gql)(or()), {
                                        slug: "premium",
                                        clusterKey: "official_premium_shop",
                                        token: n
                                    })];
                                case 1:
                                    return r = t.sent(), [2, cr(r.premiumProduct)]
                            }
                        }))
                    }));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                dr = function() {
                    if (!ar) {
                        var e = rr(),
                            n = tr();
                        ar = new er.GraphQLClient("/graphql/", {
                            credentials: "same-origin",
                            headers: {
                                "X-CSRFToken": n,
                                Authorization: e ? "Bearer ".concat(e) : ""
                            }
                        })
                    }
                    return ar
                };

            function pr() {
                var e = (0, Qn.Z)(["\n      query mySubscription($userToken: String) {\n        subscriptionMySignedContract(userToken: $userToken) {\n          plan {\n            id\n          }\n        }\n      }\n    "]);
                return pr = function() {
                    return e
                }, e
            }
            var mr = function() {
                var e = (0, ee.Z)((function(e) {
                    var n, r, t;
                    return (0, ne.__generator)(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return n = e.userToken, [4, dr().request((0, er.gql)(pr()), {
                                    userToken: n
                                })];
                            case 1:
                                return t = i.sent(), [2, (null === (r = t.subscriptionMySignedContract[0]) || void 0 === r ? void 0 : r.plan.id) || null]
                        }
                    }))
                }));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }();

            function fr() {
                var e = (0, Qn.Z)(["\n      query couponsByProducts($productIds: [ID]!, $userToken: String) {\n        userCouponsByProducts(productIds: $productIds, userToken: $userToken) {\n          productId\n          userCoupons {\n            ...userCoupon\n          }\n        }\n      }\n      ", "\n    "]);
                return fr = function() {
                    return e
                }, e
            }
            var hr = function() {
                    var e = (0, ee.Z)((function(e) {
                        var n, r, t, i, o, a, l, s, c, u;
                        return (0, ne.__generator)(this, (function(d) {
                            switch (d.label) {
                                case 0:
                                    return n = e.productIds, r = e.userToken, [4, dr().request((0, er.gql)(fr(), "\n    fragment userCoupon on UserCouponNode {\n  id\n  code\n  startAt\n  expiredAt\n  coupon {\n    id\n    name\n    event\n    minExpense\n    value\n    description\n  }\n}\n    "), {
                                        productIds: n,
                                        userToken: r
                                    })];
                                case 1:
                                    t = d.sent(), i = new Map, o = !0, a = !1, l = void 0;
                                    try {
                                        for (s = function() {
                                                var e = u.value,
                                                    n = e.productId,
                                                    r = e.userCoupons;
                                                if (!r) return "continue";
                                                i.set(n, r.map((function(e) {
                                                    return {
                                                        id: e.coupon.id,
                                                        productId: n,
                                                        code: e.code,
                                                        startAt: e.startAt,
                                                        expiredAt: e.expiredAt,
                                                        name: e.coupon.name,
                                                        event: e.coupon.event,
                                                        minExpense: e.coupon.minExpense,
                                                        value: e.coupon.value,
                                                        description: e.coupon.description
                                                    }
                                                })))
                                            }, c = t.userCouponsByProducts[Symbol.iterator](); !(o = (u = c.next()).done); o = !0) s()
                                    } catch (p) {
                                        a = !0, l = p
                                    } finally {
                                        try {
                                            o || null == c.return || c.return()
                                        } finally {
                                            if (a) throw l
                                        }
                                    }
                                    return [2, i]
                            }
                        }))
                    }));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                vr = r(82670);

            function gr() {
                var e = (0, Qn.Z)(["\n      query globalData {\n        userStatus {\n          isSignedIn\n          isPremium\n          realName\n          avatar\n          premiumExpiredAt\n        }\n        myTokens {\n          paymentUserToken\n        }\n      }\n    "]);
                return gr = function() {
                    return e
                }, e
            }
            var Ar = function() {
                var e = (0, ee.Z)((function() {
                    var e, n, r, t, i, o, a, l, s, c, u, d, p, m;
                    return (0, ne.__generator)(this, (function(f) {
                        switch (f.label) {
                            case 0:
                                return f.trys.push([0, 2, , 3]), [4, dr().request((0, er.gql)(gr()))];
                            case 1:
                                return a = f.sent(), [3, 3];
                            case 2:
                                if (l = f.sent(), !(0, vr.Z)(l, er.ClientError)) throw l;
                                return a = l.response, [3, 3];
                            case 3:
                                return s = !!(null === (e = a.userStatus) || void 0 === e ? void 0 : e.isSignedIn), c = !!(null === (n = a.userStatus) || void 0 === n ? void 0 : n.isPremium), u = (null === (r = a.userStatus) || void 0 === r ? void 0 : r.realName) || "", d = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.avatar) || "", p = (null === (i = a.myTokens) || void 0 === i ? void 0 : i.paymentUserToken) || "", m = (null === (o = a.userStatus) || void 0 === o ? void 0 : o.premiumExpiredAt) || 0, [2, {
                                    isSignedIn: s,
                                    isPremium: c,
                                    nickName: u,
                                    avatar: d,
                                    token: p,
                                    premiumExpiredAt: m
                                }]
                        }
                    }))
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }();

            function xr() {
                var e = (0, Qn.Z)(["\n      query giftsByEvent($productId: String!, $event: String!) {\n        giftByEvent(productId: $productId, event: $event) {\n          images {\n            dark\n            light\n          }\n          meta\n          name\n        }\n      }\n    "]);
                return xr = function() {
                    return e
                }, e
            }
            var Cr, br, yr, wr = function() {
                    var e = (0, ee.Z)((function(e) {
                        var n, r;
                        return (0, ne.__generator)(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return n = e.productId, r = e.event, [4, ir().request((0, er.gql)(xr()), {
                                        productId: n,
                                        event: r
                                    })];
                                case 1:
                                    return [2, t.sent().giftByEvent || []]
                            }
                        }))
                    }));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                kr = r(70341),
                _r = function() {
                    (window.top || window).location.replace(kr.Hb.signIn())
                },
                jr = function(e) {
                    var n = e.onReady,
                        r = e.initVisible,
                        i = e.defaultSourceInfo,
                        o = (0, l.useState)(null),
                        s = o[0],
                        c = o[1],
                        u = (0, l.useState)(i),
                        d = u[0],
                        p = u[1],
                        m = (0, l.useState)(null),
                        f = m[0],
                        h = m[1],
                        v = (0, l.useState)(null),
                        g = v[0],
                        A = v[1],
                        x = (0, l.useState)(""),
                        C = x[0],
                        b = x[1],
                        y = (0, l.useState)(!1),
                        w = y[0],
                        k = y[1],
                        _ = (0, l.useState)(365),
                        j = _[0],
                        B = _[1],
                        N = (0, l.useState)(null),
                        I = N[0],
                        E = N[1],
                        Z = (0, l.useState)(!!r),
                        S = Z[0],
                        P = Z[1],
                        D = (0, l.useState)([]),
                        L = D[0],
                        V = D[1];
                    (0, l.useEffect)((function() {
                        Cr = p
                    }), []), (0, l.useEffect)((function() {
                        (0, ee.Z)((function() {
                            var e;
                            return (0, ne.__generator)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, Ar()];
                                    case 1:
                                        return e = n.sent(), E(e), [2]
                                }
                            }))
                        }))()
                    }), []), (0, l.useEffect)((function() {
                        var e = null === I || void 0 === I ? void 0 : I.token;
                        e && (0, ee.Z)((function() {
                            var n;
                            return (0, ne.__generator)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, mr({
                                            userToken: e
                                        })];
                                    case 1:
                                        return (n = r.sent()) && b(n), [2]
                                }
                            }))
                        }))()
                    }), [I]), (0, l.useEffect)((function() {
                        s && s.subscription && C && s.subscription.planId === C && k(!1)
                    }), [C, s]), (0, l.useEffect)((function() {
                        var e = null === I || void 0 === I ? void 0 : I.token;
                        e && (0, ee.Z)((function() {
                            var n;
                            return (0, ne.__generator)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, ur({
                                            userToken: e
                                        })];
                                    case 1:
                                        return n = r.sent(), c(n), n.subscription && k(!0), [2]
                                }
                            }))
                        }))()
                    }), [I]), (0, l.useEffect)((function() {
                        if (s) {
                            var e = null === I || void 0 === I ? void 0 : I.token;
                            e && (0, ee.Z)((function() {
                                var n, r;
                                return (0, ne.__generator)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 2, , 3]), n = [s.sku30.productId, s.sku90.productId, s.sku365.productId], [4, hr({
                                                productIds: n,
                                                userToken: e
                                            })];
                                        case 1:
                                            return r = t.sent(), h(r), [3, 3];
                                        case 2:
                                            return t.sent(), h(new Map), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                }))
                            }))()
                        }
                    }), [s, I, j]);
                    var M = (0, l.useMemo)((function() {
                        if (s && (30 !== j || !w)) return 365 === j ? s.sku365 : 90 === j ? s.sku90 : s.sku30
                    }), [w, j, s]);
                    (0, l.useEffect)((function() {
                        var e = function() {
                            if (!f || !M) return null;
                            var e = f.get(M.productId);
                            if (!e) return null;
                            var n = M.originalPrice;
                            return e.find((function(e) {
                                return e.minExpense <= n
                            })) || null
                        }();
                        A(e)
                    }), [f, M]), (0, l.useEffect)((function() {
                        if (g && M) {
                            var e = g.event;
                            e ? (V([]), (0, ee.Z)((function() {
                                var n;
                                return (0, ne.__generator)(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 2, , 3]), [4, wr({
                                                productId: M.productId,
                                                event: e
                                            })];
                                        case 1:
                                            return n = r.sent(), V(n), [3, 3];
                                        case 2:
                                            return r.sent(), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                }))
                            }))()) : V([])
                        } else V([])
                    }), [M, g]), (0, l.useEffect)((function() {
                        I && !I.isSignedIn && _r()
                    }), [I]), (0, l.useEffect)((function() {
                        te.setVisible = P, null === n || void 0 === n || n()
                    }), [n]);
                    var R = (0, l.useCallback)((function() {
                        var e = window.gio;
                        if (e) {
                            var n = (0, oe.zo)(location.search);
                            e("page.set", (0, t.Z)({}, n))
                        }
                    }), []);
                    if ((0, l.useEffect)((function() {
                            if (Ae()) {
                                if (!S) return;
                                R()
                            }
                        }), [S, R]), (0, l.useEffect)((function() {
                            Ae() || R()
                        }), [R]), !S) return null;
                    if (!s || !I || !f || !I.isSignedIn) return null;
                    var Y = {
                        skuInfo: s,
                        user: I,
                        coupons: f,
                        gifts: L,
                        subscriptionPlanId: C,
                        isConsecutive: w,
                        setIsConsecutive: k,
                        selection: j,
                        setSelection: B,
                        selectedCoupon: g,
                        setSelectedCoupon: A,
                        sourceInfo: d,
                        close: function() {
                            var e, n;
                            Ae() ? null === (n = (e = window.top).LC_HIDE_PREMIUM_BOX) || void 0 === n || n.call(e) : P(!1)
                        }
                    };
                    return (0, a.jsx)(me.Provider, {
                        value: Y,
                        children: (0, a.jsx)(Wn, {})
                    })
                },
                Br = function(e) {
                    return br ? null === Cr || void 0 === Cr || Cr(e) : br = new Promise((function(n) {
                        var r = document.createElement("div");
                        document.body.appendChild(r), (0, ie.render)((0, a.jsx)(jr, {
                            onReady: n,
                            defaultSourceInfo: e
                        }), r)
                    })), br
                },
                Nr = function() {
                    var e = (0, ee.Z)((function(e) {
                        return (0, ne.__generator)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, Br(e)];
                                case 1:
                                    return n.sent(), te.setVisible(!0), [2]
                            }
                        }))
                    }));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                Ir = r(7906),
                Er = r(14751),
                Zr = function(e) {
                    var n = e.coverUrl;
                    return (0, a.jsxs)("div", {
                        className: "relative inline-block overflow-hidden rounded-sm",
                        children: [(0, a.jsx)("img", {
                            src: n || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E",
                            alt: "video cover",
                            className: "blur-xxs w-full max-w-[640px]"
                        }), (0, a.jsxs)("div", {
                            className: "bg-dark-gray-8 text-gray-1 dark:bg-gray-8 dark:text-dark-gray-1 absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center bg-opacity-80 text-sm",
                            children: ["\u5f53\u524d\u89c6\u9891\u4e3a\u529b\u6263 Plus \u4f1a\u5458\u4e13\u4eab\u5185\u5bb9\uff0c\u5347\u7ea7\u529b\u6263 Plus \u4f1a\u5458\u5373\u53ef\u89e3\u9501", (0, a.jsx)("button", {
                                onClick: function() {
                                    Ir.x.payPremiumVideoSolutionPremiumButtonClick(), Er.Z.report({
                                        event_key: "premium_pay_web_video_solution_premium_button_click",
                                        type: "click"
                                    }), Nr({
                                        sourceType: "video_solution_premium_button"
                                    })
                                },
                                className: "bg-brand-orange text-dark-gray-1 dark:text-gray-1 mt-5 cursor-pointer rounded-sm px-1 py-2 text-xs no-underline",
                                children: "\u5347\u7ea7 Plus \u4f1a\u5458"
                            })]
                        })]
                    })
                },
                Sr = (0, l.memo)((function(e) {
                    var n = e.uuid,
                        r = (0, l.useState)(!0),
                        t = r[0],
                        i = r[1];
                    (0, l.useEffect)((function() {
                        Q().then((function() {
                            i(!1)
                        }))
                    }), []);
                    var o = T(n),
                        s = o.isFetching,
                        c = o.data;
                    if (t || s) return (0, a.jsx)(F, {
                        message: "\u83b7\u53d6\u89c6\u9891\u4fe1\u606f\u4e2d..."
                    });
                    var u = null === c || void 0 === c ? void 0 : c.videosVideoInfo;
                    if (!u) return (0, a.jsx)(F, {
                        message: "\u89c6\u9891\u6b63\u5728\u5ba1\u6838\u4e2d..."
                    });
                    var d = u.videoInfo;
                    if (!d) return (0, a.jsx)(F, {
                        message: "\u89c6\u9891\u4fe1\u606f\u52a0\u8f7d\u5931\u8d25"
                    });
                    var p = d.coverUrl;
                    if (!u.canSee && u.articleChargeType !== z.MbN.Free) return (0, a.jsx)(Zr, {
                        coverUrl: p
                    });
                    switch (u.status) {
                        case z.hpD.Approved:
                            break;
                        case z.hpD.Pending:
                            return (0, a.jsx)(F, {
                                message: "\u89c6\u9891\u6b63\u5728\u5ba1\u6838\u4e2d..."
                            });
                        case z.hpD.Rejected:
                            return (0, a.jsx)(F, {
                                message: "\u89c6\u9891\u5ba1\u6838\u4e0d\u901a\u8fc7"
                            });
                        case z.hpD.Transcoding:
                            return (0, a.jsx)(F, {
                                message: "\u89c6\u9891\u6b63\u5728\u8f6c\u7801\u4e2d..."
                            });
                        case z.hpD.TranscodeFailed:
                            return (0, a.jsx)(F, {
                                message: "\u89c6\u9891\u8f6c\u7801\u5931\u8d25"
                            });
                        default:
                            return (0, a.jsx)(F, {
                                message: "\u83b7\u53d6\u89c6\u9891\u4fe1\u606f\u5931\u8d25"
                            })
                    }
                    var m = d.videoId,
                        f = u.playAuth;
                    if (!m || !f) return (0, a.jsx)(F, {
                        message: "\u89c6\u9891\u4fe1\u606f\u52a0\u8f7d\u5931\u8d25"
                    });
                    var h = u.videoSize,
                        v = h && h.width || 0,
                        g = h && h.height || 0;
                    return (0, a.jsx)(X, {
                        videoId: m,
                        playAuth: f,
                        coverUrl: p,
                        width: v,
                        height: g
                    }, [p, f, m].join("$$"))
                }), (function(e, n) {
                    return e.uuid === n.uuid
                })),
                Pr = "lc_ali_player_video",
                Dr = function() {
                    return function(e) {
                        (0, x.Vn)(e, "image", (function(e) {
                            var n = e.url;
                            if (function(e) {
                                    return new RegExp("^".concat("[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}", "$")).test(e)
                                }(n)) {
                                var r = e;
                                r.type = Pr, r.uuid = n, delete r.title, delete r.alt, delete r.url
                            }
                        }))
                    }
                },
                Lr = function(e, n) {
                    return e(n, Pr, {
                        uuid: n.uuid
                    })
                },
                Vr = r(30399),
                Mr = r(420),
                Rr = (r(3125), [{
                    regex: /begin\{align\}/g,
                    replacer: "begin{aligned}"
                }, {
                    regex: /end\{align\}/g,
                    replacer: "end{aligned}"
                }, {
                    regex: /\&le\;|\&leq\;/g,
                    replacer: "\u2264"
                }, {
                    regex: /\&ge\;|\&geq\;/g,
                    replacer: "\u2265"
                }, {
                    regex: /\&lt\;/g,
                    replacer: "<"
                }, {
                    regex: /\&gt\;/g,
                    replacer: ">"
                }, {
                    regex: /\&amp\;|\\\&|\&/g,
                    replacer: "\\&",
                    skipIf: function(e) {
                        var n = e.match(/\\begin\{[\s\S]+?\\end\{/g);
                        return !!n && n.some((function(e) {
                            return e.includes("&")
                        }))
                    }
                }, {
                    regex: /\s+\$\s+|^\$$/g,
                    replacer: "\\$"
                }, {
                    regex: /\\\#|\#/g,
                    replacer: "\\#"
                }]),
                Yr = function(e) {
                    return Rr.reduce((function(n, r) {
                        var t = r.regex,
                            i = r.replacer,
                            o = r.skipIf;
                        return o && o(e) ? n : n.replace(t, i)
                    }), e)
                },
                qr = function() {
                    var e = function(n, r) {
                        n.forEach((function(n) {
                            "element" === n.type && e(n.children, r), "text" === n.type && (n.value = r(n.value))
                        }))
                    };
                    return function(n) {
                        (0, x.Vn)(n, ["math", "inlineMath"], (function(n) {
                            var r, t = null === n || void 0 === n || null === (r = n.data) || void 0 === r ? void 0 : r.hChildren;
                            t && e(t, Yr)
                        }))
                    }
                },
                Or = function(e) {
                    var n = {};
                    return e.replace(/```[\s\S]+?```/g, (function(e) {
                        var r = "__CODE__BLOCK__".concat(Object.keys(n).length, "__");
                        return n[r] = e, r
                    })).replace(/(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$)/g, (function(e) {
                        return Boolean(e.match(/\\begin\{(aligned|align)\}/g)) ? e : e.replace(/\n+/g, " ").replace(/\s+/g, " ")
                    })).replace(/__CODE__BLOCK__\d+__/g, (function(e) {
                        return n[e]
                    }))
                },
                Tr = function(e) {
                    e.preprocessors.push(Or), e.remarkPlugins.push([Vr.Z, {
                        output: "html"
                    }]), e.remarkPlugins.push(qr), e.rehypePlugins.push([Mr.Z, {
                        output: "html"
                    }])
                },
                zr = r(81732),
                Fr = r(14924),
                Hr = r(40715),
                Gr = r(82781),
                Jr = r(9996),
                $r = r.n(Jr),
                Kr = l.forwardRef((function(e, n) {
                    return (0, a.jsx)("svg", (0, i.Z)((0, t.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M18.97 12.871l-12.96 7.29a1 1 0 01-1.49-.87V4.71a1 1 0 011.49-.872l12.96 7.29a1 1 0 010 1.743z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                Ur = r(75247),
                Xr = l.forwardRef((function(e, n) {
                    return (0, a.jsx)("svg", (0, i.Z)((0, t.Z)({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "1em",
                        height: "1em",
                        fill: "currentColor",
                        ref: n
                    }, e), {
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M6 3a1 1 0 00-1 1v16a1 1 0 001 1h4a1 1 0 001-1V4a1 1 0 00-1-1H6zm8 0a1 1 0 00-1 1v16a1 1 0 001 1h4a1 1 0 001-1V4a1 1 0 00-1-1h-4z",
                            clipRule: "evenodd"
                        })
                    }))
                })),
                Wr = r(67222),
                Qr = r(15371),
                et = r(19579),
                nt = function(e) {
                    return fetch(e).then((function(e) {
                        return e.blob()
                    })).then((function(e) {
                        return window.URL.createObjectURL(e)
                    }))
                },
                rt = function(e) {
                    var n = e.data,
                        r = e.children,
                        t = (0, l.useState)(!1),
                        i = t[0],
                        o = t[1],
                        s = (0, l.useState)(null),
                        c = s[0],
                        u = s[1];
                    return (0, l.useEffect)((function() {
                        if (!i && !c) {
                            o(!0);
                            var e = n.timeline.map((function(e) {
                                return e.image
                            })).map(nt);
                            Promise.all(e).then((function(e) {
                                u(e), o(!1)
                            })).catch((function(e) {
                                et.y.error("Error - failed to load solution diaporama", e)
                            }))
                        }
                    }), [n, i]), i || !c ? null : (0, a.jsx)(a.Fragment, {
                        children: r({
                            imageBlobUrls: c
                        })
                    })
                },
                tt = function(e) {
                    var n = e.data,
                        r = e.width,
                        t = e.height,
                        i = e.imageBlobUrls,
                        o = (0, v.Z)(l.useState(0), 2),
                        s = o[0],
                        c = o[1],
                        d = (0, v.Z)(l.useState(!1), 2),
                        p = d[0],
                        m = d[1],
                        f = (0, v.Z)(l.useState(!1), 2),
                        h = f[0],
                        g = f[1],
                        A = l.useRef(),
                        x = function() {
                            return n.timeline[s].duration
                        },
                        C = function(e) {
                            c(function(e) {
                                var r = n.timeline;
                                return (e %= r.length) < 0 && (e = r.length + e), e
                            }(e(s)))
                        },
                        b = function() {
                            m(!0), g(!0), A.current && clearTimeout(A.current), A.current = window.setTimeout((function() {
                                return C((function(e) {
                                    return e + 1
                                }))
                            }), x())
                        },
                        y = function() {
                            p ? (clearTimeout(A.current), A.current = void 0, m(!1)) : b()
                        };
                    (0, l.useEffect)((function() {
                        A.current && clearTimeout(A.current), p && (A.current = window.setTimeout((function() {
                            C((function(e) {
                                return e + 1
                            }))
                        }), x()))
                    }), [p, s]);
                    var w = (0, u.yI)("w-4 cursor-pointer", Qr.Cj.labelGrey6, Qr.Cj.labelGrey7Hover);
                    return (0, a.jsxs)("div", {
                        className: "border-label-1 relative mx-auto mb-6 flex flex-col overflow-hidden rounded-lg border-[1px]",
                        style: {
                            maxWidth: r
                        },
                        children: [(0, a.jsx)("div", {
                            onClick: y,
                            className: "rounded-lg",
                            style: {
                                maxHeight: t
                            },
                            children: (0, a.jsx)("img", {
                                alt: "Current",
                                className: "object-fit-contain !mb-0 max-h-full max-w-full",
                                src: i[s]
                            })
                        }), !h && (0, a.jsx)("div", {
                            onClick: y,
                            className: "absolute left-[50%] top-[50%] flex h-12 w-12 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-full bg-black/30",
                            children: (0, a.jsx)("div", {
                                className: "flex h-4 w-4 cursor-pointer items-center justify-center text-[35px]",
                                children: (0, a.jsx)(Kr, {
                                    className: "h-full w-full text-white"
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            className: "relative flex h-8 select-none items-center justify-around bg-black",
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center space-x-7",
                                children: [(0, a.jsx)(Ur.e, {
                                    onClick: function() {
                                        return C((function(e) {
                                            return e - 1
                                        }))
                                    },
                                    className: w
                                }), p ? (0, a.jsx)(Xr, {
                                    onClick: y,
                                    className: w
                                }) : (0, a.jsx)(Kr, {
                                    onClick: y,
                                    className: w
                                }), (0, a.jsx)(Wr.V, {
                                    onClick: function() {
                                        return C((function(e) {
                                            return e + 1
                                        }))
                                    },
                                    className: w
                                })]
                            }), (0, a.jsx)("div", {
                                className: "absolute right-0 mr-5 text-xs font-medium text-white",
                                children: "".concat(s + 1, " / ").concat(n.timeline.length)
                            })]
                        })]
                    })
                },
                it = function(e) {
                    var n = e.link,
                        r = e.width,
                        t = e.height,
                        i = (0, v.Z)(l.useState(), 2),
                        o = i[0],
                        s = i[1];
                    return (0, l.useEffect)((function() {
                        var e = function() {
                            var e = (0, ee.Z)((function() {
                                var e, r;
                                return (0, ne.__generator)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, fetch(n)];
                                        case 1:
                                            e = t.sent(), t.label = 2;
                                        case 2:
                                            return t.trys.push([2, 4, , 5]), [4, e.json()];
                                        case 3:
                                            return r = t.sent(), s(r), [3, 5];
                                        case 4:
                                            return t.sent(), [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [n]), o ? (0, a.jsx)(rt, {
                        data: o,
                        children: function(e) {
                            var n = e.imageBlobUrls;
                            return (0, a.jsx)(tt, {
                                data: o,
                                width: r,
                                height: t,
                                imageBlobUrls: n
                            })
                        }
                    }) : null
                },
                ot = "diaporama",
                at = function(e) {
                    var n = e.split("!?!");
                    return e = n.map((function(e, n) {
                        if (n % 2 === 0) return "".concat(e);
                        var r, t, i, o = e,
                            a = (0, v.Z)(function(e, n, r) {
                                var t, i = e.split(n);
                                if (r) {
                                    var o = [i.slice(0, -r).join(n)],
                                        a = i.slice(-r);
                                    t = o.concat(a)
                                } else t = i;
                                return t
                            }(o, ":", 1), 2),
                            l = a[0],
                            s = a[1];
                        if (/\d+,\d+/.test(s)) {
                            i = l;
                            var c, u = s.split(",").map((function(e) {
                                return parseInt(e, 10)
                            }));
                            r = (c = (0, v.Z)(u, 2))[0], t = c[1]
                        } else i = o, r = 640, t = Math.round(.75 * r);
                        return "<".concat(ot, ' link="').concat(i, '" width="').concat(r, '" height="').concat(t, '"></').concat(ot, ">")
                    })).join("")
                },
                lt = function(e, n) {
                    return e(n, ot, n.value)
                },
                st = r(9121),
                ct = r(60477),
                ut = r(4186),
                dt = r(43822),
                pt = function(e) {
                    var n = e.description,
                        r = e.onChange,
                        t = e.index,
                        i = e.selected,
                        o = e.useCheckbox;
                    return (0, a.jsxs)("div", {
                        onClick: r,
                        "data-idx": t,
                        className: "flex cursor-pointer items-center",
                        children: [(0, a.jsx)(dt.I, {
                            type: o ? "checkbox" : "radio",
                            checked: i,
                            className: "cursor-pointer"
                        }), (0, a.jsx)("label", {
                            className: (0, u.yI)("ml-6 cursor-pointer", Qr.Cj.label2),
                            dangerouslySetInnerHTML: {
                                __html: n
                            }
                        })]
                    })
                },
                mt = function(e) {
                    var n = e.isCorrect,
                        r = e.explanation;
                    return (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(st.b, {
                            color: n ? "green" : "red",
                            children: n ? "Correct." : "Wrong Answer."
                        }), (0, a.jsx)("div", {
                            className: (0, u.yI)("mt-4", Qr.Cj.label2),
                            dangerouslySetInnerHTML: {
                                __html: r
                            }
                        })]
                    })
                },
                ft = function(e) {
                    var n = e.data,
                        r = n.description,
                        t = n.choices,
                        i = n.checkbox,
                        o = n.answer,
                        s = n.explanation,
                        c = (0, l.useState)(Array(t.length).fill(!1)),
                        d = c[0],
                        p = c[1],
                        m = (0, l.useState)(null),
                        f = m[0],
                        h = m[1],
                        v = (0, l.useCallback)((function(e) {
                            var n = e.currentTarget.dataset.idx;
                            if (n) {
                                var r, t = Number(n);
                                i ? (r = d.slice())[t] = !r[t] : r = d.map((function(e, n) {
                                    return n === t
                                })), p(r)
                            }
                        }), [d, p, i]),
                        g = (0, l.useCallback)((function() {
                            p(Array(t.length).fill(!1)), h(null)
                        }), [p, h]),
                        A = (0, l.useCallback)((function() {
                            i && Array.isArray(o) ? h(d.every((function(e, n) {
                                return !(!e || -1 === o.indexOf(n)) || !e && -1 === o.indexOf(n)
                            }))) : h(d.indexOf(!0) === o)
                        }), [h, t, d, o, i]),
                        x = (0, l.useMemo)((function() {
                            return d.some((function(e) {
                                return e
                            }))
                        }), [d]);
                    return (0, a.jsxs)("div", {
                        className: "space-y-6",
                        children: [(0, a.jsxs)("div", {
                            className: "flex",
                            children: [(0, a.jsx)("div", {
                                className: (0, u.yI)("mr-4 flex h-[20px] items-center whitespace-nowrap rounded px-2 py-0.5", Qr.Cj.bgBlue0, Qr.Cj.labelBlueStandard),
                                children: "Multiple Choice Question"
                            }), (0, a.jsx)("div", {
                                className: Qr.Cj.label2,
                                dangerouslySetInnerHTML: {
                                    __html: r
                                }
                            })]
                        }), (0, a.jsx)("div", {
                            className: "ml-8 flex flex-col space-y-4",
                            children: t.map((function(e, n) {
                                return (0, a.jsx)(pt, {
                                    description: e.description,
                                    index: n,
                                    onChange: v,
                                    selected: d[n],
                                    useCheckbox: i
                                }, n)
                            }))
                        }), (0, a.jsxs)("div", {
                            className: "my-0 flex-col space-y-4",
                            children: [(0, a.jsxs)("div", {
                                className: "flex justify-end space-x-4",
                                children: [(0, a.jsxs)(ct.z, {
                                    className: "rounded-lg",
                                    onClick: g,
                                    children: [(0, a.jsx)(ut.t, {
                                        className: "mr-1.5 h-4 w-4"
                                    }), "Redo"]
                                }), (0, a.jsx)(ct.z, {
                                    className: "rounded-lg",
                                    onClick: A,
                                    disabled: !x,
                                    variant: "primary",
                                    children: "Submit"
                                })]
                            }), (0, a.jsx)("div", {
                                children: null === f ? null : (0, a.jsx)(mt, {
                                    isCorrect: f,
                                    explanation: s
                                })
                            })]
                        })]
                    })
                },
                ht = function(e) {
                    var n = e.data,
                        r = (0, l.useState)(null),
                        t = r[0],
                        i = r[1];
                    return (0, l.useEffect)((function() {
                        var e = function() {
                            var e = (0, ee.Z)((function() {
                                var e;
                                return (0, ne.__generator)(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 1, , 4]), e = JSON.parse(n), [3, 4];
                                        case 1:
                                            return r.sent(), [4, fetch(n)];
                                        case 2:
                                            return [4, r.sent().json()];
                                        case 3:
                                            return e = r.sent(), [3, 4];
                                        case 4:
                                            return i(e), [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [n]), t ? (0, a.jsx)(ft, {
                        data: t
                    }) : null
                },
                vt = "lc_mcqs",
                gt = /^\!mcq\!(.+)\!mcq\!$/,
                At = function() {
                    return function(e) {
                        (0, x.Vn)(e, "paragraph", (function(e) {
                            var n = e.children[0];
                            if (n && "text" === n.type) {
                                var r = String(n.value);
                                if (r) {
                                    var t = r.match(gt);
                                    if (t) {
                                        var i = e;
                                        i.type = vt, i.value = t[1], delete i.children
                                    }
                                }
                            }
                        }))
                    }
                },
                xt = function(e, n) {
                    return e(n, vt, {
                        data: n.value
                    })
                },
                Ct = r(11163),
                bt = r(31799),
                yt = r(99437),
                wt = r(80450),
                kt = r.n(wt);
            ! function(e) {
                e.QuestionDetail = "/problems/[slug]/"
            }(yr || (yr = {}));
            var _t = function() {
                    var e = (0, Ct.useRouter)();
                    return e.pathname.startsWith("/problems/[slug]/") ? function(e) {
                        var n, r = e.query,
                            t = {},
                            i = null !== (n = new URLSearchParams(window.location.search).get("source")) && void 0 !== n ? n : void 0;
                        return i && (t.source = i), t.eventName = "question_slug", t.event = r.slug, t
                    }(e) : {}
                },
                jt = function() {
                    (0, c.y)(kt());
                    var e = _t();
                    return (0, a.jsx)("div", {
                        className: "mb-6 flex w-full justify-center text-center",
                        children: (0, a.jsxs)("div", {
                            className: "relative flex min-h-[300px] max-w-[680px] flex-col justify-center overflow-hidden rounded-[13px] ",
                            children: [(0, a.jsx)("div", {
                                className: (0, u.yI)("z-base-negative-1 absolute h-full w-full opacity-10", kt().background)
                            }), (0, a.jsxs)("div", {
                                className: "flex flex-col items-center justify-center px-[10%] py-5",
                                children: [(0, a.jsx)("div", {
                                    className: "h-[44px] w-[42px]",
                                    children: (0, a.jsx)(yt.d, {
                                        className: (0, u.yI)("h-full w-full", Qr.Cj.labelBrandOrange)
                                    })
                                }), (0, a.jsx)("div", {
                                    className: (0, u.yI)("mt-3 text-xl font-medium", Qr.Cj.label1),
                                    children: "Subscribe to unlock"
                                }), (0, a.jsx)("div", {
                                    className: (0, u.yI)("text-md mt-2", Qr.Cj.label2),
                                    children: "Thanks for using LeetCode! To view this solution video you must subscribe to premium."
                                }), (0, a.jsx)("div", {
                                    className: "mt-9 flex flex-row space-x-2.5",
                                    children: (0, a.jsx)(ct.z, {
                                        variant: "premium",
                                        className: "inline-block px-4 py-[5px]",
                                        children: (0, a.jsx)("a", {
                                            className: "!text-white !no-underline",
                                            href: kr.Hb.premium(bt.D.QuestionDetailPremiumVideoSolution, (0, t.Z)({}, e)),
                                            children: "Subscribe"
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                },
                Bt = "lc_premium_only_video",
                Nt = function() {
                    return function(e) {
                        (0, x.Vn)(e, "element", (function(e, n, r) {
                            var t;
                            if ("div" === e.tagName) {
                                var i = ((null === (t = e.properties) || void 0 === t ? void 0 : t.className) || []).join(" ");
                                if (i && i.includes("video-preview")) {
                                    r.children.splice(n, 1, {
                                        type: "element",
                                        tagName: "lc_premium_only_video",
                                        children: []
                                    })
                                }
                            }
                        }))
                    }
                },
                It = r(79898),
                Et = function(e) {
                    var n = e.lang,
                        r = e.code;
                    return (0, a.jsx)("div", {
                        className: (0, u.yI)("font-menlo mb-6 rounded-lg px-3 py-2.5 text-sm", Qr.Cj.fill3),
                        children: (0, a.jsx)(It.B, {
                            lang: n,
                            code: r,
                            showCopyIcon: !0
                        })
                    })
                },
                Zt = r(30837),
                St = r(99622),
                Pt = r(75037),
                Dt = r(54375),
                Lt = r(67382),
                Vt = r(82532),
                Mt = r(14636),
                Rt = r(32022),
                Yt = r(47271),
                qt = r(55079),
                Ot = r(4937),
                Tt = r(80897),
                zt = r(91321),
                Ft = r(51338),
                Ht = r(10769),
                Gt = r(52247),
                Jt = r(44650),
                $t = r(66294),
                Kt = r(13952),
                Ut = r(39155),
                Xt = r(34085),
                Wt = {
                    javascript: St.Z,
                    python: Pt.Z,
                    cpp: Dt.Z,
                    c: Lt.Z,
                    java: Vt.Z,
                    json: Mt.Z,
                    sql: Xt.Z,
                    csharp: Rt.Z,
                    ruby: Yt.Z,
                    swift: qt.Z,
                    go: Ot.Z,
                    scala: Tt.Z,
                    kotlin: zt.Z,
                    rust: Ft.Z,
                    php: Ht.Z,
                    typescript: Gt.Z,
                    lisp: Jt.Z,
                    erlang: $t.Z,
                    elixir: Kt.Z,
                    dart: Ut.Z
                },
                Qt = Object.keys(Wt);
            Qt.forEach((function(e) {
                Zt.Z.registerLanguage(e, Wt[e])
            }));
            var ei, ni = "lc_code_snippet",
                ri = function() {
                    return function(e) {
                        (0, x.Vn)(e, "", (function(e, n, r) {
                            if ("code" === e.type && null != n && r) {
                                var t, i = e.value || "",
                                    o = null !== (t = e.lang) && void 0 !== t ? t : function(e) {
                                        return Zt.Z.highlightAuto(e, Qt).language
                                    }(i),
                                    a = e;
                                a.type = ni, a.lang = o, a.code = i, delete a.children
                            }
                        }))
                    }
                },
                ti = function(e, n) {
                    return e(n, ni, {
                        code: n.code,
                        lang: n.lang
                    })
                },
                ii = r(44930),
                oi = r(10137),
                ai = r.n(oi),
                li = function(e) {
                    var n = e.index,
                        r = e.selected,
                        t = e.title,
                        i = e.onClick;
                    (0, c.y)(ai());
                    var o = (0, l.useCallback)((function() {
                        i(n)
                    }), [n, i]);
                    return (0, a.jsx)("div", {
                        className: (0, u.Wy)("font-menlo relative flex h-10 cursor-pointer items-center justify-center px-3 font-medium transition-all", (0, Fr.Z)({}, Qr.Cj.label1, r), (0, Fr.Z)({}, Qr.Cj.label4, !r), (0, Fr.Z)({}, Qr.Cj.label1Hover, !r), ai().item),
                        onClick: r ? void 0 : o,
                        children: t
                    })
                },
                si = (0, l.memo)((function(e) {
                    var n = e.lang,
                        r = e.code,
                        t = e.visible;
                    return (0, a.jsx)("div", {
                        className: (0, u.yI)("px-3 py-2.5", Qr.Cj.fill3, {
                            hidden: !t
                        }),
                        children: (0, a.jsx)(It.B, {
                            lang: n,
                            code: r,
                            showCopyIcon: !0
                        })
                    })
                })),
                ci = (0, l.memo)((function(e) {
                    var n = e.codes,
                        r = (0, l.useState)(0),
                        o = r[0],
                        s = r[1],
                        c = n.length;
                    return (0, l.useEffect)((function() {
                        o >= c && s(0)
                    }), [o, c]), (0, a.jsxs)("div", {
                        className: "border-gray-3 dark:border-dark-gray-3 mb-6 overflow-hidden rounded-lg border text-sm",
                        children: [(0, a.jsx)("div", {
                            className: (0, u.yI)("flex select-none", Qr.Cj.bgLayer2),
                            children: n.map((function(e, n) {
                                var r = e.name;
                                return (0, a.jsx)(li, {
                                    index: n,
                                    selected: n === o,
                                    title: r,
                                    onClick: s
                                }, n)
                            }))
                        }), (0, a.jsx)(si, (0, i.Z)((0, t.Z)({}, n[o]), {
                            visible: !0
                        }))]
                    })
                }), (function(e, n) {
                    return function(e, n) {
                        if (e === n) return !0;
                        if (e.length !== n.length) return !1;
                        for (var r = e.length, t = 0; t < r; t++)
                            if (e[t] !== n[t]) return !1;
                        return !0
                    }(e.codes, n.codes)
                })),
                ui = "lc_grouped_code",
                di = /^\[([^\[\]]*)\]$/,
                pi = function(e) {
                    return !!e.shouldBeRemoved
                },
                mi = function() {
                    return function(e) {
                        var n = {
                            name: "",
                            codes: [],
                            length: 0,
                            startIndex: null,
                            prevIndex: null,
                            prevParent: null
                        };
                        return (0, x.Vn)(e, "", (function(e, r, i) {
                            if ("code" === e.type && e.meta && null != r && i) {
                                var o = e.meta.match(di);
                                if (o) {
                                    var a = e.lang || "",
                                        l = o[1].split("-"),
                                        s = "",
                                        c = "";
                                    l.length > 1 ? (s = l[0] || "EMPTY_GROUP_NAME", c = l.slice(1).join("-")) : c = l[0], (0, t.Z)({}, e).meta = "[".concat(c, "]");
                                    n.prevIndex === r - 1 && (null === n || void 0 === n ? void 0 : n.name) === s && (null === n || void 0 === n ? void 0 : n.prevParent) === i || (n = {
                                            name: "",
                                            codes: [],
                                            length: 0,
                                            startIndex: null,
                                            prevIndex: null,
                                            prevParent: null
                                        }), n.name = s, n.codes.push({
                                            lang: a,
                                            code: e.value,
                                            name: c.trim() || a && ii.O[a] || a || "Unnamed"
                                        }), n.length++, n.prevIndex = r, n.prevParent = i, null === n.startIndex && (n.startIndex = r),
                                        function(e) {
                                            if (null !== n.startIndex) {
                                                e.children.splice(n.startIndex, 1, {
                                                    type: ui,
                                                    codes: JSON.stringify(n.codes),
                                                    name: n.name
                                                });
                                                for (var r = n.length - 1; r > 0; r--) e.children[n.startIndex + r] && (e.children[n.startIndex + r].shouldBeRemoved = 1)
                                            }
                                        }(i)
                                }
                            }
                        })), (0, C.O)(e, {}, pi), e
                    }
                },
                fi = function(e, n) {
                    return e(n, ui, {
                        codes: n.codes
                    })
                },
                hi = r(11321),
                vi = r(62758),
                gi = r(48761),
                Ai = r(51590),
                xi = r(29321),
                Ci = r(11516),
                bi = function(e) {
                    var n = e.reason,
                        r = (0, hi.$G)("submissions", {
                            keyPrefix: "submissionPreview"
                        }).t,
                        t = (0, l.useMemo)((function() {
                            switch (n) {
                                case "missing":
                                    return [r("invalidSubmissionIdLabel"), r("missingSubmissionIdTooltip")];
                                case "non-fe":
                                    return [r("invalidSubmissionIdLabel"), r("nonFeSubmissionIdTooltip")];
                                default:
                                    return ["Unknown error", "Something went wrong"]
                            }
                        }), [n, r]),
                        i = t[0],
                        o = t[1];
                    return (0, a.jsx)("div", {
                        className: "flex w-full items-center justify-start",
                        children: (0, a.jsx)(vi.u, {
                            label: o,
                            placement: "top",
                            children: (0, a.jsx)("div", {
                                className: (0, u.yI)(Ci.nx.bgFillTertiary, Ci.nx.labelRed60, "rounded px-2 py-1 text-xs"),
                                children: i
                            })
                        })
                    })
                },
                yi = r(37438),
                wi = "lc_custom_component",
                ki = {
                    submission_preview: {
                        component: function(e) {
                            var n, r = e.submissionId,
                                t = e.inEditingMode,
                                i = (0, xi.P)(null !== r && void 0 !== r ? r : 0, {
                                    enabled: !!r
                                }).data,
                                o = null !== (n = null === i || void 0 === i ? void 0 : i.questionSlug) && void 0 !== n ? n : "",
                                l = (0, gi.o)(o);
                            return r ? l ? (0, a.jsx)(Ai.Q, {
                                submissionId: r,
                                className: "rounded-lg",
                                dynamicallyResizeIframe: !0,
                                showNavbar: !0,
                                canOpenInNewTab: !0,
                                canOpenInPanel: !t,
                                showCopyEmbedCode: !t
                            }) : (0, a.jsx)(bi, {
                                reason: "non-fe"
                            }) : (0, a.jsx)(bi, {
                                reason: "missing"
                            })
                        },
                        propNames: ["submissionId"]
                    },
                    submission_preview_only: {
                        component: function(e) {
                            var n = e.submissionId;
                            return n ? (0, a.jsx)(yi.x, {
                                submissionId: n,
                                className: "rounded-lg"
                            }) : null
                        },
                        propNames: ["submissionId"]
                    }
                },
                _i = /{{(.*?):(.*?)}}/,
                ji = function() {
                    return function(e) {
                        (0, x.Vn)(e, "paragraph", (function(e) {
                            var n, r = null === (n = e.children) || void 0 === n ? void 0 : n[0];
                            if (r && "text" === r.type) {
                                var t = String(r.value);
                                if (t) {
                                    var i = t.match(_i);
                                    if (i && !(i.length < 3)) {
                                        var o = i[1];
                                        if (ki[o]) {
                                            var a = e;
                                            a.type = wi, a.componentName = o, a.args = i[2], delete a.children
                                        }
                                    }
                                }
                            }
                        }))
                    }
                },
                Bi = function(e, n) {
                    var r = n.componentName,
                        t = n.args;
                    return e(n, wi, {
                        componentName: r,
                        args: t
                    })
                },
                Ni = new RegExp("//(?:".concat(["(?:www.|player.)?vimeo.com", "(?:www.)?youtube.com", "(?:www.)?leetcode.com", "(?:www.|jobs.)?leetcode-cn.com", "(?:www.|jobs.)?lingkou.com"].join("|"), ")")),
                Ii = function() {
                    if (!ei) {
                        var e, n = {
                            tagNames: ["dd", "del", "details", "div", "dl", "dt", "h1", "h2", "iframe", "img", "input", "ins", "meta", "path", "pre", "s", "span", "sub", "summary", "sup", "svg", ot, vt, Bt, ni, ui, Pr, D, wi],
                            attributes: (e = {
                                h1: ["id", "align"],
                                h2: ["id", "align"],
                                h3: ["id", "align"],
                                h4: ["id", "align"],
                                h5: ["id", "align"],
                                h6: ["id", "align"],
                                a: ["href", "id", "name", "target", "title", "aria-hidden", "rel"],
                                img: ["alt", "id", "src", "width", "height", "align", "valign", "title", "style"],
                                p: ["align"],
                                meta: ["name", "content"],
                                iframe: ["src", "frameborder", "allowfullscreen", "width", "height", "translate"],
                                input: ["checked", "class", "disabled", "type"],
                                div: ["id", "className", "math", "math-display"],
                                span: ["class", "style", "className", "math", "math-inline"],
                                pre: ["style"],
                                code: ["class", "style"],
                                td: ["colspan", "rowspan", "style"],
                                th: ["colspan", "rowspan", "style"],
                                del: ["cite", "datetime"],
                                ins: ["cite", "datetime"],
                                path: ["d"],
                                svg: ["aria-hidden", "height", "version", "width", "viewBox", "preserveAspectRatio"],
                                ol: ["start"]
                            }, (0, Fr.Z)(e, ot, ["width", "height", "link"]), (0, Fr.Z)(e, vt, ["data"]), (0, Fr.Z)(e, ni, ["code", "lang"]), (0, Fr.Z)(e, ui, ["codes"]), (0, Fr.Z)(e, Pr, ["uuid"]), (0, Fr.Z)(e, D, ["value"]), (0, Fr.Z)(e, wi, ["componentName", "args"]), e)
                        };
                        ei = $r()(Gr.R, n)
                    }
                    return ei
                },
                Ei = function() {
                    return function(e) {
                        (0, x.Vn)(e, "element", (function(e, n, r) {
                            var t;
                            "iframe" === e.tagName && null !== n && (String(null === (t = e.properties) || void 0 === t ? void 0 : t.src).match(Ni) || r.children.splice(n, 1))
                        }))
                    }
                },
                Zi = function() {
                    return function(e) {
                        (0, x.Vn)(e, "element", (function(e, n) {
                            var r, t, i;
                            "iframe" === e.tagName && null !== n && e.properties && (e.properties.allowfullscreen = null === (r = e.properties.allowfullscreen) || void 0 === r || r, e.properties.width = null !== (t = e.properties.width) && void 0 !== t ? t : 560, e.properties.height = null !== (i = e.properties.height) && void 0 !== i ? i : 315, e.properties.translate = "no")
                        }))
                    }
                },
                Si = "user-content-",
                Pi = function() {
                    return function(e) {
                        (0, x.Vn)(e, "element", (function(e) {
                            var n;
                            "string" === typeof(null === (n = e.properties) || void 0 === n ? void 0 : n.id) && e.properties.id.startsWith(Si) && (e.properties.id = e.properties.id.replace(Si, ""))
                        }))
                    }
                },
                Di = /^http(?!s):\/\/.*$/,
                Li = function() {
                    return function(e) {
                        (0, x.Vn)(e, "element", (function(e, n, r) {
                            var t;
                            if ("img" === e.tagName) {
                                var i = String(null === (t = e.properties) || void 0 === t ? void 0 : t.src);
                                if (i.match(Di)) {
                                    var o = {
                                        type: "element",
                                        tagName: "p",
                                        children: [{
                                            type: "text",
                                            value: i
                                        }]
                                    };
                                    r.children.splice(n, 1, o)
                                }
                            }
                        }))
                    }
                },
                Vi = function() {
                    return function(e) {
                        (0, x.Vn)(e, "element", (function(e) {
                            if ("img" === e.tagName && e.properties) {
                                var n = String(e.properties.src);
                                (n.startsWith("/assets/uploads/") || n.startsWith("/post/")) && (e.properties.src = "https://discuss.leetcode.com".concat(n))
                            }
                        }))
                    }
                },
                Mi = r(29815),
                Ri = r(74998),
                Yi = r.n(Ri),
                qi = r(14428),
                Oi = r(60496),
                Ti = [/http(?:s)?:\/\/(?:www.)?youtube.com\/watch\?v=[a-zA-Z0-9]+/g, /http(?:s)?:\/\/(?:www.)?vimeo.com\/(?:\d)+/g, /http(?:s)?:\/\/(?:www.)?dailymotion.com\/video\/(?:\S)+/g, /http(?:s)?:\/\/(?:www.)?youtu.be\/(?:\S)+/g].map((function(e) {
                    return "(?:".concat(e.source, ")")
                })),
                zi = new RegExp(Ti.join("|"), "g"),
                Fi = function() {
                    return function(e) {
                        (0, x.Vn)(e, "element", (function(e) {
                            if (["a", "p"].includes(e.tagName)) {
                                var n = e.children;
                                if (n) {
                                    for (var r, t = [], i = 0; i < n.length; i++) {
                                        var o = n[i];
                                        if ("text" === o.type) {
                                            var a = o.value.match(zi);
                                            if (a) {
                                                var l = a.map((function(e) {
                                                    var n = Yi()(e);
                                                    return n ? (0, Oi.b)(n, {
                                                        fragment: !0
                                                    }).children[0] : null
                                                }));
                                                t.push([i, (r = l, r.filter((function(e) {
                                                    return Boolean(e)
                                                })))])
                                            }
                                        }
                                    }
                                    qi.Z.reverse(t), t.forEach((function(e) {
                                        var r, t = (0, v.Z)(e, 2),
                                            i = t[0],
                                            o = t[1];
                                        o.length && (r = n).splice.apply(r, [i, 1].concat((0, Mi.Z)(o)))
                                    }))
                                }
                            }
                        }))
                    }
                },
                Hi = [/^https?:\/\/(?!(leetcode\.com))/, /^https?:\/\/(?!(leetcode\.cn))/].map((function(e) {
                    return "(?:".concat(e.source, ")")
                })),
                Gi = new RegExp(Hi.join("|"), "g"),
                Ji = function() {
                    return function(e) {
                        (0, x.Vn)(e, "element", (function(e) {
                            var n;
                            if ("a" === e.tagName) {
                                var r = null === (n = e.properties) || void 0 === n ? void 0 : n.href;
                                r && "string" === typeof r && ("/" === r.charAt(0) && "/" !== r.charAt(1) || r.match(Gi) || (e.properties = e.properties || {}, e.properties.rel = "noopener noreferrer nofollow ugc"))
                            }
                        }))
                    }
                },
                $i = ["leetcode.cn", "leetcode.com", "leetcode-cn.com", "lingkou.xyz", "lingkou.com", "lingkou.work"];

            function Ki(e) {
                if (!e.startsWith("http") && !e.startsWith("www")) return e;
                if ($i.find((function(n) {
                        return e.match(n)
                    }))) return e;
                var n = encodeURIComponent(decodeURIComponent(e));
                return "/link/?target=".concat(n)
            }
            var Ui = r(32180),
                Xi = function(e) {
                    var n = e.onError,
                        r = e.src,
                        i = e.alt,
                        s = (0, o.Z)(e, ["onError", "src", "alt"]),
                        c = (0, l.useState)(!1),
                        u = c[0],
                        d = c[1],
                        p = (0, l.useCallback)((function(e) {
                            d(!0), null === n || void 0 === n || n(e)
                        }), [n]);
                    return (0, a.jsx)("img", (0, t.Z)({
                        onError: u ? void 0 : p,
                        src: u ? "data:image/svg+xml,%3Csvg height='150' viewBox='0 0 150 150' width='150' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m2465 2286.42347-18.95363-18.92555-50.0112 43.79935-24.62708-24.5906-33.41155 24.5906-22.99654-17.22567v-73.0716c0-2.20914 1.79086-4 4-4h142c2.20914 0 4 1.79086 4 4zm-122-25.59081c5.52285 0 10-4.47052 10-9.98518 0-5.51467-4.47715-9.98519-10-9.98519s-10 4.47052-10 9.98519c0 5.51466 4.47715 9.98518 10 9.98518zm122 40.89296v61.27438c0 2.20914-1.79086 4-4 4h-142c-2.20914 0-4-1.79086-4-4v-53.62625l22.99654 17.22567 33.41155-24.5906 24.62708 24.5906 50.0112-43.79935z' fill='%23eee' fill-rule='evenodd' transform='translate(-2315 -2217)'/%3E%3C/svg%3E" : r,
                        alt: i || ""
                    }, (0, Ui.Z)(s, "node")))
                },
                Wi = r(59232),
                Qi = r(36012),
                eo = r(20557),
                no = function(e) {
                    var n = e.heading;
                    return function(e) {
                        var r = e.children || [],
                            t = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, l = r[Symbol.iterator](); !(t = (a = l.next()).done); t = !0) {
                                var s = a.value;
                                if ("paragraph" === s.type && !(s.children.length > 1)) {
                                    var c = s.children[0];
                                    if ("text" === c.type) {
                                        var u = (c.value || "").trim();
                                        if (u && "[TOC]" === u.toLocaleUpperCase()) {
                                            s.type = "heading", s.depth = 4, c.value = n, s.toc_temp_heading = !0;
                                            break
                                        }
                                    }
                                }
                            }
                        } catch (d) {
                            i = !0, o = d
                        } finally {
                            try {
                                t || null == l.return || l.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                    }
                },
                ro = function() {
                    return function(e) {
                        (0, x.Vn)(e, "heading", (function(e, n, r) {
                            if (e.toc_temp_heading) return e.type = "hr", e.children[0].value = "", r.children.splice(n, 1), r.children.splice(n + 1, 0, e), eo.BK
                        }))
                    }
                },
                to = r(43832),
                io = r(73582),
                oo = r(24974),
                ao = r(69485),
                lo = r(58420),
                so = r(134),
                co = function(e) {
                    var n = e.tagName,
                        r = e.anchor,
                        l = e.children,
                        s = (0, o.Z)(e, ["tagName", "anchor", "children"]),
                        c = (0, hi.$G)("common").t,
                        u = (0, lo.pm)().toast,
                        d = (0, v.Z)((0, oo.c)(""), 2)[1],
                        p = (0, ao.z)((function() {
                            setTimeout((function() {
                                d(window.location.href), u({
                                    variant: "success",
                                    description: c("copied"),
                                    duration: 2e3
                                })
                            }), 10)
                        })),
                        m = n;
                    return (0, a.jsxs)(m, (0, i.Z)((0, t.Z)({}, s), {
                        className: "group/heading relative",
                        children: [(0, a.jsx)("a", {
                            href: "#".concat(r),
                            onClick: p,
                            className: "!text-sd-muted-foreground absolute right-full top-1/2 -translate-y-1/2 cursor-pointer pr-0.5 text-xs opacity-0 group-hover/heading:opacity-100",
                            "aria-hidden": "true",
                            tabIndex: -1,
                            children: (0, a.jsx)(so.e, {
                                variant: "12px",
                                spacing: "square",
                                icon: io.nNP
                            })
                        }), l]
                    }))
                },
                uo = function(e) {
                    var n, r, i = e.node,
                        l = (0, o.Z)(e, ["node"]),
                        s = i.tagName;
                    return "string" !== typeof(null === i || void 0 === i || null === (n = i.properties) || void 0 === n ? void 0 : n.id) ? (0, a.jsx)(s, (0, t.Z)({}, l)) : (0, a.jsx)(co, (0, t.Z)({
                        tagName: s,
                        anchor: null === i || void 0 === i || null === (r = i.properties) || void 0 === r ? void 0 : r.id
                    }, l))
                },
                po = r(55796),
                mo = function() {
                    return function(e) {
                        (0, x.Vn)(e, "element", (function(e, n, r) {
                            var t;
                            if ("user-content-footnote-label" === (null === (t = e.properties) || void 0 === t ? void 0 : t.id)) return r.children.splice(n, 1), eo.BK
                        }))
                    }
                },
                fo = r(99883),
                ho = r(68779),
                vo = r(42651),
                go = r(59421),
                Ao = r(93769),
                xo = r(41435),
                Co = function(e) {
                    var n, r = e.headings,
                        t = (0, Ao.z2)((function(e) {
                            return e.questionSlug
                        })),
                        i = null === (n = (0, go.K)(t).data) || void 0 === n ? void 0 : n.title,
                        o = (0, l.useState)(null),
                        s = o[0],
                        c = o[1];
                    (0, l.useEffect)((function() {
                        var e = document.querySelector("#editorial-quick-navigation");
                        e && c(e)
                    }), []);
                    var d = (0, l.useState)(!1),
                        p = d[0],
                        m = d[1];
                    return s ? (0, a.jsx)(vo.h, {
                        container: s,
                        asChild: !0,
                        children: (0, a.jsx)(xo.J2, {
                            open: p,
                            onOpenChange: m,
                            align: "start",
                            className: "p-2",
                            content: (0, a.jsx)("div", {
                                className: "flex w-full flex-col items-start",
                                children: r.map((function(e) {
                                    return (0, a.jsxs)(l.Fragment, {
                                        children: [(0, a.jsx)("a", {
                                            href: "#".concat(e.id),
                                            className: (0, u.yI)("text-sd-popover-foreground hover:text-sd-blue-500 w-full px-2 py-1 text-sm", {
                                                "font-semibold": 1 === e.depth,
                                                "text-sd-muted-foreground pl-6": 3 === e.depth
                                            }),
                                            target: "_self",
                                            onClick: function() {
                                                return m(!1)
                                            },
                                            children: e.text
                                        }), 1 === e.depth && (0, a.jsx)("div", {
                                            className: "w-full px-2 py-1",
                                            children: (0, a.jsx)("div", {
                                                className: "bg-sd-border h-px w-full"
                                            })
                                        })]
                                    }, e.id)
                                }))
                            }),
                            children: (0, a.jsx)("div", {
                                children: (0, a.jsx)(vi.u, {
                                    label: "Quick Navigator",
                                    placement: "top",
                                    children: (0, a.jsxs)("div", {
                                        className: "text-sd-muted-foreground hover:text-sd-foreground flex flex-none cursor-pointer items-center gap-2",
                                        children: [(0, a.jsx)(so.e, {
                                            className: "flex-none",
                                            variant: "14px",
                                            padding: "square",
                                            icon: ho.elf
                                        }), (0, a.jsx)("div", {
                                            className: "truncate text-sm",
                                            children: i
                                        })]
                                    })
                                })
                            })
                        })
                    }) : null
                },
                bo = "lc_quick_nav",
                yo = function() {
                    return function(e) {
                        var n = [];
                        (0, x.Vn)(e, "element", (function(e) {
                            var r;
                            ["h1", "h2", "h3"].includes(e.tagName) && "string" === typeof(null === (r = e.properties) || void 0 === r ? void 0 : r.id) && n.push({
                                id: e.properties.id,
                                depth: Number(e.tagName[1]),
                                text: (0, fo.B)(e)
                            })
                        }));
                        var r = {
                            type: "element",
                            tagName: bo,
                            children: [],
                            headings: n
                        };
                        e.children.push(r)
                    }
                },
                wo = function(e) {
                    var n = {
                        remarkPlugins: [],
                        rehypePlugins: [],
                        remarkRehypeOptions: {
                            handlers: {}
                        },
                        components: {},
                        preprocessors: []
                    };
                    return e.linkSift && (n.transformLinkUri = Ki), e.linkTargetBlank && (n.linkTarget = function(e) {
                        return e.startsWith("#") ? "_self" : "_blank"
                    }), e.mcqs && function(e) {
                        e.remarkPlugins.push(At), e.remarkRehypeOptions.handlers.lc_mcqs = xt, e.components.lc_mcqs = ht
                    }(n), e.customComponent && function(e, n) {
                        e.remarkPlugins.push(ji), e.remarkRehypeOptions.handlers.lc_custom_component = Bi, e.components.lc_custom_component = function(e) {
                            var r = e.node.properties,
                                o = r.componentName,
                                l = r.args,
                                s = ki[o].component,
                                c = l.split(":"),
                                u = ki[o].propNames.reduce((function(e, n, r) {
                                    return (0, i.Z)((0, t.Z)({}, e), (0, Fr.Z)({}, n, null === c || void 0 === c ? void 0 : c[r]))
                                }), {});
                            return (0, a.jsx)(s, (0, i.Z)((0, t.Z)({}, u), {
                                inEditingMode: n
                            }))
                        }
                    }(n, e.inEditingMode), e.diaporama && function(e) {
                        e.preprocessors.push(at), e.remarkRehypeOptions.handlers.diaporama = lt, e.components.diaporama = it
                    }(n), e.imageSize && function(e) {
                        e.remarkPlugins.push(k), e.remarkRehypeOptions.handlers.image = _
                    }(n), e.slides && function(e) {
                        e.remarkPlugins.push(L), e.remarkRehypeOptions.handlers.lc_slides = V, e.components.lc_slides = P
                    }(n), e.normalVideo && function(e) {
                        e.remarkPlugins.push(q), e.remarkRehypeOptions.handlers.lc_normal_video = O, e.components.lc_normal_video = R
                    }(n), e.aliPlayerVideo && function(e) {
                        e.remarkPlugins.push(Dr), e.remarkRehypeOptions.handlers.lc_ali_player_video = Lr, e.components.lc_ali_player_video = Sr
                    }(n), e.math && Tr(n), e.groupedCode && function(e) {
                        e.remarkPlugins.push(mi), e.remarkRehypeOptions.handlers.lc_grouped_code = fi, e.components.lc_grouped_code = function(e) {
                            var n = e.node,
                                r = JSON.parse(n.properties.codes);
                            return (0, a.jsx)(ci, {
                                codes: r
                            })
                        }
                    }(n), e.preserveLineBreaks && n.remarkPlugins.push(h.Z), e.gfm && function(e) {
                        e.remarkPlugins.push(po.Z), e.rehypePlugins.push(mo)
                    }(n), e.highlight && function(e) {
                        e.remarkPlugins.push(ri), e.remarkRehypeOptions.handlers[ni] = ti, e.components[ni] = function(e) {
                            var n = e.node;
                            return (0, a.jsx)(Et, {
                                lang: n.properties.lang,
                                code: n.properties.code
                            })
                        }
                    }(n), e.html && (! function(e) {
                        e.rehypePlugins.push(zr.Z)
                    }(n), e.keyword && (0, to.Q)(n)), e.premiumOnlyVideo && function(e) {
                        e.rehypePlugins.push(Nt), e.components.lc_premium_only_video = jt
                    }(n), e.embedVideos && function(e) {
                        e.rehypePlugins.push(Fi)
                    }(n), e.httpsImagesOnly && function(e) {
                        e.rehypePlugins.push(Li)
                    }(n), e.nodebbImageTransformation && function(e) {
                        e.rehypePlugins.push(Vi)
                    }(n), e.relAttribute && function(e) {
                        e.rehypePlugins.push(Ji)
                    }(n), e.htmlSanitization && function(e) {
                        e.rehypePlugins.push(Pi), e.rehypePlugins.push([Hr.Z, Ii()]), e.rehypePlugins.push(Ei), e.rehypePlugins.push(Zi)
                    }(n), e.brokenImageHolder && function(e) {
                        e.components.img = Xi
                    }(n), e.toc && function(e) {
                        var n = "LC_TOC_PLACEHOLDER_".concat(Math.floor(1e5 * Math.random()));
                        e.remarkPlugins.push([no, {
                            heading: n
                        }]), e.remarkPlugins.push([Wi.Z, {
                            heading: n,
                            ordered: !0
                        }]), e.remarkPlugins.push(ro), e.rehypePlugins.push(Qi.Z)
                    }(n), e.headingAnchorLink && function(e) {
                        e.components.h1 = e.components.h2 = e.components.h3 = uo
                    }(n), e.quickNavigation && function(e) {
                        e.rehypePlugins.push(yo), e.components.lc_quick_nav = function(e) {
                            var n = e.node;
                            return (0, a.jsx)(Co, {
                                headings: n.headings
                            })
                        }
                    }(n), n
                },
                ko = r(94712),
                _o = r.n(ko),
                jo = function(e) {
                    var n = wo(e),
                        r = n.preprocessors,
                        d = (0, o.Z)(n, ["preprocessors"]),
                        p = r.length ? function(e) {
                            return r.reduce((function(e, n) {
                                return n(e)
                            }), e)
                        } : function(e) {
                            return e
                        },
                        m = function(e) {
                            var n = e.content,
                                r = e.customStyles;
                            (0, c.y)(_o()), (0, c.y)(r);
                            var o = (0, l.useMemo)((function() {
                                return p(n)
                            }), [n]);
                            return (0, a.jsx)(f, {
                                className: "flex w-full justify-center p-4",
                                children: (0, a.jsx)(s.D, (0, i.Z)((0, t.Z)({}, d), {
                                    className: (0, u.yI)(_o().markdown, null === r || void 0 === r ? void 0 : r.markdown),
                                    children: o
                                }))
                            })
                        };
                    return (0, l.memo)(m)
                }
        },
        43832: function(e, n, r) {
            "use strict";
            r.d(n, {
                Q: function() {
                    return _
                }
            });
            var t, i = r(26042),
                o = r(69396),
                a = r(99534),
                l = r(85893),
                s = r(67294),
                c = r(93769),
                u = r(98819),
                d = r(12922),
                p = r(72058),
                m = r(69485),
                f = r(83269),
                h = r(88525),
                v = r(63808),
                g = function(e, n) {
                    return (0, h.DGz)(v.f6, {
                        slug: e
                    }, (0, o.Z)((0, i.Z)({}, n), {
                        select: function(e) {
                            if (!e.commonKeyword) return null;
                            var n = e.commonKeyword;
                            return {
                                title: n.title || "",
                                content: n.content || ""
                            }
                        }
                    }))
                },
                A = r(15371),
                x = r(29297),
                C = r(98540),
                b = function() {
                    return t || (t = (0, C.t)({
                        math: !0,
                        html: !0,
                        htmlSanitization: !0,
                        brokenImageHolder: !0,
                        gfm: !0,
                        linkSift: !0,
                        linkTargetBlank: !0
                    })), t
                },
                y = (0, s.memo)((function(e) {
                    var n = e.title,
                        r = e.content,
                        t = b();
                    return (0, l.jsxs)("div", {
                        className: (0, d.yI)(A.Cj.bgLayer3, A.Cj.divider4, "w-full cursor-default rounded-lg border border-opacity-5"),
                        children: [(0, l.jsx)("div", {
                            className: (0, d.yI)(A.Cj.divider3, A.Cj.label1, "text-md border-b border-opacity-5 px-4 py-3 font-medium"),
                            children: n
                        }), (0, l.jsx)("div", {
                            className: "px-4 py-3",
                            children: (0, l.jsx)(t, {
                                content: r
                            })
                        })]
                    })
                })),
                w = function(e) {
                    var n = e.dataKeyword,
                        r = (0, a.Z)(e, ["dataKeyword"]),
                        t = (0, s.useState)(!1),
                        d = t[0],
                        h = t[1],
                        v = g(n, {
                            enabled: d
                        }).data,
                        A = (0, p.i)().width,
                        C = (0, s.useMemo)((function() {
                            return Math.min(A ? A - 18 : 0, 385)
                        }), [A]);
                    (0, s.useEffect)((function() {
                        var e = setTimeout((function() {
                            h(!0)
                        }), 1e3);
                        return function() {
                            clearTimeout(e)
                        }
                    }), []);
                    var b, w, k = (0, s.useCallback)((function() {
                            h(!0)
                        }), []),
                        _ = "".concat(null !== (b = r.className) && void 0 !== b ? b : "", " cursor-pointer relative text-dark-blue-s text-sm"),
                        j = null !== (w = r.children) && void 0 !== w ? w : null,
                        B = Object.assign({}, r);
                    delete B.children;
                    var N = (0, c.z2)((function(e) {
                            return e.questionSlug
                        })),
                        I = (0, m.z)((function(e) {
                            e && x.d.qdKeywordExposure({
                                qd_version: (0, f.in)(),
                                qd_question_slug: N
                            })
                        }));
                    return (0, l.jsx)("span", (0, o.Z)((0, i.Z)({}, B), {
                        onMouseEnter: k,
                        className: _,
                        children: (0, l.jsx)(u.J, {
                            contentClassName: "p-0",
                            useHover: !0,
                            mobileEnable: !0,
                            showArrow: !1,
                            onVisibilityChange: I,
                            content: v && (0, l.jsx)("div", {
                                style: {
                                    maxWidth: C,
                                    maxHeight: "420px",
                                    overflowY: "auto"
                                },
                                children: (0, l.jsx)(y, {
                                    content: (null === v || void 0 === v ? void 0 : v.content) || "",
                                    title: (null === v || void 0 === v ? void 0 : v.title) || ""
                                })
                            }),
                            children: j
                        })
                    }))
                },
                k = function(e) {
                    var n, r, t = e.node,
                        s = (0, a.Z)(e, ["node"]);
                    return "element" !== t.type || "string" !== typeof(null === t || void 0 === t || null === (n = t.properties) || void 0 === n ? void 0 : n.dataKeyword) ? (0, l.jsx)("span", (0, i.Z)({}, s)) : (0, l.jsx)(w, (0, o.Z)((0, i.Z)({}, s), {
                        dataKeyword: null === t || void 0 === t || null === (r = t.properties) || void 0 === r ? void 0 : r.dataKeyword
                    }))
                },
                _ = function(e) {
                    e.components.span = k
                }
        },
        86912: function(e, n, r) {
            "use strict";
            r.d(n, {
                I: function() {
                    return a
                }
            });
            var t = r(47568),
                i = r(70655),
                o = function() {
                    var e = (0, t.Z)((function() {
                        var e, n;
                        return (0, i.__generator)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, (t = "".concat("", "/timestamp/"), new Promise((function(e, n) {
                                        var r = new XMLHttpRequest;
                                        r.open("GET", t, !0), r.onload = function() {
                                            200 === r.status ? e(r.responseText) : n(Error())
                                        }, r.onerror = function(e) {
                                            n(e)
                                        }, setTimeout((function() {
                                            n(Error())
                                        }), 2e3), r.send()
                                    })))];
                                case 1:
                                    return e = r.sent(), n = JSON.parse(e), [2, Math.round(1e3 * n.timestamp)]
                            }
                            var t
                        }))
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                a = function() {
                    var e = (0, t.Z)((function() {
                        return (0, i.__generator)(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), [4, o()];
                                case 1:
                                    return [2, e.sent()];
                                case 2:
                                    return e.sent(), [2, Date.now()];
                                case 3:
                                    return [2]
                            }
                        }))
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        9121: function(e, n, r) {
            "use strict";
            r.d(n, {
                b: function() {
                    return m
                }
            });
            var t = r(14924),
                i = r(26042),
                o = r(69396),
                a = r(99534),
                l = r(85893),
                s = r(94184),
                c = r.n(s),
                u = r(67294),
                d = r(66476),
                p = r(15371),
                m = u.forwardRef((function(e, n) {
                    var r, s = e.color,
                        u = e.iconVisible,
                        m = void 0 === u || u,
                        f = e.rounded,
                        h = void 0 === f || f,
                        v = (0, a.Z)(e, ["color", "iconVisible", "rounded"]);
                    return (0, l.jsxs)("div", (0, o.Z)((0, i.Z)({
                        ref: n
                    }, v), {
                        className: c()("flex items-start p-2.5 leading-[20px]", (r = {}, (0, t.Z)(r, c()(p.Cj.labelBlueStandard, p.Cj.bgBlue0), "blue" === s), (0, t.Z)(r, c()(p.Cj.labelRedStandard, p.Cj.bgRed1), "red" === s), (0, t.Z)(r, c()(p.Cj.labelGreenStandard, p.Cj.bgGreen0), "green" === s), (0, t.Z)(r, "rounded", h), r), e.className),
                        children: [m && (0, l.jsx)(d.L, {
                            className: "relative top-[1px] mr-[6px] shrink-0",
                            height: 18,
                            width: 18
                        }), e.children]
                    }))
                }))
        },
        43822: function(e, n, r) {
            "use strict";
            r.d(n, {
                I: function() {
                    return h
                }
            });
            var t = r(14924),
                i = r(26042),
                o = r(69396),
                a = r(99534),
                l = r(85893),
                s = r(67294),
                c = r(12922),
                u = r(15371),
                d = r(68352),
                p = r(81548),
                m = r.n(p),
                f = function(e) {
                    var n = e.icon,
                        r = e.onClick,
                        t = e.className,
                        a = s.isValidElement(n),
                        u = a ? n.props : {},
                        d = a ? s.cloneElement(n, Object.assign({}, (0, o.Z)((0, i.Z)({}, u), {
                            className: (0, c.yI)("w-4 h-4", u.className)
                        }))) : s.createElement(n, {
                            className: "w-4 h-4"
                        });
                    return (0, l.jsx)("div", {
                        className: (0, c.yI)("text-gray-6 dark:text-dark-gray-6 absolute inset-y-0 flex items-center pl-3", {
                            "pointer-events-none": !a
                        }, t),
                        onClick: r,
                        children: (0, l.jsx)("span", {
                            children: d
                        })
                    })
                },
                h = s.forwardRef((function(e, n) {
                    var r, o = e.leftIcon,
                        s = e.leftIconClassName,
                        p = e.leftIconClick,
                        h = e.rightIcon,
                        v = e.rightIconClassName,
                        g = e.rightIconClick,
                        A = e.variant,
                        x = void 0 === A ? "default" : A,
                        C = e.className,
                        b = e.disabled,
                        y = e.wrapperClassName,
                        w = e.autoComplete,
                        k = void 0 === w ? "off" : w,
                        _ = e.handleClear,
                        j = e.value,
                        B = (0, a.Z)(e, ["leftIcon", "leftIconClassName", "leftIconClick", "rightIcon", "rightIconClassName", "rightIconClick", "variant", "className", "disabled", "wrapperClassName", "autoComplete", "handleClear", "value"]),
                        N = !!o,
                        I = !!h,
                        E = !!_ && !!j;
                    return (0, l.jsxs)("div", {
                        className: (0, c.yI)(" relative rounded-md ".concat(m()["input-container"]), y),
                        children: [N ? (0, l.jsx)(f, {
                            icon: o,
                            onClick: p,
                            className: (0, c.yI)("left-0", s)
                        }) : null, (0, l.jsx)("input", (0, i.Z)({
                            ref: n,
                            className: (0, c.yI)("block w-full rounded-md pr-3 leading-5 outline-none", u.Cj.placeholderLabel4, (r = {
                                "border-none py-1.5": "default" === x
                            }, (0, t.Z)(r, u.Cj.label2, "default" === x), (0, t.Z)(r, u.Cj.fill3, "default" === x), (0, t.Z)(r, "focus:bg-fill-2 dark:focus:bg-dark-fill-2", "default" === x), r), {
                                "border-green-s focus:shadow-form border py-[5px] transition-all": "border" === x
                            }, {
                                "pl-3": !N,
                                "pl-9": N,
                                "pr-3": !I,
                                "pr-12": I
                            }, C),
                            disabled: b,
                            autoComplete: k,
                            value: j
                        }, B)), I ? (0, l.jsx)(f, {
                            icon: h,
                            onClick: g,
                            className: (0, c.yI)("right-4", (0, t.Z)({}, "".concat(m()["right-icon"]), E), (0, t.Z)({}, u.Cj.label4, b), v)
                        }) : null, E ? (0, l.jsx)(f, {
                            icon: (0, l.jsx)(d.U, {
                                className: (0, c.yI)("hidden cursor-pointer ".concat(m()["clear-icon"], " right-3"))
                            }),
                            onClick: function(e) {
                                e.stopPropagation(), _()
                            },
                            className: (0, c.yI)("right-4", v)
                        }) : null]
                    })
                }))
        },
        87185: function(e, n, r) {
            "use strict";
            r.d(n, {
                zo: function() {
                    return h
                }
            });
            var t = r(37514),
                i = r(69441),
                o = r(80723),
                a = r(80129),
                l = r.n(a),
                s = ["nav-premium", "nav-shop-premium", "problem-judging-upgrade", "problem-editor-lsp", "problem-related-company", "goods-premium", "problem-list-frequency-lock", "problem-list-premium-title", "problem-list-num-lock", "playground-upgrade", "debugger", "interview-item-plus", "interview-custom-mock", "problem-custom-mock", "wiki-frequency-lock", "navbar-dropdown-context", "interview-premium-question", "profile"],
                c = ["problem-detail-upgrade"],
                u = ["company-start", "company-upgrade", "interview-item-start", "company-search"],
                d = ["competition-history-problem"],
                p = ["plan"],
                m = ["leetbook"];
            var f = {
                source: "premium_source",
                questionSlug: "premium_question_slug",
                companySlug: "premium_company_slug",
                exploreCardSlug: "premium_explore_card_slug",
                contestSlug: "premium_contest_slug",
                contestQuestionSlug: "premium_contest_question_slug",
                planSlug: "premium_study_plan_slug"
            };

            function h(e) {
                var n = function(e) {
                        var n = l().parse(e, {
                            ignoreQueryPrefix: !0
                        });
                        if ((0, t.Z)(n) && n.source) switch (!0) {
                            case s.includes(n.source):
                                return (0, i.Z)(n, "source");
                            case m.includes(n.source):
                                return (0, i.Z)(n, ["source", "leetbookId"]);
                            case c.includes(n.source):
                                return (0, i.Z)(n, ["source", "questionSlug"]);
                            case u.includes(n.source):
                                return (0, i.Z)(n, ["source", "companySlug"]);
                            case d.includes(n.source):
                                return (0, i.Z)(n, ["source", "contestSlug", "contestQuestionSlug"]);
                            case p.includes(n.source):
                                var r = n.source,
                                    o = n.planSlug;
                                return {
                                    source: r,
                                    planSlug: o,
                                    sourceType: r,
                                    sourceId: o
                                };
                            default:
                                return null
                        }
                        return null
                    }(e),
                    r = function(e) {
                        var n = l().parse(e, {
                            ignoreQueryPrefix: !0
                        });
                        return (0, t.Z)(n) && n.promoChannel && "string" === typeof n.promoChannel ? (0, i.Z)(n, "promoChannel") : null
                    }(e),
                    a = r ? {
                        source: r.promoChannel
                    } : n;
                return a ? function(e) {
                    return (0, o.Z)(e, (function(e, n) {
                        return f[n]
                    }))
                }(a) : {}
            }
        },
        88776: function(e, n, r) {
            "use strict";
            r.d(n, {
                G: function() {
                    return t
                }
            });
            var t = function(e) {
                if (!e) return e;
                for (var n = e.toString(), r = new RegExp(/^[-+]?((\d+)([.,](\d{3}))*([.](\d+))?|([.,](\d+))?)$/), t = ",", i = new RegExp(t); i.test(n);) n = n.replace(i, "");
                if (!r.test(n)) return e;
                n = (n = n.replace(/^(\d*)$/, "$1.")).replace(".", t);
                for (var o = new RegExp("(\\d)(\\d{3}".concat(t, ")")); o.test(n);) n = n.replace(o, "$1,$2");
                var a = n.lastIndexOf(t),
                    l = n.substr(0, a),
                    s = a === n.length - 1 ? "" : n.substr(a).replace(i, ".");
                return n = l + s
            }
        },
        7906: function(e, n, r) {
            "use strict";
            r.d(n, {
                x: function() {
                    return o
                }
            });
            var t = r(8183),
                i = r(23025),
                o = {
                    payPremiumStudyPlanPremiumClick: function() {
                        var e = {
                            key: "pay_premium_study_plan_premium_click",
                            data: {}
                        };
                        t.V[i.X.GIO](e), t.V[i.X.GA4](e), t.V[i.X.CONSOLE](e), t.V[i.X.SELF_DB](e)
                    },
                    payPremiumVideoSolutionPremiumButtonClick: function() {
                        var e = {
                            key: "pay_premium_video_solution_premium_button_click",
                            data: {}
                        };
                        t.V[i.X.GIO](e), t.V[i.X.GA4](e), t.V[i.X.CONSOLE](e), t.V[i.X.SELF_DB](e)
                    },
                    payPremiumPremiumDetailButtonClick: function() {
                        var e = {
                            key: "pay_premium_premium_detail_button_click",
                            data: {}
                        };
                        t.V[i.X.GIO](e), t.V[i.X.GA4](e), t.V[i.X.CONSOLE](e), t.V[i.X.SELF_DB](e)
                    },
                    payPremiumHeaderPromoteButtonClick: function(e) {
                        var n = {
                            key: "pay_premium_header_promote_button_click",
                            data: e
                        };
                        t.V[i.X.GIO](n), t.V[i.X.GA4](n), t.V[i.X.CONSOLE](n), t.V[i.X.SELF_DB](n)
                    },
                    payPremiumJumpPremiumClick: function(e) {
                        var n = {
                            key: "pay_premium_jump_premium_click",
                            data: e
                        };
                        t.V[i.X.GIO](n), t.V[i.X.GA4](n), t.V[i.X.CONSOLE](n), t.V[i.X.SELF_DB](n)
                    }
                }
        },
        24223: function(e) {
            e.exports = {
                box: "Box_box__o2yht",
                mask: "Box_mask__2EmH7"
            }
        },
        92924: function(e) {
            e.exports = {
                header: "Header_header__ZaK5x",
                logo: "Header_logo__dIcRv",
                user: "Header_user__l7Zui",
                avatar: "Header_avatar__dgjG8",
                userInner: "Header_userInner___qN4n",
                nick: "Header_nick__y5JJV",
                tag: "Header_tag__v_36l",
                icon: "Header_icon__zofzM",
                premium: "Header_premium__qsnvs",
                free: "Header_free__mpuDS",
                close: "Header_close__3m9Aj"
            }
        },
        98624: function(e) {
            e.exports = {
                box: "Intro_box__yFCYA",
                title: "Intro_title__tqHRO",
                more: "Intro_more__8Ntw7",
                line: "Intro_line__WxXsz",
                link: "Intro_link__7Idm0",
                items: "Intro_items__MiFp_",
                item: "Intro_item__Xaptm",
                icon: "Intro_icon__OXQ4G",
                right1: "Intro_right1__flMwl",
                right2: "Intro_right2__bKO9Q",
                right3: "Intro_right3__A2gvR",
                right4: "Intro_right4__LBAGO"
            }
        },
        38078: function(e) {
            e.exports = {
                box: "Agreement_box__A3uhH",
                link: "Agreement_link__8oa8d"
            }
        },
        30622: function(e) {
            e.exports = {
                box: "Coupon_box__L4kKE",
                icon: "Coupon_icon__HXEJo",
                title: "Coupon_title__sIpO3",
                count: "Coupon_count__3lhz3"
            }
        },
        18868: function(e) {
            e.exports = {
                box: "CouponDialogue_box__FlnkT",
                item: "CouponDialogue_item__fTt_3"
            }
        },
        32863: function(e) {
            e.exports = {
                box: "DetailTip_box__0n7d5",
                content: "DetailTip_content__rR2G9",
                arrow: "DetailTip_arrow__x9Ra5",
                arrowContent: "DetailTip_arrowContent__8rBR4",
                cursor: "DetailTip_cursor__JGwZS",
                inner: "DetailTip_inner__Dalyv",
                title: "DetailTip_title__h9qGj",
                main: "DetailTip_main__SsNyg",
                days: "DetailTip_days__Gizyy",
                price: "DetailTip_price__F2lVO",
                endTime: "DetailTip_endTime__jXo6W"
            }
        },
        28522: function(e) {
            e.exports = {
                box: "Gift_box__IdEBp",
                title: "Gift_title__W5Mx_",
                list: "Gift_list__4UBAJ",
                item: "Gift_item__NZkK1",
                name: "Gift_name__Wq9Vv"
            }
        },
        66044: function(e) {
            e.exports = {
                line: "Line_line__CoMyt"
            }
        },
        43128: function(e) {
            e.exports = {
                box: "MoneyDetail_box__0X2FV",
                unit: "MoneyDetail_unit__jJAh7",
                money: "MoneyDetail_money__56qIY",
                originalPrice: "MoneyDetail_originalPrice__plvf2",
                detail: "MoneyDetail_detail__N1Qzm",
                locator: "MoneyDetail_locator__Z_JZ2"
            }
        },
        23251: function(e) {
            e.exports = {
                box: "OrderDetail_box__9hKxD",
                left: "OrderDetail_left__yD9kU",
                right: "OrderDetail_right__eGE1I"
            }
        },
        56902: function(e) {
            e.exports = {
                box: "Pay_box__arMA_",
                right: "Pay_right__Zs_bS"
            }
        },
        77072: function(e) {
            e.exports = {
                box: "PayMethod_box___z3Jj",
                text: "PayMethod_text__oZ6DL",
                bold: "PayMethod_bold__o676V"
            }
        },
        14425: function(e) {
            e.exports = {
                box: "TipRefresh_box__VAloC",
                icon: "TipRefresh_icon__LRFq_"
            }
        },
        11985: function(e) {
            e.exports = {
                box: "Consecutive_box__EF8IE",
                off: "Consecutive_off__AHQid",
                on: "Consecutive_on__hlv1m",
                title: "Consecutive_title__4iBMl"
            }
        },
        94: function(e) {
            e.exports = {
                multi: "Item30_multi__VZIXq",
                child: "Item30_child__Qj3ip",
                line: "Item30_line__hjzA1"
            }
        },
        5668: function(e) {
            e.exports = {
                best: "Item365_best__ivuW_"
            }
        },
        78036: function(e) {
            e.exports = {
                price: "Price_price__4nkCr",
                on: "Price_on__5N_de",
                off: "Price_off__oNBq2",
                unit: "Price_unit__disMj",
                value: "Price_value__Jk_BH"
            }
        },
        42510: function(e) {
            e.exports = {
                box: "Sku_box__iaSML",
                item: "Sku_item___7t_A",
                active: "Sku_active__8qceX",
                content: "Sku_content__7D3a4",
                sku365: "Sku_sku365__xZrzG",
                sku90: "Sku_sku90__jSKT1",
                sku30: "Sku_sku30__of2z_",
                days: "Sku_days__4G3EY",
                average: "Sku_average__w6UAc"
            }
        },
        25404: function(e) {
            e.exports = {
                box: "Toggle_box__lJ__e",
                disabled: "Toggle_disabled__Mc0PP",
                inner: "Toggle_inner__6EzLL",
                on: "Toggle_on__g8J7V"
            }
        },
        86468: function(e) {
            e.exports = {
                box: "Student_box__9s7Ia",
                icon: "Student_icon__ZerMF",
                content: "Student_content__s69An",
                title: "Student_title__tD6Rw",
                desc: "Student_desc__yNSvw",
                link: "Student_link__QFLfW"
            }
        },
        81548: function(e) {
            e.exports = {
                "input-container": "input_input-container__rvdk6",
                "clear-icon": "input_clear-icon__vWnMq",
                "right-icon": "input_right-icon__YABb6"
            }
        },
        89360: function(e, n, r) {
            var t = r(77754),
                i = "string" === typeof t ? [
                    [e.id, t, ""]
                ] : t;
            (n = e.exports = t.locals || {})._getContent = function() {
                return i
            }, n._getCss = function() {
                return "" + t
            }
        },
        10137: function(e, n, r) {
            var t = r(81784),
                i = "string" === typeof t ? [
                    [e.id, t, ""]
                ] : t;
            (n = e.exports = t.locals || {})._getContent = function() {
                return i
            }, n._getCss = function() {
                return "" + t
            }
        },
        80450: function(e, n, r) {
            var t = r(18301),
                i = "string" === typeof t ? [
                    [e.id, t, ""]
                ] : t;
            (n = e.exports = t.locals || {})._getContent = function() {
                return i
            }, n._getCss = function() {
                return "" + t
            }
        },
        94712: function(e, n, r) {
            var t = r(55815),
                i = "string" === typeof t ? [
                    [e.id, t, ""]
                ] : t;
            (n = e.exports = t.locals || {})._getContent = function() {
                return i
            }, n._getCss = function() {
                return "" + t
            }
        }
    }
]);