const Ziggy = {"url":"https:\/\/deanabnerjul.com","port":null,"defaults":{},"routes":{"frontend.home":{"uri":"\/","methods":["GET","HEAD"]},"frontend.collections.index":{"uri":"collections","methods":["GET","HEAD"]},"frontend.collections.show":{"uri":"collections\/{collection}","methods":["GET","HEAD"],"parameters":["collection"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
