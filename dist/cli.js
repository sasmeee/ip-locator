#!/usr/bin/env node

const yargs = require("yargs");
const getGeoData = require("../index");

yargs
    .scriptName("getip")
    .usage(`Usage: getip geodata <ip_address>`) // Educational purpose only :) - BlackAmda
    .command(
        'geodata <ip_address>',
        'Fetch geo data for the provided IP address',
        (yargs) => {
            yargs.positional('ip_address', {
                describe: 'The IP address to fetch geo data for',
                type: 'string',
            });
        },
        async (argv) => {
            const ip = argv.ip_address;
            try {
                const data = await getGeoData(ip);
                console.log(data);
            } catch (error) {
                console.error('Error fetching geolocation data:', error.message);
            }
        }
    ).argv;