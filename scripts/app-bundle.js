var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "./singletons/config", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, config_1, aurelia_framework_1, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(eventAggregator) {
            var _this = this;
            this.eventAggregator = eventAggregator;
            this.configFactory = new config_1.ConfigFactory();
            this.eventAggregator.subscribe('tileClicked', function (data) {
                var galleryId = data.id;
                _this.router.navigate('/' + galleryId);
            });
            this.configFactory.getConfig().then(function (config) {
                _this.headerImgSrc = config.headerImgSrc;
                _this.siteHeader = config.siteHeader;
            });
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Foxwaffles';
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: 'modules/index', title: "Home", nav: true },
                { route: 'about', name: 'about', moduleId: 'modules/about', title: 'About', nav: true },
                { route: 'contact', name: 'findMe', moduleId: 'modules/contact', title: 'Find Me', nav: true },
                { route: 'resume', name: 'resume', moduleId: 'modules/resume', title: "Resume", nav: true },
                { route: '/:id', name: 'piece', moduleId: 'modules/galleryFocus', title: "Piece" }
            ]);
        };
        App = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
            __metadata("design:paramtypes", [Object])
        ], App);
        return App;
    }());
    exports.App = App;
});



define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});



define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/gallery',["require", "exports", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Gallery = (function () {
        function Gallery(eventAggregator) {
        }
        Gallery.prototype.attached = function () {
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Array)
        ], Gallery.prototype, "list", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Number)
        ], Gallery.prototype, "tileWidth", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Number)
        ], Gallery.prototype, "tileHeight", void 0);
        Gallery = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
            __metadata("design:paramtypes", [Object])
        ], Gallery);
        return Gallery;
    }());
    exports.Gallery = Gallery;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/galleryTile',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../entities/galleryGroup"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, galleryGroup_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GalleryTile = (function () {
        function GalleryTile(eventAggregator) {
            this.eventAggregator = eventAggregator;
        }
        GalleryTile.prototype.clicked = function () {
            this.eventAggregator.publish("tileClicked", { id: this.galleryObject.id });
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Number)
        ], GalleryTile.prototype, "width", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Number)
        ], GalleryTile.prototype, "height", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", galleryGroup_1.GalleryGroup)
        ], GalleryTile.prototype, "galleryObject", void 0);
        GalleryTile = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
            __metadata("design:paramtypes", [Object])
        ], GalleryTile);
        return GalleryTile;
    }());
    exports.GalleryTile = GalleryTile;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/iconRow',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IconRow = (function () {
        function IconRow(link, type, text) {
            this.iconLink = link;
            this.iconText = text;
            this.iconType = type;
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], IconRow.prototype, "iconLink", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], IconRow.prototype, "iconType", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], IconRow.prototype, "iconText", void 0);
        return IconRow;
    }());
    exports.IconRow = IconRow;
});



var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('entities/galleryGroup',["require", "exports", "../entities/galleryObject"], function (require, exports, galleryObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GalleryGroup = (function (_super) {
        __extends(GalleryGroup, _super);
        function GalleryGroup(src, title, description) {
            if (description === void 0) { description = "temporary text"; }
            var _this = _super.call(this, src, title, description) || this;
            _this.galleryView = [];
            return _this;
        }
        GalleryGroup.prototype.addGalleryObject = function (obj) {
            this.galleryView.push(obj);
        };
        return GalleryGroup;
    }(galleryObject_1.GalleryObject));
    exports.GalleryGroup = GalleryGroup;
});



define('entities/galleryObject',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GalleryObject = (function () {
        function GalleryObject(src, title, description) {
            if (description === void 0) { description = "temporary text"; }
            this.id = GalleryObject._id++;
            this.src = src;
            this.title = title;
            this.description = description;
        }
        GalleryObject._id = 0;
        return GalleryObject;
    }());
    exports.GalleryObject = GalleryObject;
});



define('modules/about',["require", "exports", "../singletons/config"], function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var About = (function () {
        function About() {
        }
        About.prototype.activate = function (params, routeConfig) {
            var _this = this;
            (new config_1.ConfigFactory()).getConfig().then(function (config) {
                _this.text = config.aboutText;
                _this.src = config.aboutSrc;
                _this.artistStatement = config.artistStatement;
            });
        };
        return About;
    }());
    exports.About = About;
});



define('modules/contact',["require", "exports", "../singletons/config"], function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Contact = (function () {
        function Contact() {
        }
        Contact.prototype.activate = function (params, routeConfig) {
            var _this = this;
            (new config_1.ConfigFactory()).getConfig().then(function (config) {
                _this.text = config.contactText;
                _this.iconList = config.iconList;
            });
        };
        return Contact;
    }());
    exports.Contact = Contact;
});



define('modules/galleryFocus',["require", "exports", "../singletons/config"], function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GalleryFocus = (function () {
        function GalleryFocus() {
        }
        GalleryFocus.prototype.activate = function (params, routeConfig) {
            var _this = this;
            var configFactory = new config_1.ConfigFactory();
            configFactory.getConfig().then(function (config) {
                var tiles = config.tiles;
                var id = Number(params.id);
                var tile = tiles.filter(function (x) { return x.id === id; })[0];
                _this.galleryObjects = tile.galleryView;
                routeConfig.navModel.setTitle(tile.title);
            });
        };
        return GalleryFocus;
    }());
    exports.GalleryFocus = GalleryFocus;
});



define('modules/index',["require", "exports", "../singletons/config"], function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Index = (function () {
        function Index() {
            var _this = this;
            this.galleryTitle = 'Site Under Construction';
            var configFactory = new config_1.ConfigFactory();
            configFactory.getConfig().then(function (config) {
                _this.list = config.tiles;
            });
        }
        return Index;
    }());
    exports.Index = Index;
});



define('modules/resume',["require", "exports", "../singletons/config"], function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Resume = (function () {
        function Resume() {
        }
        Resume.prototype.activate = function (params, routeConfig) {
            var _this = this;
            (new config_1.ConfigFactory()).getConfig().then(function (config) {
                _this.resumeSrc = config.resumeSrc;
                _this.resumeDownload = config.resumeDownload;
            });
        };
        return Resume;
    }());
    exports.Resume = Resume;
});



define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});



var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('singletons/config',["require", "exports", "../entities/galleryObject", "../entities/galleryGroup", "../components/iconRow"], function (require, exports, galleryObject_1, galleryGroup_1, iconRow_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Config = (function () {
        function Config() {
            this.headerImgSrc = "https://orig00.deviantart.net/619c/f/2016/241/f/1/f1cc10d2ba5ce3b7af0c54b96f57e375-dafqme5.png";
            this.siteHeader = "Foxwaffles";
            this.resumeSrc = "https://www.dropbox.com/s/2djzjbmzyws67r0/Resume2017.png?dl=1";
            this.resumeDownload = "https://www.dropbox.com/s/sx3niyzd5gkyjvv/Resume2017.pdf?dl=1";
            this.iconList = [
                new iconRow_1.IconRow("https://aquashiram14.deviantart.com/", "deviantart", "Art, WIPs, commissions, adoptables, and more! All art hubb."),
                new iconRow_1.IconRow("https://go.twitch.tv/firefoxwaffles", "twitch", "Art streams on Saturdays, video game streams on Sundays, Tuesdays, and Thursdays. Come chat with me and ask me anything!"),
                new iconRow_1.IconRow("#", "youtube", "Stream highlights, speedpaints, tutorials, Q&A's, and more! Coming 2018!"),
                new iconRow_1.IconRow("https://foxwaffleskitchensink.wordpress.com/", "wordpress", "Blog posts of game reviews, philosophy, art, everything and The Kitchen Sink!"),
                new iconRow_1.IconRow("https://foxwafflesdraws.tumblr.com/", "tumblr", "Art, WIPs, Q&A's, and more!"),
                new iconRow_1.IconRow("#", "twitter", "Bite-sized posts of my art and gaming life, along with the occasional cat. Coming 2018!")
            ];
            this.aboutSrc = "https://www.dropbox.com/s/6u0pdnltjkfznw5/AboutMe.png?dl=1";
            this.aboutText = "Just a fox who loves art, animation, video games,\
                        and sharing them all with the world! Her favorite\
                        genre of games is the Japanese RPG. Follow her\
                        elsewhere on the Find Me page to see what she\
                        is up to.\
                        <br/><br/>\
                        To be clear, foxwaffles appreciates the\
                        subtle nuances of both waffles and pancakes\
                        equally.";
            this.artistStatement = "From specializing to multidisciplinary proficiency, Cassie’s vision has shifted throughout her journey. In an era where the individual has more access to entrepreneurial resources than ever before, she has already begun to leverage hers as she builds her brand online. Cassie has discovered that connecting perspectives is her passion. Interwoven stories are not limited to a world of fantasy; they even occur in a team of people with a common goal. This can be leveraged to achieve something greater than even their highest expectations.\
            Cassie dreams of empowering and encouraging those she works with, and is constantly learning along the way. Through her education, she has melded together experiences in illustration, animation, programming, and industrial design. The result is an appreciation and passion for branching out ever further, and she hopes to continue to share that with others.";
            var tileConfig = [
                {
                    title: "Storybook",
                    src: "https://www.dropbox.com/s/d1jwjj2k0u5e9ew/1-Cover.jpg?dl=1",
                    images: [
                        {
                            title: "Cover",
                            src: "https://www.dropbox.com/s/d1jwjj2k0u5e9ew/1-Cover.jpg?dl=1",
                            description: 'Children\'s Board Book\
                                    <br/>Adapted from the Aesop\'s fable "The Crow & The Pitcher"\
                                    <br/><br/>Pen & Ink on Bristol, final editing done in Photoshop.'
                        },
                        {
                            title: "Pages 1 & 2",
                            src: "https://www.dropbox.com/s/3fjq9de3atp1rkc/Spread-1-2.jpg?dl=1",
                            description: ""
                        },
                        {
                            title: "Pages 3 & 4",
                            src: "https://www.dropbox.com/s/m0v0vpj0hu4ipnu/Spread-3-4.jpg?dl=1",
                            description: ""
                        },
                        {
                            title: "Pages 5 & 6",
                            src: "https://www.dropbox.com/s/6sfslc1he859su7/Spread-5-6.jpg?dl=1",
                            description: ""
                        },
                        {
                            title: "Pages 7 & 8",
                            src: "https://www.dropbox.com/s/hewjp2gw4jokjm4/Spread-7-8.jpg?dl=1",
                            description: ""
                        },
                        {
                            title: "Pages 9 & 10",
                            src: "https://www.dropbox.com/s/0uw8rpiwu7o464d/Spread-9-10.jpg?dl=1",
                            description: ""
                        },
                        {
                            title: "Pages 11 & 12",
                            src: "https://www.dropbox.com/s/39tmfxb3ixqjl8k/Spread-11-12.jpg?dl=1",
                            description: ""
                        },
                        {
                            title: "Pages 13 & 14",
                            src: "https://www.dropbox.com/s/zd1qtj1bbto4vm8/Spread-13-14.jpg?dl=1",
                            description: ""
                        },
                    ]
                },
                {
                    title: "Randinnan Shimmermoon",
                    src: "https://www.dropbox.com/s/yhchtt7q4sv8l37/2%20Randinnan.jpg?dl=1",
                    images: [
                        {
                            title: "Randinnan Shimmermoon",
                            src: "https://www.dropbox.com/s/yhchtt7q4sv8l37/2%20Randinnan.jpg?dl=1",
                            description: "Project concentrating on character design and creation\
                                    <br/><br/>Photoshop."
                        },
                        {
                            title: "Randinnan Shimmermoon (Walk-Cycle)",
                            src: "https://www.dropbox.com/s/vujxh9fid7slvt4/2a%20Randinnan.gif?dl=1",
                            description: "Animation drawn frame by frame of a walk cycle that is true\
                                to the personality and form of the character. Inspired by slow motion\
                                footage of the cheetah\
                                <br/><br/>Photoshop and After Effects."
                        }
                    ]
                },
                {
                    title: "Mute",
                    src: "https://www.dropbox.com/s/29m1792bi72dr36/4%20Illustration.jpg?dl=1",
                    images: [
                        {
                            title: "Mute",
                            src: "https://www.dropbox.com/s/29m1792bi72dr36/4%20Illustration.jpg?dl=1",
                            description: "This is the cover of a short story done in response to the prompt \"After\"\
                                <br/><br/>Photoshop."
                        }
                    ]
                },
                {
                    title: "Synthetic Storm",
                    src: "https://www.dropbox.com/s/bcexy7qqrklazdr/3%20Synthetic%20Storm.jpg?dl=1",
                    images: [
                        {
                            title: "Synthetic Storm",
                            src: "https://www.dropbox.com/s/bcexy7qqrklazdr/3%20Synthetic%20Storm.jpg?dl=1",
                            description: "Application of the basics of 3D modeling to create a dynamic creature\
                                <br/><br/>Maya, final editing done in Photoshop."
                        }
                    ]
                },
                {
                    title: "Angels of Heaven",
                    src: "https://www.dropbox.com/s/8f6w5lldb2wmd5u/5%20Angels%20of%20Heaven.jpg?dl=1",
                    images: [
                        {
                            title: "Angels Of Heaven",
                            src: "https://www.dropbox.com/s/8f6w5lldb2wmd5u/5%20Angels%20of%20Heaven.jpg?dl=1",
                            description: "Illustration done exploring color and depression\
                                <br/><br/>Pen & Ink on Bristol, color done in Photoshop"
                        },
                        {
                            title: "Angels Of Heaven (Inks)",
                            src: "https://www.dropbox.com/s/0czc4weeti06d13/5a%20Angels%20of%20Heaven.jpg?dl=1",
                            description: ""
                        }
                    ]
                },
                {
                    title: "Gown removed carelessly, head not so much. -Joss Whedon",
                    src: "https://www.dropbox.com/s/uit7iqbu3u1kcm6/6%20Micronovel.png?dl=1",
                    images: [
                        {
                            title: "Gown removed carelessly, head not so much. -Joss Whedon",
                            src: "https://www.dropbox.com/s/uit7iqbu3u1kcm6/6%20Micronovel.png?dl=1",
                            description: "Illustration done based on a micronovel, a 6-word story, written by Joss Whedon.\
                                <br/><br/>Photoshop."
                        }
                    ]
                },
                {
                    title: "Glass Ocean",
                    src: "https://www.dropbox.com/s/abwhje4qursx6yz/7%20Glass%20Ocean.png?dl=1",
                    images: [
                        {
                            title: "Glass Ocean",
                            src: "https://www.dropbox.com/s/abwhje4qursx6yz/7%20Glass%20Ocean.png?dl=1",
                            description: "Pattern and color exploration based on the ocean\
                                <br/><br/>Photoshop and Illustrator."
                        }
                    ]
                },
                {
                    title: "Tropical",
                    src: "https://www.dropbox.com/s/e4uqr7v23bnf390/8%20Tile.jpg?dl=1",
                    images: [
                        {
                            title: "Tropical",
                            src: "https://www.dropbox.com/s/e4uqr7v23bnf390/8%20Tile.jpg?dl=1",
                            description: "Tile pattern based on shapes, forms, and patterns present in nature\
                                <br/><br/>Pen & Ink on Bristol."
                        }
                    ]
                },
                {
                    title: "The Two Brothers",
                    src: "https://www.dropbox.com/s/dvru0rbh0vvm5ci/9%20Speedpaint.jpg?dl=1",
                    images: [
                        {
                            title: "The Two Brothers",
                            src: "https://www.dropbox.com/s/dvru0rbh0vvm5ci/9%20Speedpaint.jpg?dl=1",
                            description: "Exploration of positive/negative space and light/shadow\
                                <br/><br/>Black and white gesso on Bristol board."
                        }
                    ]
                },
                {
                    title: "Coffee Space",
                    src: "https://www.dropbox.com/s/s9b5h5w5viq8jmv/10%20Coffee.jpg?dl=1",
                    images: [
                        {
                            title: "Coffee Space",
                            src: "https://www.dropbox.com/s/s9b5h5w5viq8jmv/10%20Coffee.jpg?dl=1",
                            description: "Spontaneous exercise based on creating a space out of random coffee splashes\
                                <br/><br/>Coffee, graphite, white correction pen."
                        }
                    ]
                },
                {
                    title: "Stepping Forth",
                    src: "https://www.dropbox.com/s/7s136soypg2q19e/11%20Wire.jpg?dl=1",
                    images: [
                        {
                            title: "Stepping Forth",
                            src: "https://www.dropbox.com/s/7s136soypg2q19e/11%20Wire.jpg?dl=1",
                            description: "Exploration of how rigid, hard wire can be transformed into soft, billowing forms\
                                <br/><br/>Wire, wood base."
                        }
                    ]
                },
                {
                    title: "Dragonfly",
                    src: "https://www.dropbox.com/s/ivlfokgij43upta/12.jpg?dl=1",
                    images: [
                        {
                            title: "Dragonfly",
                            src: "https://www.dropbox.com/s/ivlfokgij43upta/12.jpg?dl=1",
                            description: "Using found objects and small pieces, the goal was to assemble a unified living creature. It is the same size as a real-life dragonfly.\
                        <br/><br/>Screws, computer parts, electric wire, wire, metal scraps."
                        }
                    ]
                },
                {
                    title: "Descent",
                    src: "https://www.dropbox.com/s/cl1pz3ddtcn9cv6/13.jpg?dl=1",
                    images: [
                        {
                            title: "Descent",
                            src: "https://www.dropbox.com/s/cl1pz3ddtcn9cv6/13.jpg?dl=1",
                            description: "Exploration of form and dynamic movement inspired by dragons\
                                <br/><br/>Bronze cast from cuttlefish shell, wood base."
                        }
                    ]
                },
            ];
            this.tiles = [];
            for (var _i = 0, tileConfig_1 = tileConfig; _i < tileConfig_1.length; _i++) {
                var tile = tileConfig_1[_i];
                var group = new galleryGroup_1.GalleryGroup(tile.src, tile.title);
                for (var _a = 0, _b = tile.images; _a < _b.length; _a++) {
                    var image = _b[_a];
                    var imageObject = new galleryObject_1.GalleryObject(image.src, image.title, image.description);
                    group.addGalleryObject(imageObject);
                }
                this.tiles.push(group);
            }
        }
        return Config;
    }());
    exports.Config = Config;
    var config = new Config();
    var ConfigFactory = (function () {
        function ConfigFactory() {
        }
        ConfigFactory.prototype.getConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, config];
                });
            });
        };
        return ConfigFactory;
    }());
    exports.ConfigFactory = ConfigFactory;
});



define('text!app.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"app.css\"></require>\n    <div class=\"layout-column\">\n        <div class=\"flex-no-grow bg-light d-none d-md-flex flex-column align-items-center justify-content-center\">\n                <img height=\"100px\" src=\"${headerImgSrc}\"> <h1>${siteHeader}</h1>\n        </div>\n        <nav class=\"flex-no-grow navbar sticky-top navbar-expand-md navbar-light bg-light mb-5\">\n            <div class=\"container\">\n                <a class=\"navbar-brand d-md-none d-flex align-items-center\" href=\"/#/\"><img class=\"\" height=\"32px\" src=\"${headerImgSrc}\"><div>${siteHeader}</div></a>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                    <ul class=\"navbar-nav m-auto\">\n                        <li class=\"nav-item\" repeat.for=\"nav of router.navigation\">\n                            <a class=\"nav-link\" href.bind=\"nav.href\">${nav.title}</a>                                                                \n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n        <router-view class=\"flex-item layout-column\" swap-order=\"before\"></router-view>              \n    </div>\n\n</template>\n"; });
define('text!components/gallery.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"components/galleryTile\"></require>\n    <require from=\"components/gallery.css\"></require>\n    \n    <gallery-tile repeat.for=\"item of list\" width.bind=\"tileWidth\" height.bind=\"tileHeight\" gallery-object.bind=\"item\"></gallery-tile>\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "a {\n  background-color: transparent !important;\n  transition: .5s;\n  color: black !important; }\n  a:hover {\n    background-color: rgba(0, 0, 0, 0.5) !important;\n    transition: .5s;\n    color: white !important; }\n\n/*html, body {\r\n    height: 100%;\r\n    overflow-y: hidden;\r\n}*/\n.layout-column {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.flex-item {\n  flex: 1; }\n\n.flex-no-grow {\n  flex: 0 0 auto; }\n"; });
define('text!components/gallery.css', ['module'], function(module) { module.exports = "gallery {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: auto; }\n"; });
define('text!components/galleryTile.html', ['module'], function(module) { module.exports = "<template css=\"width:${width}px; height:${height}px;\">\r\n    <require from=\"./galleryTile.css\"></require>\r\n    <div css=\"width:${width}px; height:${height}px;background-image:url('${galleryObject.src}'); background-size: cover; background-position: 50% 50%; background-repeat: no-repeat;\"></div>\r\n    <a class=\"overlay\" click.delegate=\"clicked()\"><div class=\"tile-text\">${galleryObject.title}</div></a>\r\n</template>\r\n"; });
define('text!components/galleryTile.css', ['module'], function(module) { module.exports = "gallery-tile {\n  flex: 1;\n  flex-grow: 0;\n  position: relative; }\n  gallery-tile .overlay {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: transparent !important;\n    color: transparent !important;\n    transition: .8s; }\n    gallery-tile .overlay:hover {\n      background-color: rgba(255, 255, 255, 0.9) !important;\n      color: black !important;\n      transition: .5s; }\n    gallery-tile .overlay div {\n      flex: 1;\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n"; });
define('text!components/iconRow.html', ['module'], function(module) { module.exports = "<template class=\"row justify-content-center\">\r\n    <require from=\"./iconRow.css\"></require>\r\n    <a href=\"${iconLink}\" class=\"col-md-1\">\r\n        <svg if.bind=\"iconType === 'deviantart'\" class=\"deviantart\" viewBox=\"0 0 24 24\">\r\n            <path fill=\"#000000\" d=\"M6,6H12L14,2H18V6L14.5,13H18V18H12L10,22H6V18L9.5,11H6V6Z\" />\r\n        </svg>\r\n        <svg if.bind=\"iconType === 'twitch'\" class=\"twitch\" viewBox=\"0 0 24 24\">\r\n            <path fill=\"#000000\" d=\"M4,2H22V14L17,19H13L10,22H7V19H2V6L4,2M20,13V4H6V16H9V19L12,16H17L20,13M15,7H17V12H15V7M12,7V12H10V7H12Z\" />\r\n        </svg>\r\n        <svg if.bind=\"iconType === 'youtube'\" class=\"youtube\" viewBox=\"0 0 24 24\">\r\n            <path fill=\"#000000\" d=\"M10,16.5V7.5L16,12M20,4.4C19.4,4.2 15.7,4 12,4C8.3,4 4.6,4.19 4,4.38C2.44,4.9 2,8.4 2,12C2,15.59 2.44,19.1 4,19.61C4.6,19.81 8.3,20 12,20C15.7,20 19.4,19.81 20,19.61C21.56,19.1 22,15.59 22,12C22,8.4 21.56,4.91 20,4.4Z\" />\r\n        </svg>\r\n        <svg if.bind=\"iconType === 'wordpress'\" class=\"wordpress\" viewBox=\"0 0 24 24\">\r\n            <path fill=\"#000000\" d=\"M3.42,12C3.42,10.76 3.69,9.58 4.16,8.5L8.26,19.72C5.39,18.33 3.42,15.4 3.42,12M17.79,11.57C17.79,12.3 17.5,13.15 17.14,14.34L16.28,17.2L13.18,8L14.16,7.9C14.63,7.84 14.57,7.16 14.11,7.19C14.11,7.19 12.72,7.3 11.82,7.3L9.56,7.19C9.1,7.16 9.05,7.87 9.5,7.9L10.41,8L11.75,11.64L9.87,17.27L6.74,8L7.73,7.9C8.19,7.84 8.13,7.16 7.67,7.19C7.67,7.19 6.28,7.3 5.38,7.3L4.83,7.29C6.37,4.96 9,3.42 12,3.42C14.23,3.42 16.27,4.28 17.79,5.67H17.68C16.84,5.67 16.24,6.4 16.24,7.19C16.24,7.9 16.65,8.5 17.08,9.2C17.41,9.77 17.79,10.5 17.79,11.57M12.15,12.75L14.79,19.97L14.85,20.09C13.96,20.41 13,20.58 12,20.58C11.16,20.58 10.35,20.46 9.58,20.23L12.15,12.75M19.53,7.88C20.2,9.11 20.58,10.5 20.58,12C20.58,15.16 18.86,17.93 16.31,19.41L18.93,11.84C19.42,10.62 19.59,9.64 19.59,8.77L19.53,7.88M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,21.54C17.26,21.54 21.54,17.26 21.54,12C21.54,6.74 17.26,2.46 12,2.46C6.74,2.46 2.46,6.74 2.46,12C2.46,17.26 6.74,21.54 12,21.54Z\" />\r\n        </svg>\r\n        <svg if.bind=\"iconType === 'tumblr'\" class=\"tumblr\" viewBox=\"0 0 24 24\">\r\n            <path fill=\"#000000\" d=\"M16,11H13V14.9C13,15.63 13.14,16 14.1,16H16V19C16,19 14.97,19.1 13.9,19.1C11.25,19.1 10,17.5 10,15.7V11H8V8.2C10.41,8 10.62,6.16 10.8,5H13V8H16M20,2H4C2.89,2 2,2.89 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z\" />\r\n        </svg>\r\n        <svg if.bind=\"iconType === 'twitter'\" class=\"twitter\" viewBox=\"0 0 24 24\">\r\n            <path fill=\"#000000\" d=\"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z\" />\r\n        </svg>\r\n    </a>\r\n    <div class=\"col-md-5 d-flex align-items-center\">\r\n        <span>${iconText}</span>\r\n    </div>\r\n</template>"; });
define('text!components/iconRow.css', ['module'], function(module) { module.exports = "icon-row a {\n  display: block;\n  height: 75px;\n  position: relative; }\n\nicon-row svg {\n  position: static;\n  height: 100%; }\n"; });
define('text!modules/about.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./about.css\"></require>\r\n    <div class=\"container d-none d-md-block\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-8 d-flex justify-content-center\">\r\n                <div><img src=\"${src}\" style=\"max-width: 100%;\"/></div>\r\n                <div class=\"d-flex align-items-center\"><div class=\"ml-5\" innerhtml=\"${text}\"></div></div>\r\n            </div>\r\n        </div>\r\n        <hr/>\r\n        <div class=\"row\">\r\n            <div class=\"d-flex align-items-center\" innerhtml=\"${artistStatement}\"></div>                \r\n        </div>\r\n    </div>\r\n    <div class=\"container d-md-none\">\r\n        <img src=\"${src}\" style=\"max-width: 50%; float: left;\"/><span innerhtml=\"${text}\"></span>\r\n        <hr/>\r\n        <div innerhtml=\"${artistStatement}\"></div>\r\n    </div>\r\n</template>"; });
define('text!modules/about.css', ['module'], function(module) { module.exports = ".d-flex > div {\n  flex: 1; }\n"; });
define('text!modules/contact.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"components/iconRow\"></require>\r\n    <div class=\"container\">\r\n        <icon-row repeat.for=\"icon of iconList\" icon-type=\"${icon.iconType}\" icon-text=\"${icon.iconText}\" icon-link=\"${icon.iconLink}\"></icon-row> \r\n    </div>\r\n</template>"; });
define('text!modules/resume.css', ['module'], function(module) { module.exports = "iframe {\n  border: none; }\n"; });
define('text!modules/galleryFocus.html', ['module'], function(module) { module.exports = "<template>\r\n<div class=\"layout-column vertical-scroll\">\r\n    <div class=\"container flex-no-grow mt-3\" repeat.for=\"obj of galleryObjects\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <img style=\"max-width:100%;\" src=\"${obj.src}\" alt=\"${obj.text}\">\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <h4 class=\"pl-2 pr-2\">${obj.title}</h4>\r\n                <p class=\"pl-2 pr-2\" innerhtml=\"${obj.description}\"></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n</template>"; });
define('text!modules/index.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"components/gallery\"></require>\r\n    <div class=\"flex-item container-fluid vertical-scroll\">\r\n        <div class=\"row container\" style=\"margin: auto\">\r\n            <div class=\"col text-center\">\r\n                <gallery list.bind=\"list\" tile-width=\"300\" tile-height=\"200\"></gallery></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</template>"; });
define('text!modules/resume.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./resume.css\"></require>\r\n    <div class=\"container\" style=\"width:100%; height:100%\">\r\n        <a href=\"${resumeDownload}\">\r\n            <img src=\"${resumeSrc}\" style=\"max-width: 100%;\"/>\r\n        <!--<iframe width=\"100%\" height=\"100%\" src=\"/resume.html\"></iframe> -->\r\n        </a>\r\n    </div>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map