// Give typescript the same typing information for the ES Module import path
// that `import * as handlebars from 'handlebars'` would give us

declare module "handlebars/lib/handlebars" {
    export default Handlebars;
}
