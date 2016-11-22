/**
 * Created by Josue on 22/11/16.
 */
'use strict';

module.exports = function () {
    const pkg = require('./package.json');

    const server = './server/';

    const scssfolder = `${client }scss/`;
    const mainscss = `${scssfolder }main.scss`;
    const build = './build/';
    const appFolder = `${client}app/`;

    const config = {
        projectName: pkg.name,
        version: pkg.version,
        appFolder,
        app: `${appFolder }app.module.js`,
        scssfolder,
        mainscss,
        angularRootApp: `${appFolder}core/`,
        build,
        images: `${client }images/`,
        fonts: `${scssfolder }fonts/`,
        vendorfolder: `${client }vendor/`,
        templateCache: {
            file: 'app.templates.js',
            options: {
                standalone: true,
                module: 'app.templates',
                templateHeader: 'export const AppTemplates = ' +
                ' angular.module("<%= module %>"<%= standalone %>)' +
                '.run(["$templateCache", function($templateCache) {',
                templateFooter: '}]).name;'
            }
        },
        jsOrder: ['**/app.module.js', '**/*.module.js', '**/*.js'],
        browserReloadDelay: 1000,
        files: {
            sass: `${client}**/*.scss`,
            js: [`${client}**/*.js`, `!${client}**/*.templates.js`],
            html: `${client}**/*.html`,
            jade: `${client}**/*.jade`

        }
    };

    return config;
};
