# Time in the place

Command-line tool to quickly look up current or specified local time in the given place in the world.

## Examples

What date and time is it now in Amsterdam?

```sh
wt Amsterdam
```

What time is local 5PM in New York

```sh
wt 'New York' 17
```

What time is local 4:30AM in Brisbane

```sh
wt Brisbane 4:30
```

## Prerequisites

- [Bing Maps key](https://docs.microsoft.com/bingmaps/getting-started/bing-maps-dev-center-help/getting-a-bing-maps-key?WT.mc_id=m365-00000-wmastyka)

## Install

- clone this repo
- copy the `.sample.env.js` file to `.env.js`
- enter your Bing Maps key in the `config.bingMapsApiKey` property
- optionally, change the time locale
- run `npm i` to restore dependencies
- run `npm link` to install the executable

## Uninstall

- in the repo folder, run `npm unlink -g` to remove the executable
- delete the repo folder
