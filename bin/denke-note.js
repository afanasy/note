#!/usr/bin/env node

'use strict';


process.title = 'denke-note';

var colors = require('colors'),
    note = require('../index.js'),
    portfinder = require('portfinder'),
    opener = require('opener'),
    Path = require('path'),
    parser = require("nomnom");

parser.command('serve')
	.option('path', {
      abbr: 'p',
      help: "The path to the content folder"
   })
   .callback(function(opts) {
      console.log(opts)
      var config = {};
      if(opts.path) {
      	config.content = opts.path;
      	console.log(config.content);
      }
      note.start(config);
   })
   .help("serve current folder");

parser.parse();